var jobsData = JSON.parse(data).data;

document.querySelector('#drawButton').addEventListener('click', () => {
	document.querySelector('#graph-back').classList.add('hidden');
	document.querySelector('#graph-next').classList.add('hidden');
	const jobName = document.querySelector('#jobName').value.trim()
	const jobPrev = document.querySelector('#jobPrev').checked
	const jobNext = document.querySelector('#jobNext').checked
	const orientation = document.querySelector('#graphOrientation').value
	
	let configNext = {
		chart: {
			container: "#job-graper-next",
			levelSeparation: 45,

			rootOrientation: orientation,

			nodeAlign: "BOTTOM",

			connectors: {
				type: "step",
				style: {
					'stroke': '#8080FF',
					'arrow-end': 'block-wide-long'
				}
			},
			node: {
				HTMLclass: "job-graper"
			}
		},		
		nodeStructure: {}
	};

	let configBack = {
		chart: {
			container: "#job-graper-back",
			levelSeparation: 45,

			rootOrientation: orientation,

			nodeAlign: "BOTTOM",

			connectors: {
				type: "step",
				style: {
					'stroke': '#8080FF',
					'arrow-end': 'block-wide-long'
				}
			},
			node: {
				HTMLclass: "job-graper"
			}
		},		
		nodeStructure: {}
	};

	if(jobNext){
		configNext.nodeStructure = getNextJobs(jobName, null, jobsData);
		document.querySelector('#graph-next').classList.remove('hidden');
		new Treant( configNext );
	}

	if(jobPrev)
	{
		document.querySelector('#graph-back').classList.remove('hidden');
		configBack.nodeStructure = getPrevJobs(jobName, null, jobsData);
		new Treant( configBack );
	}

	const prevWidth = jobNext ? parseInt(document.querySelector('#graph-next svg').getAttribute('width')) : 0;
	const backWidth = jobPrev ? parseInt(document.querySelector('#graph-back svg').getAttribute('width')) : 0;

	const widthMax =  prevWidth > backWidth ? prevWidth : backWidth;

	document.body.style.width = widthMax + "px";
});

const getNextJobs = (jobName, parent, jobsData) => {
	const job = jobsData.filter((job) => job.job.toLowerCase() === jobName.toLowerCase())[0]

	if(!job) { return {
		text: {
			name: jobName,
			title: "Not found in xml's"
		},
		HTMLclass : "jobNotFound"
	}}

	const dataJob = {
		text: {
			name: job.job,
			title: job.jobExec,
			path: job.path.split('/').slice(-1)[0],
		},
		connectors: {
			style: {
				'stroke': '#8080FF',
				'arrow-end': 'block-wide-long'
			}
		},
		children: []
	}

	if(!parent) {
		dataJob.HTMLclass = "jobTarget"
	}

	if(job.nextJobs !== "#N/A" && job.nextJobs.trim() !== "") {
		const nexts = job.nextJobs.trim().split(', ');
		nexts.forEach(element => {
			dataJob.children.push(getNextJobs(element, dataJob, jobsData));
		});
	}	

	return dataJob;
}

const getPrevJobs = (jobName, parent, jobsData) => {
	const job = jobsData.filter((job) => job.job.toLowerCase() === jobName.toLowerCase())[0]

	if(!job) { return {
		text: {
			name: jobName,
			title: "Not found in xml's"
		},
		HTMLclass : "jobNotFound"
	}}

	const dataJob = {
		text: {
			name: job.job,
			title: job.jobExec,
			path: job.path.split('/').slice(-1)[0],
		},
		connectors: {
			style: {
				'stroke': '#8080FF',
				'arrow-end': 'block-wide-long'
			}
		},
		children: []
	}

	if(!parent) {
		dataJob.HTMLclass = "jobTarget"
	}

	if(job.prevJobs !== "#N/A" && job.prevJobs.trim() !== "") {
		const prevs = job.prevJobs.trim().split(', ');
		prevs.forEach(element => {
			dataJob.children.push(getPrevJobs(element, dataJob, jobsData));
		});
	}	

	return dataJob;
}

let nodes = []
let edges = []

const buildGraph = (jobName, goUp=true) => {
    let job = jobsData.filter((job) => job.job === jobName)[0];
	
	if(!job) {
		job = {
			job: jobName,
			jobExec: "NOT EXISTS IN XML'S",
			nextJobs: "#N/A",
			path: "NOT EXISTS IN XML'S",
			prevJobs: "#N/A"
		}
	}
	
    if(!nodes.some((node) => node.data.id === jobName))
    {
        nodes.push({
            data: {
                id: job.job,
                name: job.jobExec,
                faveColor: '#F5A45D',
                faveShape: 'rectangle'
            }
        });
    }    

    if(job.prevJobs !== "#N/A" && job.prevJobs !== "" && goUp)
    {
        const jobsBacks = job.prevJobs.split(', ');
        
        jobsBacks.forEach(element => {
            if(!exitsRelationShip(jobName, element, 'PREV')){
                edges.push({
                    data: {source: element, target: jobName, faveColor: '#6FB1FC'}
                });

                buildGraph(element, goUp)
            }
        });
    }

    if(job.nextJobs !== "#N/A" && job.nextJobs !== "")
    {
        const jobsNexts = job.nextJobs.split(', ');

        jobsNexts.forEach(element => {
            if(!exitsRelationShip(jobName, element, 'NEXT')){
                edges.push({
                    data: {source: jobName, target: element, faveColor: '#6FB1FC'}
                });
                
                buildGraph(element, goUp)
            }
        });
    }
}

const exitsRelationShip = (jobName, jobRelation, typeRelation) => {
    if(typeRelation === 'NEXT'){
        return edges.some((rel) => rel.data.source === jobName && rel.data.target === jobRelation);
    }
    
    return edges.some((rel) => rel.data.source === jobRelation && rel.data.target === jobName);
}