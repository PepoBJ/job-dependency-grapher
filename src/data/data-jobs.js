data = `{
    "data": [
      {
        "job": "PCOGCP0DF0",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "#N/A",
        "isBase": true,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0SHI",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "#N/A",
        "isBase": true,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0H01",
        "nextJobs": "PCOGCP0I01",
        "prevJobs": "#N/A",
        "jobExec": "pcog-pe-spk-qlt-adjustratess-01",
        "isBase": true,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0I01",
        "nextJobs": "PCOGCP0I02, PCOGCP0H02",
        "prevJobs": "PCOGCP0H01",
        "jobExec": "pcog-pe-krb-inr-adjustratesp-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0H02",
        "nextJobs": "#N/A",
        "prevJobs": "PCOGCP0I01",
        "jobExec": "pcog-pe-spk-qlt-adjustratesr-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0I02",
        "nextJobs": "PCOGCP0H03, PBILCP0014",
        "prevJobs": "PCOGCP0I01",
        "jobExec": "pcog-pe-krb-inm-adjustratesp-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0H03",
        "nextJobs": "#N/A",
        "prevJobs": "PCOGCP0I02",
        "jobExec": "pcog-pe-spk-qlt-adjustratesm-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0028",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "#N/A",
        "isBase": true,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0T28",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "cpdatapx.sh",
        "isBase": true,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0C28",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "pcog-pe-krb-out-exchangeratep-01",
        "isBase": true,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0029",
        "nextJobs": "PCOGCP0030",
        "prevJobs": "#N/A",
        "jobExec": "pcog-pe-spk-qlt-catalogrcds-01",
        "isBase": true,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0030",
        "nextJobs": "PCOGCP0031",
        "prevJobs": "PCOGCP0029",
        "jobExec": "pcog-pe-krb-inr-catalogrcdp-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0031",
        "nextJobs": "PCOGCP0032",
        "prevJobs": "PCOGCP0030",
        "jobExec": "pcog-pe-spk-qlt-catalogrcdr-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0032",
        "nextJobs": "PCOGCP0033",
        "prevJobs": "PCOGCP0031",
        "jobExec": "pcog-pe-krb-inm-catalogrcdp-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0033",
        "nextJobs": "PCOGCP0034",
        "prevJobs": "PCOGCP0032",
        "jobExec": "pcog-pe-spk-qlt-catalogrcdm-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0034",
        "nextJobs": "#N/A",
        "prevJobs": "PCOGCP0033",
        "jobExec": "pcog-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0H04",
        "nextJobs": "PCOGCP0I03",
        "prevJobs": "#N/A",
        "jobExec": "pcog-pe-spk-qlt-exchangerateinfos-01",
        "isBase": true,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0I03",
        "nextJobs": "PCOGCP0H05, PCOGCP0I04",
        "prevJobs": "PCOGCP0H04",
        "jobExec": "pcog-pe-krb-inr-exchangerateinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0H05",
        "nextJobs": "#N/A",
        "prevJobs": "PCOGCP0I03",
        "jobExec": "pcog-pe-spk-qlt-exchangerateinfor-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0I04",
        "nextJobs": "PCOGCP0H06",
        "prevJobs": "PCOGCP0I03",
        "jobExec": "pcog-pe-krb-inm-exchangerateinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0H06",
        "nextJobs": "#N/A",
        "prevJobs": "PCOGCP0I04",
        "jobExec": "pcog-pe-spk-qlt-exchangerateinfom-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0H07",
        "nextJobs": "PCOGCP0I05",
        "prevJobs": "#N/A",
        "jobExec": "pcog-pe-spk-qlt-currencyinformations-01",
        "isBase": true,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0I05",
        "nextJobs": "PCOGCP0H08, PCOGCP0I06",
        "prevJobs": "PCOGCP0H07",
        "jobExec": "pcog-pe-krb-inr-currencyinformationp-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0H08",
        "nextJobs": "#N/A",
        "prevJobs": "PCOGCP0I05",
        "jobExec": "pcog-pe-spk-qlt-currencyinformationr-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0I06",
        "nextJobs": "PCOGCP0H09",
        "prevJobs": "PCOGCP0I05",
        "jobExec": "pcog-pe-krb-inm-currencyinformationp-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0H09",
        "nextJobs": "#N/A",
        "prevJobs": "PCOGCP0I06",
        "jobExec": "pcog-pe-spk-qlt-currencyinformationm-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0H10",
        "nextJobs": "PCOGCP0I07",
        "prevJobs": "#N/A",
        "jobExec": "pcog-pe-spk-qlt-corporatecatalogss-01",
        "isBase": true,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0I07",
        "nextJobs": "PCOGCP0H11, PCOGCP0I08",
        "prevJobs": "PCOGCP0H10",
        "jobExec": "pcog-pe-krb-inr-corporatecatalogsp-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0H11",
        "nextJobs": "#N/A",
        "prevJobs": "PCOGCP0I07",
        "jobExec": "pcog-pe-spk-qlt-corporatecatalogsr-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0I08",
        "nextJobs": "PCOGCP0H12, PKBTQCP0022, PMOLCP0077, PMOLCP0083, PGUGCP0023, PGUGCP0083, PGUGCP0113, PGUGCP0143",
        "prevJobs": "PCOGCP0I07",
        "jobExec": "pcog-pe-krb-inm-corporatecatalogsp-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0H12",
        "nextJobs": "PCOGCP0001, PKMOLCP0P02, PKMOLCP0P03, PKMOLCP0P05, PKPFMCP0P07",
        "prevJobs": "PCOGCP0I08",
        "jobExec": "pcog-pe-spk-qlt-corporatecatalogsm-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0001",
        "nextJobs": "#N/A",
        "prevJobs": "PCOGCP0H12",
        "jobExec": "pcog-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0002",
        "nextJobs": "PCOGCP0003",
        "prevJobs": "#N/A",
        "jobExec": "pcog-pe-spk-qlt-branchhierarchiesdailys-01",
        "isBase": true,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0003",
        "nextJobs": "PCOGCP0004, PCOGCP0005",
        "prevJobs": "PCOGCP0002",
        "jobExec": "pcog-pe-krb-inr-branchhierarchiesdailyp-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0004",
        "nextJobs": "#N/A",
        "prevJobs": "PCOGCP0003",
        "jobExec": "pcog-pe-spk-qlt-branchhierarchiesdailyr-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0005",
        "nextJobs": "PCOGCP0006",
        "prevJobs": "PCOGCP0003",
        "jobExec": "pcog-pe-krb-inm-branchhierarchiesdailyp-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0006",
        "nextJobs": "PCOGCP0007",
        "prevJobs": "PCOGCP0005",
        "jobExec": "pcog-pe-spk-qlt-branchhierarchiesdailym-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0007",
        "nextJobs": "#N/A",
        "prevJobs": "PCOGCP0006",
        "jobExec": "pcog-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGPP0001",
        "nextJobs": "PCOGCP0008",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0008",
        "nextJobs": "PCOGCP0009",
        "prevJobs": "PCOGPP0001",
        "jobExec": "pcog-pe-spk-qlt-contractsrelationships-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0009",
        "nextJobs": "PCOGCP0010, PCOGCP0011",
        "prevJobs": "PCOGCP0008",
        "jobExec": "pcog-pe-krb-inr-contractsrelationshipp-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0010",
        "nextJobs": "#N/A",
        "prevJobs": "PCOGCP0009",
        "jobExec": "pcog-pe-spk-qlt-contractsrelationshipr-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0011",
        "nextJobs": "PCOGCP0012, PCOGCP0013",
        "prevJobs": "PCOGCP0009",
        "jobExec": "pcog-pe-krb-inm-contractsrelationshipp-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0012",
        "nextJobs": "#N/A",
        "prevJobs": "PCOGCP0011",
        "jobExec": "pcog-pe-spk-qlt-contractsrelationshipm-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PCOGCP0013",
        "nextJobs": "#N/A",
        "prevJobs": "PCOGCP0011",
        "jobExec": "pcog-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCOG/CR-PECOGDIA-T02.xml"
      },
      {
        "job": "PXPUCP4H01",
        "nextJobs": "PXPUCP4I01",
        "prevJobs": "#N/A",
        "jobExec": "pxpu-pe-spk-qlt-sunatlegalreps-01",
        "isBase": true,
        "path": "./xmls/Local/PXPU/CR-PEXPUMEN-T02.xml"
      },
      {
        "job": "PXPUCP4I01",
        "nextJobs": "PXPUCP4H02, PXPUCP4I02",
        "prevJobs": "PXPUCP4H01",
        "jobExec": "pxpu-pe-krb-inr-sunatlegalrepp-01",
        "isBase": false,
        "path": "./xmls/Local/PXPU/CR-PEXPUMEN-T02.xml"
      },
      {
        "job": "PXPUCP4H02",
        "nextJobs": "#N/A",
        "prevJobs": "PXPUCP4I01",
        "jobExec": "pxpu-pe-spk-qlt-sunatlegalrepr-01",
        "isBase": false,
        "path": "./xmls/Local/PXPU/CR-PEXPUMEN-T02.xml"
      },
      {
        "job": "PXPUCP4I02",
        "nextJobs": "PXPUCP4H03, PCDOCP4038",
        "prevJobs": "PXPUCP4I01",
        "jobExec": "pxpu-pe-krb-inm-sunatlegalrepp-01",
        "isBase": false,
        "path": "./xmls/Local/PXPU/CR-PEXPUMEN-T02.xml"
      },
      {
        "job": "PXPUCP4H03",
        "nextJobs": "#N/A",
        "prevJobs": "PXPUCP4I02",
        "jobExec": "pxpu-pe-spk-qlt-sunatlegalrepm-01",
        "isBase": false,
        "path": "./xmls/Local/PXPU/CR-PEXPUMEN-T02.xml"
      },
      {
        "job": "PXPUCP4001",
        "nextJobs": "PXPUCP4002",
        "prevJobs": "#N/A",
        "jobExec": "pxpu-pe-spk-qlt-sunatbasicinformations-01",
        "isBase": true,
        "path": "./xmls/Local/PXPU/CR-PEXPUMEN-T02.xml"
      },
      {
        "job": "PXPUCP4002",
        "nextJobs": "PXPUCP4003",
        "prevJobs": "PXPUCP4001",
        "jobExec": "pxpu-pe-krb-inr-sunatbasicinformationp-01",
        "isBase": false,
        "path": "./xmls/Local/PXPU/CR-PEXPUMEN-T02.xml"
      },
      {
        "job": "PXPUCP4003",
        "nextJobs": "PXPUCP4007",
        "prevJobs": "PXPUCP4002",
        "jobExec": "pxpu-pe-spk-qlt-sunatbasicinformationr-01",
        "isBase": false,
        "path": "./xmls/Local/PXPU/CR-PEXPUMEN-T02.xml"
      },
      {
        "job": "PXPUCP4004",
        "nextJobs": "PXPUCP4005",
        "prevJobs": "#N/A",
        "jobExec": "pxpu-pe-spk-qlt-sunatadditionalinfos-01",
        "isBase": true,
        "path": "./xmls/Local/PXPU/CR-PEXPUMEN-T02.xml"
      },
      {
        "job": "PXPUCP4005",
        "nextJobs": "PXPUCP4006",
        "prevJobs": "PXPUCP4004",
        "jobExec": "pxpu-pe-krb-inr-sunatadditionalinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PXPU/CR-PEXPUMEN-T02.xml"
      },
      {
        "job": "PXPUCP4006",
        "nextJobs": "PXPUCP4007",
        "prevJobs": "PXPUCP4005",
        "jobExec": "pxpu-pe-spk-qlt-sunatadditionalinfor-01",
        "isBase": false,
        "path": "./xmls/Local/PXPU/CR-PEXPUMEN-T02.xml"
      },
      {
        "job": "PXPUCP4007",
        "nextJobs": "PXPUCP4008",
        "prevJobs": "PXPUCP4003, PXPUCP4006",
        "jobExec": "pxpu-pe-krb-inm-sunattaxpayersp-01",
        "isBase": false,
        "path": "./xmls/Local/PXPU/CR-PEXPUMEN-T02.xml"
      },
      {
        "job": "PXPUCP4008",
        "nextJobs": "PXPUCP4009, PXPUCP4010",
        "prevJobs": "PXPUCP4007",
        "jobExec": "pxpu-pe-spk-qlt-sunattaxpayersm-01",
        "isBase": false,
        "path": "./xmls/Local/PXPU/CR-PEXPUMEN-T02.xml"
      },
      {
        "job": "PXPUCP4009",
        "nextJobs": "#N/A",
        "prevJobs": "PXPUCP4008",
        "jobExec": "pxpu-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PXPU/CR-PEXPUMEN-T02.xml"
      },
      {
        "job": "PXPUCP4010",
        "nextJobs": "#N/A",
        "prevJobs": "PXPUCP4008",
        "jobExec": "pxpu-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PXPU/CR-PEXPUMEN-T02.xml"
      },
      {
        "job": "PSTMCP0H01",
        "nextJobs": "PSTMCP0I03",
        "prevJobs": "#N/A",
        "jobExec": "pstm-pe-spk-qlt-loancontspecsettlconds-01",
        "isBase": true,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0I03",
        "nextJobs": "PSTMCP0H02, PSTMCP0I04",
        "prevJobs": "PSTMCP0H01",
        "jobExec": "pstm-pe-krb-inr-loancontspecsettlcondp-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0H02",
        "nextJobs": "#N/A",
        "prevJobs": "PSTMCP0I03",
        "jobExec": "pstm-pe-spk-qlt-loancontspecsettlcondr-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0I04",
        "nextJobs": "PSTMCP0H03",
        "prevJobs": "PSTMCP0I03",
        "jobExec": "pstm-pe-krb-inm-loancontspecsettlcondp-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0H03",
        "nextJobs": "#N/A",
        "prevJobs": "PSTMCP0I04",
        "jobExec": "pstm-pe-spk-qlt-loancontspecsettlcondm-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0H04",
        "nextJobs": "PSTMCP0I05",
        "prevJobs": "#N/A",
        "jobExec": "pstm-pe-spk-qlt-loaninvoicedreceiptss-01",
        "isBase": true,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0I05",
        "nextJobs": "PSTMCP0H05, PSTMCP0I06",
        "prevJobs": "PSTMCP0H04",
        "jobExec": "pstm-pe-krb-inr-loaninvoicedreceiptsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0H05",
        "nextJobs": "#N/A",
        "prevJobs": "PSTMCP0I05",
        "jobExec": "pstm-pe-spk-qlt-loaninvoicedreceiptsr-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0I06",
        "nextJobs": "PSTMCP0H06",
        "prevJobs": "PSTMCP0I05",
        "jobExec": "pstm-pe-krb-inm-loaninvoicedreceiptsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0H06",
        "nextJobs": "#N/A",
        "prevJobs": "PSTMCP0I06",
        "jobExec": "pstm-pe-spk-qlt-loaninvoicedreceiptsm-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0H07",
        "nextJobs": "PSTMCP0I07",
        "prevJobs": "#N/A",
        "jobExec": "pstm-pe-spk-qlt-supplierpaymentorderss-01",
        "isBase": true,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0I07",
        "nextJobs": "PSTMCP0H08, PSTMCP0I08",
        "prevJobs": "PSTMCP0H07",
        "jobExec": "pstm-pe-krb-inr-supplierpaymentordersp-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0H08",
        "nextJobs": "#N/A",
        "prevJobs": "PSTMCP0I07",
        "jobExec": "pstm-pe-spk-qlt-supplierpaymentordersr-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0I08",
        "nextJobs": "PSTMCP0H09",
        "prevJobs": "PSTMCP0I07",
        "jobExec": "pstm-pe-krb-inm-supplierpaymentordersp-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0H09",
        "nextJobs": "#N/A",
        "prevJobs": "PSTMCP0I08",
        "jobExec": "pstm-pe-spk-qlt-supplierpaymentordersm-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0H10",
        "nextJobs": "PSTMCP0I09",
        "prevJobs": "#N/A",
        "jobExec": "pstm-pe-spk-qlt-guaranteebilledfeess-01",
        "isBase": true,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0I09",
        "nextJobs": "PSTMCP0H11, PSTMCP0I10",
        "prevJobs": "PSTMCP0H10",
        "jobExec": "pstm-pe-krb-inr-guaranteebilledfeesp-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0H11",
        "nextJobs": "#N/A",
        "prevJobs": "PSTMCP0I09",
        "jobExec": "pstm-pe-spk-qlt-guaranteebilledfeesr-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0I10",
        "nextJobs": "PSTMCP0H12",
        "prevJobs": "PSTMCP0I09",
        "jobExec": "pstm-pe-krb-inm-guaranteebilledfeesp-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0H12",
        "nextJobs": "#N/A",
        "prevJobs": "PSTMCP0I10",
        "jobExec": "pstm-pe-spk-qlt-guaranteebilledfeesm-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0001",
        "nextJobs": "PSTMCP0002",
        "prevJobs": "#N/A",
        "jobExec": "pstm-pe-spk-qlt-bonusess-01",
        "isBase": true,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0002",
        "nextJobs": "PSTMCP0003",
        "prevJobs": "PSTMCP0001",
        "jobExec": "pstm-pe-krb-inr-bonusesp-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0003",
        "nextJobs": "PSTMCP0004",
        "prevJobs": "PSTMCP0002",
        "jobExec": "pstm-pe-spk-qlt-bonusesr-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0004",
        "nextJobs": "PSTMCP0005",
        "prevJobs": "PSTMCP0003",
        "jobExec": "pstm-pe-krb-inm-bonusesp-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0005",
        "nextJobs": "PSTMCP0006",
        "prevJobs": "PSTMCP0004",
        "jobExec": "pstm-pe-spk-qlt-bonusesm-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0006",
        "nextJobs": "#N/A",
        "prevJobs": "PSTMCP0005",
        "jobExec": "pstm-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0007",
        "nextJobs": "PSTMCP0008",
        "prevJobs": "#N/A",
        "jobExec": "pstm-pe-spk-qlt-frgntradeheadersettls-01",
        "isBase": true,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0008",
        "nextJobs": "PSTMCP0009",
        "prevJobs": "PSTMCP0007",
        "jobExec": "pstm-pe-krb-inr-frgntradeheadersettlp-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0009",
        "nextJobs": "PSTMCP0010",
        "prevJobs": "PSTMCP0008",
        "jobExec": "pstm-pe-spk-qlt-frgntradeheadersettlr-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0010",
        "nextJobs": "PSTMCP0011",
        "prevJobs": "PSTMCP0009",
        "jobExec": "pstm-pe-krb-inm-frgntradeheadersettlp-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0011",
        "nextJobs": "PSTMCP0012",
        "prevJobs": "PSTMCP0010",
        "jobExec": "pstm-pe-spk-qlt-frgntradeheadersettlm-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0012",
        "nextJobs": "#N/A",
        "prevJobs": "PSTMCP0011",
        "jobExec": "pstm-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0013",
        "nextJobs": "PSTMCP0014",
        "prevJobs": "#N/A",
        "jobExec": "pstm-pe-spk-qlt-prslprivlinesdlysettls-01",
        "isBase": true,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0014",
        "nextJobs": "PSTMCP0015, PSTMCP0016",
        "prevJobs": "PSTMCP0013",
        "jobExec": "pstm-pe-krb-inr-prslprivlinesdlysettlp-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0015",
        "nextJobs": "#N/A",
        "prevJobs": "PSTMCP0014",
        "jobExec": "pstm-pe-spk-qlt-prslprivlinesdlysettlr-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0016",
        "nextJobs": "PSTMCP0017",
        "prevJobs": "PSTMCP0014",
        "jobExec": "pstm-pe-krb-inm-prslprivlinesdlysettlp-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0017",
        "nextJobs": "PSTMCP0018",
        "prevJobs": "PSTMCP0016",
        "jobExec": "pstm-pe-spk-qlt-prslprivlinesdlysettlm-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0018",
        "nextJobs": "#N/A",
        "prevJobs": "PSTMCP0017",
        "jobExec": "pstm-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0019",
        "nextJobs": "PSTMCP0020",
        "prevJobs": "#N/A",
        "jobExec": "pstm-pe-spk-qlt-comexapplratesinfos-01",
        "isBase": true,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0020",
        "nextJobs": "PSTMCP0021, PSTMCP0022",
        "prevJobs": "PSTMCP0019",
        "jobExec": "pstm-pe-krb-inr-comexapplratesinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0021",
        "nextJobs": "#N/A",
        "prevJobs": "PSTMCP0020",
        "jobExec": "pstm-pe-spk-qlt-comexapplratesinfor-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0022",
        "nextJobs": "PSTMCP0023",
        "prevJobs": "PSTMCP0020",
        "jobExec": "pstm-pe-krb-inm-comexapplratesinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0023",
        "nextJobs": "PSTMCP0024",
        "prevJobs": "PSTMCP0022",
        "jobExec": "pstm-pe-spk-qlt-comexapplratesinfom-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0024",
        "nextJobs": "#N/A",
        "prevJobs": "PSTMCP0023",
        "jobExec": "pstm-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0025",
        "nextJobs": "PSTMCP0026",
        "prevJobs": "#N/A",
        "jobExec": "pstm-pe-spk-qlt-billingincidentss-01",
        "isBase": true,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0026",
        "nextJobs": "PSTMCP0027, PSTMCP0028",
        "prevJobs": "PSTMCP0025",
        "jobExec": "pstm-pe-krb-inr-billingincidentsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0027",
        "nextJobs": "#N/A",
        "prevJobs": "PSTMCP0026",
        "jobExec": "pstm-pe-spk-qlt-billingincidentsr-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0028",
        "nextJobs": "PSTMCP0029",
        "prevJobs": "PSTMCP0026",
        "jobExec": "pstm-pe-krb-inm-billingincidentsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0029",
        "nextJobs": "PSTMCP0030",
        "prevJobs": "PSTMCP0028",
        "jobExec": "pstm-pe-spk-qlt-billingincidentsm-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP0030",
        "nextJobs": "#N/A",
        "prevJobs": "PSTMCP0029",
        "jobExec": "pstm-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMDIA-T02.xml"
      },
      {
        "job": "PSTMCP4001",
        "nextJobs": "PSTMCP4002",
        "prevJobs": "#N/A",
        "jobExec": "pstm-pe-spk-qlt-cardlocks-01",
        "isBase": true,
        "path": "./xmls/Local/PSTM/CR-PESTMMEN-T02.xml"
      },
      {
        "job": "PSTMCP4002",
        "nextJobs": "PSTMCP4003",
        "prevJobs": "PSTMCP4001",
        "jobExec": "pstm-pe-krb-inr-cardlockp-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMMEN-T02.xml"
      },
      {
        "job": "PSTMCP4003",
        "nextJobs": "PSTMCP4004",
        "prevJobs": "PSTMCP4002",
        "jobExec": "pstm-pe-spk-qlt-cardlockr-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMMEN-T02.xml"
      },
      {
        "job": "PSTMCP4004",
        "nextJobs": "PSTMCP4005",
        "prevJobs": "PSTMCP4003",
        "jobExec": "pstm-pe-krb-inm-cardlockp-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMMEN-T02.xml"
      },
      {
        "job": "PSTMCP4005",
        "nextJobs": "PSTMCP4006",
        "prevJobs": "PSTMCP4004",
        "jobExec": "pstm-pe-spk-qlt-cardlockm-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMMEN-T02.xml"
      },
      {
        "job": "PSTMCP4006",
        "nextJobs": "#N/A",
        "prevJobs": "PSTMCP4005",
        "jobExec": "pstm-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSTM/CR-PESTMMEN-T02.xml"
      },
      {
        "job": "PSAGPP0I01",
        "nextJobs": "PSAGCP0H01",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PSAG/CR-PESAGDIA-T02.xml"
      },
      {
        "job": "PSAGCP0H01",
        "nextJobs": "PSAGCP0I01",
        "prevJobs": "PSAGPP0I01",
        "jobExec": "psag-pe-spk-qlt-custandgroupsmasters-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGDIA-T02.xml"
      },
      {
        "job": "PSAGCP0I01",
        "nextJobs": "PSAGCP0H02, PSAGCP0I02",
        "prevJobs": "PSAGCP0H01",
        "jobExec": "psag-pe-krb-inr-custandgroupsmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGDIA-T02.xml"
      },
      {
        "job": "PSAGCP0H02",
        "nextJobs": "#N/A",
        "prevJobs": "PSAGCP0I01",
        "jobExec": "psag-pe-spk-qlt-custandgroupsmasterr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGDIA-T02.xml"
      },
      {
        "job": "PSAGCP0I02",
        "nextJobs": "PSAGCP0H03",
        "prevJobs": "PSAGCP0I01",
        "jobExec": "psag-pe-krb-inm-custandgroupsmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGDIA-T02.xml"
      },
      {
        "job": "PSAGCP0H03",
        "nextJobs": "#N/A",
        "prevJobs": "PSAGCP0I02",
        "jobExec": "psag-pe-spk-qlt-custandgroupsmasterm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGDIA-T02.xml"
      },
      {
        "job": "PSAGCP0001",
        "nextJobs": "PSAGCP0002",
        "prevJobs": "#N/A",
        "jobExec": "psag-pe-spk-qlt-relnshpbtwncustcogrps-01",
        "isBase": true,
        "path": "./xmls/Local/PSAG/CR-PESAGDIA-T02.xml"
      },
      {
        "job": "PSAGCP0002",
        "nextJobs": "PSAGCP0003",
        "prevJobs": "PSAGCP0001",
        "jobExec": "psag-pe-krb-inr-relnshpbtwncustcogrpp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGDIA-T02.xml"
      },
      {
        "job": "PSAGCP0003",
        "nextJobs": "PSAGCP0004",
        "prevJobs": "PSAGCP0002",
        "jobExec": "psag-pe-spk-qlt-relnshpbtwncustcogrpr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGDIA-T02.xml"
      },
      {
        "job": "PSAGCP0004",
        "nextJobs": "PSAGCP0005",
        "prevJobs": "PSAGCP0003",
        "jobExec": "psag-pe-krb-inm-relnshpbtwncustcogrpp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGDIA-T02.xml"
      },
      {
        "job": "PSAGCP0005",
        "nextJobs": "PSAGCP0006",
        "prevJobs": "PSAGCP0004",
        "jobExec": "psag-pe-spk-qlt-relnshpbtwncustcogrpm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGDIA-T02.xml"
      },
      {
        "job": "PSAGCP0006",
        "nextJobs": "#N/A",
        "prevJobs": "PSAGCP0005",
        "jobExec": "psag-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGDIA-T02.xml"
      },
      {
        "job": "PSAGCP0007",
        "nextJobs": "PSAGCP0008",
        "prevJobs": "#N/A",
        "jobExec": "psag-pe-spk-qlt-economicgroups-01",
        "isBase": true,
        "path": "./xmls/Local/PSAG/CR-PESAGDIA-T02.xml"
      },
      {
        "job": "PSAGCP0008",
        "nextJobs": "PSAGCP0009, PSAGCP0010",
        "prevJobs": "PSAGCP0007",
        "jobExec": "psag-pe-krb-inr-economicgroupp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGDIA-T02.xml"
      },
      {
        "job": "PSAGCP0009",
        "nextJobs": "#N/A",
        "prevJobs": "PSAGCP0008",
        "jobExec": "psag-pe-spk-qlt-economicgroupr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGDIA-T02.xml"
      },
      {
        "job": "PSAGCP0010",
        "nextJobs": "PSAGCP0011",
        "prevJobs": "PSAGCP0008",
        "jobExec": "psag-pe-krb-inm-economicgroupp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGDIA-T02.xml"
      },
      {
        "job": "PSAGCP0011",
        "nextJobs": "PSAGCP0012",
        "prevJobs": "PSAGCP0010",
        "jobExec": "psag-pe-spk-qlt-economicgroupm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGDIA-T02.xml"
      },
      {
        "job": "PSAGCP0012",
        "nextJobs": "#N/A",
        "prevJobs": "PSAGCP0011",
        "jobExec": "psag-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGDIA-T02.xml"
      },
      {
        "job": "PSAGCP4001",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "psag-pe-spk-inm-mdlsegmencommercialpea-01",
        "isBase": true,
        "path": "./xmls/Local/PSAG/CR-PESAGMEN-T02.xml"
      },
      {
        "job": "PSAGCP4H01",
        "nextJobs": "PSAGCP4I01",
        "prevJobs": "#N/A",
        "jobExec": "psag-pe-spk-qlt-customersegbysectors-01",
        "isBase": true,
        "path": "./xmls/Local/PSAG/CR-PESAGMEN-T02.xml"
      },
      {
        "job": "PSAGCP4I01",
        "nextJobs": "PSAGCP4H02, PSAGCP4I02",
        "prevJobs": "PSAGCP4H01",
        "jobExec": "psag-pe-krb-inr-customersegbysectorp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGMEN-T02.xml"
      },
      {
        "job": "PSAGCP4H02",
        "nextJobs": "#N/A",
        "prevJobs": "PSAGCP4I01",
        "jobExec": "psag-pe-spk-qlt-customersegbysectorr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGMEN-T02.xml"
      },
      {
        "job": "PSAGCP4I02",
        "nextJobs": "PSAGCP4H03",
        "prevJobs": "PSAGCP4I01",
        "jobExec": "psag-pe-krb-inm-customersegbysectorp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGMEN-T02.xml"
      },
      {
        "job": "PSAGCP4H03",
        "nextJobs": "PSAGCP4008",
        "prevJobs": "PSAGCP4I02",
        "jobExec": "psag-pe-spk-qlt-customersegbysectorm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGMEN-T02.xml"
      },
      {
        "job": "PSAGCP4002",
        "nextJobs": "PSAGCP4003",
        "prevJobs": "#N/A",
        "jobExec": "psag-pe-spk-qlt-mthlyinfocustsegtcoms-01",
        "isBase": true,
        "path": "./xmls/Local/PSAG/CR-PESAGMEN-T02.xml"
      },
      {
        "job": "PSAGCP4003",
        "nextJobs": "PSAGCP4004, PSAGCP4005",
        "prevJobs": "PSAGCP4002",
        "jobExec": "psag-pe-krb-inr-mthlyinfocustsegtcomp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGMEN-T02.xml"
      },
      {
        "job": "PSAGCP4004",
        "nextJobs": "#N/A",
        "prevJobs": "PSAGCP4003",
        "jobExec": "psag-pe-spk-qlt-mthlyinfocustsegtcomr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGMEN-T02.xml"
      },
      {
        "job": "PSAGCP4005",
        "nextJobs": "PSAGCP4006",
        "prevJobs": "PSAGCP4003",
        "jobExec": "psag-pe-krb-inm-mthlyinfocustsegtcomp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGMEN-T02.xml"
      },
      {
        "job": "PSAGCP4006",
        "nextJobs": "PSAGCP4007",
        "prevJobs": "PSAGCP4005",
        "jobExec": "psag-pe-spk-qlt-mthlyinfocustsegtcomm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGMEN-T02.xml"
      },
      {
        "job": "PSAGCP4007",
        "nextJobs": "#N/A",
        "prevJobs": "PSAGCP4006",
        "jobExec": "psag-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGMEN-T02.xml"
      },
      {
        "job": "PSAGCP4008",
        "nextJobs": "#N/A",
        "prevJobs": "PSAGCP4H03",
        "jobExec": "psag-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAG/CR-PESAGMEN-T02.xml"
      },
      {
        "job": "PFANCP0001",
        "nextJobs": "PFANCP0002",
        "prevJobs": "#N/A",
        "jobExec": "pfan-pe-spk-qlt-internaldepositratess-01",
        "isBase": true,
        "path": "./xmls/Local/PFAN/CR-PEFANDIA-T02.xml"
      },
      {
        "job": "PFANCP0002",
        "nextJobs": "PFANCP0003, PFANCP0004",
        "prevJobs": "PFANCP0001",
        "jobExec": "pfan-pe-krb-inr-internaldepositratesp-01",
        "isBase": false,
        "path": "./xmls/Local/PFAN/CR-PEFANDIA-T02.xml"
      },
      {
        "job": "PFANCP0003",
        "nextJobs": "#N/A",
        "prevJobs": "PFANCP0002",
        "jobExec": "pfan-pe-spk-qlt-internaldepositratesr-01",
        "isBase": false,
        "path": "./xmls/Local/PFAN/CR-PEFANDIA-T02.xml"
      },
      {
        "job": "PFANCP0004",
        "nextJobs": "PFANCP0005",
        "prevJobs": "PFANCP0002",
        "jobExec": "pfan-pe-krb-inm-internaldepositratesp-01",
        "isBase": false,
        "path": "./xmls/Local/PFAN/CR-PEFANDIA-T02.xml"
      },
      {
        "job": "PFANCP0005",
        "nextJobs": "PFANCP0006",
        "prevJobs": "PFANCP0004",
        "jobExec": "pfan-pe-spk-qlt-internaldepositratesm-01",
        "isBase": false,
        "path": "./xmls/Local/PFAN/CR-PEFANDIA-T02.xml"
      },
      {
        "job": "PFANCP0006",
        "nextJobs": "#N/A",
        "prevJobs": "PFANCP0005",
        "jobExec": "pfan-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PFAN/CR-PEFANDIA-T02.xml"
      },
      {
        "job": "PREICP4001",
        "nextJobs": "PCRTCP4001, PCRTCP4002, PCRTCP4003, PCRTCP4004, PCRTCP4005, PCRTCP4006, PCRTCP4007, PCRTCP4008, PCRTCP4009, PCRTCP4012, PCRTCP4013",
        "prevJobs": "#N/A",
        "jobExec": "prei-pe-spk-inm-rccglobalmatrix-01",
        "isBase": true,
        "path": "./xmls/Local/PREI/CR-PEREIMEN-T02.xml"
      },
      {
        "job": "PMFICP0H01",
        "nextJobs": "PMFICP0I01",
        "prevJobs": "#N/A",
        "jobExec": "pmfi-pe-spk-qlt-glaccountplans-01",
        "isBase": true,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0I01",
        "nextJobs": "PMFICP0I02, PMFICP0H02",
        "prevJobs": "PMFICP0H01",
        "jobExec": "pmfi-pe-krb-inr-glaccountplanp-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0I02",
        "nextJobs": "PMFICP0H03",
        "prevJobs": "PMFICP0I01",
        "jobExec": "pmfi-pe-krb-inm-glaccountplanp-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0H03",
        "nextJobs": "#N/A",
        "prevJobs": "PMFICP0I02",
        "jobExec": "pmfi-pe-spk-qlt-glaccountplanm-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0H02",
        "nextJobs": "#N/A",
        "prevJobs": "PMFICP0I01",
        "jobExec": "pmfi-pe-spk-qlt-glaccountplanr-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFITP0I01",
        "nextJobs": "PMFICP0H04",
        "prevJobs": "#N/A",
        "jobExec": "RX_PFMICD0001.sh",
        "isBase": true,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0H04",
        "nextJobs": "PMFICP0I03",
        "prevJobs": "PMFITP0I01",
        "jobExec": "pmfi-pe-spk-qlt-spctrglaccthierlevels-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0I03",
        "nextJobs": "PMFICP0H05, PMFICP0I04",
        "prevJobs": "PMFICP0H04",
        "jobExec": "pmfi-pe-krb-inr-spctrglaccthierlevelp-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0H05",
        "nextJobs": "#N/A",
        "prevJobs": "PMFICP0I03",
        "jobExec": "pmfi-pe-spk-qlt-spctrglaccthierlevelr-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0I04",
        "nextJobs": "PMFICP0H06",
        "prevJobs": "PMFICP0I03",
        "jobExec": "pmfi-pe-krb-inm-spctrglaccthierlevelp-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0H06",
        "nextJobs": "#N/A",
        "prevJobs": "PMFICP0I04",
        "jobExec": "pmfi-pe-spk-qlt-spctrglaccthierlevelm-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFITP0I02",
        "nextJobs": "PMFICP0H07",
        "prevJobs": "#N/A",
        "jobExec": "RX_PFMICD0002.sh",
        "isBase": true,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0H07",
        "nextJobs": "PMFICP0I05",
        "prevJobs": "PMFITP0I02",
        "jobExec": "pmfi-pe-spk-qlt-spectrumacctkeys-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0I05",
        "nextJobs": "PMFICP0H08, PMFICP0I06",
        "prevJobs": "PMFICP0H07",
        "jobExec": "pmfi-pe-krb-inr-spectrumacctkeyp-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0H08",
        "nextJobs": "#N/A",
        "prevJobs": "PMFICP0I05",
        "jobExec": "pmfi-pe-spk-qlt-spectrumacctkeyr-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0I06",
        "nextJobs": "PMFICP0H09",
        "prevJobs": "PMFICP0I05",
        "jobExec": "pmfi-pe-krb-inm-spectrumacctkeyp-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0H09",
        "nextJobs": "#N/A",
        "prevJobs": "PMFICP0I06",
        "jobExec": "pmfi-pe-spk-qlt-spectrumacctkeym-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFITP0I03",
        "nextJobs": "PMFICP0H10",
        "prevJobs": "#N/A",
        "jobExec": "RX_PFMICD0003.sh",
        "isBase": true,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0H10",
        "nextJobs": "PMFICP0I07",
        "prevJobs": "PMFITP0I03",
        "jobExec": "pmfi-pe-spk-qlt-spectrumacctentriess-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0I07",
        "nextJobs": "PMFICP0H11, PMFICP0I08",
        "prevJobs": "PMFICP0H10",
        "jobExec": "pmfi-pe-krb-inr-spectrumacctentriesp-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0H11",
        "nextJobs": "#N/A",
        "prevJobs": "PMFICP0I07",
        "jobExec": "pmfi-pe-spk-qlt-spectrumacctentriesr-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0I08",
        "nextJobs": "PMFICP0H12",
        "prevJobs": "PMFICP0I07",
        "jobExec": "pmfi-pe-krb-inm-spectrumacctentriesp-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0H12",
        "nextJobs": "#N/A",
        "prevJobs": "PMFICP0I08",
        "jobExec": "pmfi-pe-spk-qlt-spectrumacctentriesm-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFITP0I04",
        "nextJobs": "PMFICP0H13",
        "prevJobs": "#N/A",
        "jobExec": "RX_PFMICD0004.sh",
        "isBase": true,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0H13",
        "nextJobs": "PMFICP0I09",
        "prevJobs": "PMFITP0I04",
        "jobExec": "pmfi-pe-spk-qlt-spectrumacctentrydetls-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0I09",
        "nextJobs": "PMFICP0H14, PMFICP0I10",
        "prevJobs": "PMFICP0H13",
        "jobExec": "pmfi-pe-krb-inr-spectrumacctentrydetlp-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0H14",
        "nextJobs": "#N/A",
        "prevJobs": "PMFICP0I09",
        "jobExec": "pmfi-pe-spk-qlt-spectrumacctentrydetlr-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0I10",
        "nextJobs": "PMFICP0H15",
        "prevJobs": "PMFICP0I09",
        "jobExec": "pmfi-pe-krb-inm-spectrumacctentrydetlp-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0H15",
        "nextJobs": "#N/A",
        "prevJobs": "PMFICP0I10",
        "jobExec": "pmfi-pe-spk-qlt-spectrumacctentrydetlm-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0001",
        "nextJobs": "PMFICP0002",
        "prevJobs": "#N/A",
        "jobExec": "pmfi-pe-spk-qlt-epigraphproducts-01",
        "isBase": true,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0002",
        "nextJobs": "PMFICP0003, PMFICP0004",
        "prevJobs": "PMFICP0001",
        "jobExec": "pmfi-pe-krb-inr-epigraphproductp-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0003",
        "nextJobs": "#N/A",
        "prevJobs": "PMFICP0002",
        "jobExec": "pmfi-pe-spk-qlt-epigraphproductr-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0004",
        "nextJobs": "PMFICP0005",
        "prevJobs": "PMFICP0002",
        "jobExec": "pmfi-pe-krb-inm-epigraphproductp-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0005",
        "nextJobs": "PMFICP0006",
        "prevJobs": "PMFICP0004",
        "jobExec": "pmfi-pe-spk-qlt-epigraphproductm-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0006",
        "nextJobs": "#N/A",
        "prevJobs": "PMFICP0005",
        "jobExec": "pmfi-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0007",
        "nextJobs": "PMFICP0008",
        "prevJobs": "#N/A",
        "jobExec": "pmfi-pe-spk-qlt-managementepigraphs-01",
        "isBase": true,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0008",
        "nextJobs": "PMFICP0009, PMFICP0010",
        "prevJobs": "PMFICP0007",
        "jobExec": "pmfi-pe-krb-inr-managementepigraphp-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0009",
        "nextJobs": "#N/A",
        "prevJobs": "PMFICP0008",
        "jobExec": "pmfi-pe-spk-qlt-managementepigraphr-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0010",
        "nextJobs": "PMFICP0011",
        "prevJobs": "PMFICP0008",
        "jobExec": "pmfi-pe-krb-inm-managementepigraphp-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0011",
        "nextJobs": "PMFICP0012",
        "prevJobs": "PMFICP0010",
        "jobExec": "pmfi-pe-spk-qlt-managementepigraphm-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PMFICP0012",
        "nextJobs": "#N/A",
        "prevJobs": "PMFICP0011",
        "jobExec": "pmfi-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMFI/CR-PEMFIDIA-T02.xml"
      },
      {
        "job": "PBTQTP4001",
        "nextJobs": "PBTQCP4I01",
        "prevJobs": "#N/A",
        "jobExec": "RX_PBTQCD0001.sh",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP4I01",
        "nextJobs": "PBTQCP4I02",
        "prevJobs": "PBTQTP4001",
        "jobExec": "pbtq-pe-krb-inr-pymeoverindbtnsbasep-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP4I02",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP4I01",
        "jobExec": "pbtq-pe-krb-inm-pymeoverindbtnsbasep-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP4001",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "pbtq-pe-spk-inm-blacklist-01",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQTP4002",
        "nextJobs": "PBTQCP4H01",
        "prevJobs": "#N/A",
        "jobExec": "RX_PEXTCD0003.sh",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP4H01",
        "nextJobs": "PBTQCP4I03, PBTQCP4I05",
        "prevJobs": "PBTQTP4002",
        "jobExec": "pbtq-pe-spk-qlt-ccrcorrectionss-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP4I03",
        "nextJobs": "PBTQCP4I04",
        "prevJobs": "PBTQCP4H01",
        "jobExec": "pbtq-pe-spk-inr-rectificationsrcc-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP4I04",
        "nextJobs": "PBTQCP4H02",
        "prevJobs": "PBTQCP4I03",
        "jobExec": "pbtq-pe-krb-inm-ccrcorrectionsp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP4H02",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP4I04",
        "jobExec": "pbtq-pe-spk-qlt-ccrcorrectionsm-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP4I05",
        "nextJobs": "PBTQCP4I06",
        "prevJobs": "PBTQCP4H01",
        "jobExec": "pbtq-pe-spk-inr-rectificationsrcc-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP4I06",
        "nextJobs": "PBTQCP4H03",
        "prevJobs": "PBTQCP4I05",
        "jobExec": "pbtq-pe-krb-inm-ccrcorrectionsdetailp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP4H03",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP4I06",
        "jobExec": "pbtq-pe-spk-qlt-ccrcorrectionsdetailm-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP4H04",
        "nextJobs": "PBTQCP4I07",
        "prevJobs": "#N/A",
        "jobExec": "pbtq-pe-spk-qlt-qlfnbureaupymeinfos-01",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP4I07",
        "nextJobs": "PBTQCP4I08, PBTQCP4H05",
        "prevJobs": "PBTQCP4H04",
        "jobExec": "pbtq-pe-krb-inr-qlfnbureaupymeinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP4I08",
        "nextJobs": "PBTQCP4H06",
        "prevJobs": "PBTQCP4I07",
        "jobExec": "pbtq-pe-krb-inm-qlfnbureaupymeinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP4H06",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP4I08",
        "jobExec": "pbtq-pe-spk-qlt-qlfnbureaupymeinfom-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP4H05",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP4I07",
        "jobExec": "pbtq-pe-spk-qlt-qlfnbureaupymeinfor-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP4002",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "pbtq-pe-spk-inm-customerdigitalmark-01",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP4I09",
        "nextJobs": "PBTQPP4001",
        "prevJobs": "#N/A",
        "jobExec": "pbtq-pe-krb-out-customerevalinfovarp-01",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQPP4001",
        "nextJobs": "PBTQTP4003",
        "prevJobs": "PBTQCP4I09",
        "jobExec": "pbtq-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQTP4003",
        "nextJobs": "PBTQPP4002",
        "prevJobs": "PBTQPP4001",
        "jobExec": "TX_PBTQCD0001.sh",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQPP4002",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQTP4003",
        "jobExec": "pbtq-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP4I10",
        "nextJobs": "PBTQPP4003",
        "prevJobs": "#N/A",
        "jobExec": "pbtq-pe-krb-out-evalvarproactivemodelp-01",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQPP4003",
        "nextJobs": "PBTQTP4004",
        "prevJobs": "PBTQCP4I10",
        "jobExec": "pbtq-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQTP4004",
        "nextJobs": "PBTQPP4004",
        "prevJobs": "PBTQPP4003",
        "jobExec": "TX_PBTQCD0002.sh",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQPP4004",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQTP4004",
        "jobExec": "pbtq-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQMEN-T02.xml"
      },
      {
        "job": "PBTQCP0A01",
        "nextJobs": "PBTQCP0P01",
        "prevJobs": "#N/A",
        "jobExec": "pbtq-pe-krb-inr-peoplelogchangesp-01",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0P01",
        "nextJobs": "PBTQCP0B01, PCTDCP0P02",
        "prevJobs": "PBTQCP0A01",
        "jobExec": "pbtq-pe-krb-inm-peoplelogchangesp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0B01",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0P01",
        "jobExec": "pbtq-pbtq-borrado-staging",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0I06",
        "nextJobs": "PBTQCP0I07",
        "prevJobs": "#N/A",
        "jobExec": "pbtq-pe-spk-qlt-mstrbalanceffssdetails-01",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0I01",
        "nextJobs": "PBTQCP0I02",
        "prevJobs": "#N/A",
        "jobExec": "pbtq-pe-spk-qlt-masterbalanceffsss-01",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0I02",
        "nextJobs": "PBTQCP0I03, PBTQCP0I04",
        "prevJobs": "PBTQCP0I01",
        "jobExec": "pbtq-pe-krb-inr-masterbalanceffssp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0I07",
        "nextJobs": "PBTQCP0I08, PBTQCP0I09",
        "prevJobs": "PBTQCP0I06",
        "jobExec": "pbtq-pe-krb-inr-mstrbalanceffssdetailp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0I09",
        "nextJobs": "PBTQCP0I10",
        "prevJobs": "PBTQCP0I07",
        "jobExec": "pbtq-pe-krb-inm-mstrbalanceffssdetailp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0I08",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0I07",
        "jobExec": "pbtq-pe-spk-qlt-mstrbalanceffssdetailr-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0I10",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0I09",
        "jobExec": "pbtq-pe-spk-qlt-mstrbalanceffssdetailm-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0I04",
        "nextJobs": "PBTQCP0I05",
        "prevJobs": "PBTQCP0I02",
        "jobExec": "pbtq-pe-krb-inm-masterbalanceffssp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0I05",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0I04",
        "jobExec": "pbtq-pe-spk-qlt-masterbalanceffssm-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0I03",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0I02",
        "jobExec": "pbtq-pe-spk-qlt-masterbalanceffssr-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0C01",
        "nextJobs": "PBTQCP0T01",
        "prevJobs": "#N/A",
        "jobExec": "pbtq-pe-krb-out-customerreservedinfop-01",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0T01",
        "nextJobs": "PBTQCP0001",
        "prevJobs": "PBTQCP0C01",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0001",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0T01",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQTP0001",
        "nextJobs": "PBTQCP0H06",
        "prevJobs": "#N/A",
        "jobExec": "RX_PBTQCD0002.sh",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0H06",
        "nextJobs": "PBTQCP0I17",
        "prevJobs": "PBTQTP0001",
        "jobExec": "pbtq-pe-spk-qlt-spectrumgmoperctptys-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0I17",
        "nextJobs": "PBTQCP0I18, PBTQCP0H07",
        "prevJobs": "PBTQCP0H06",
        "jobExec": "pbtq-pe-krb-inr-spectrumgmoperctptyp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0I18",
        "nextJobs": "PBTQCP0H08",
        "prevJobs": "PBTQCP0I17",
        "jobExec": "pbtq-pe-krb-inm-spectrumgmoperctptyp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0H07",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0I17",
        "jobExec": "pbtq-pe-spk-qlt-spectrumgmoperctptyr-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0H08",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0I18",
        "jobExec": "pbtq-pe-spk-qlt-spectrumgmoperctptym-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0H09",
        "nextJobs": "PBTQCP0A02",
        "prevJobs": "#N/A",
        "jobExec": "pbtq-pe-spk-qlt-refoundedcustomerss-01",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0A02",
        "nextJobs": "PBTQCP0H10",
        "prevJobs": "PBTQCP0H09",
        "jobExec": "pbtq-pe-krb-inr-refoundedcustomersp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0H10",
        "nextJobs": "PBTQCP0P02",
        "prevJobs": "PBTQCP0A02",
        "jobExec": "pbtq-pe-spk-qlt-refoundedcustomersr-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0P02",
        "nextJobs": "PBTQCP0H11, PKBTQCP0026",
        "prevJobs": "PBTQCP0H10",
        "jobExec": "pbtq-pe-krb-inm-refoundedcustomersp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0H11",
        "nextJobs": "PBTQCP0B02",
        "prevJobs": "PBTQCP0P02",
        "jobExec": "pbtq-pe-spk-qlt-refoundedcustomersm-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0B02",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0H11",
        "jobExec": "pbtq-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0H12",
        "nextJobs": "PBTQCP0I19",
        "prevJobs": "#N/A",
        "jobExec": "pbtq-pe-spk-qlt-basicpeopledatas-01",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0I19",
        "nextJobs": "PBTQCP0H13, PBTQCP0014",
        "prevJobs": "PBTQCP0H12",
        "jobExec": "pbtq-pe-krb-inr-basicpeopledatap-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0H13",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0I19",
        "jobExec": "pbtq-pe-spk-qlt-basicpeopledatar-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0H14",
        "nextJobs": "PBTQCP0I20",
        "prevJobs": "#N/A",
        "jobExec": "pbtq-pe-spk-qlt-customercontrelss-01",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0I20",
        "nextJobs": "PBTQCP0H15, PBTQCP0I21",
        "prevJobs": "PBTQCP0H14",
        "jobExec": "pbtq-pe-krb-inr-customercontrelsp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0H15",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0I20",
        "jobExec": "pbtq-pe-spk-qlt-customercontrelsr-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0I21",
        "nextJobs": "PBTQCP0H16, PKMOLCP0P01, PKPFMCP0P07, PCDOCP4040",
        "prevJobs": "PBTQCP0I20",
        "jobExec": "pbtq-pe-krb-inm-customercontrelsp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0H16",
        "nextJobs": "PBTQCP0017",
        "prevJobs": "PBTQCP0I21",
        "jobExec": "pbtq-pe-spk-qlt-customercontrelsm-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0H17",
        "nextJobs": "PBTQCP0I22",
        "prevJobs": "#N/A",
        "jobExec": "pbtq-pe-spk-qlt-custreservedinformations-01",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0I22",
        "nextJobs": "PBTQCP0H18, PBTQCP0I23",
        "prevJobs": "PBTQCP0H17",
        "jobExec": "pbtq-pe-krb-inr-custreservedinformationp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0H18",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0I22",
        "jobExec": "pbtq-pe-spk-qlt-custreservedinformationr-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0I23",
        "nextJobs": "PBTQCP0H19",
        "prevJobs": "PBTQCP0I22",
        "jobExec": "pbtq-pe-krb-inm-custreservedinformationp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0H19",
        "nextJobs": "PBTQCP0018",
        "prevJobs": "PBTQCP0I23",
        "jobExec": "pbtq-pe-spk-qlt-custreservedinformationm-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0002",
        "nextJobs": "PBTQCP0003",
        "prevJobs": "#N/A",
        "jobExec": "pbtq-pe-spk-qlt-additionalcustomerinfos-01",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0003",
        "nextJobs": "PBTQCP0004, PBTQCP0014",
        "prevJobs": "PBTQCP0002",
        "jobExec": "pbtq-pe-krb-inr-additionalcustomerinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0004",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0003",
        "jobExec": "pbtq-pe-spk-qlt-additionalcustomerinfor-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0005",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0015",
        "jobExec": "pbtq-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0006",
        "nextJobs": "PBTQCP0007",
        "prevJobs": "#N/A",
        "jobExec": "pbtq-pe-spk-qlt-customereconomicinfos-01",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0007",
        "nextJobs": "PBTQCP0008, PBTQCP0014",
        "prevJobs": "PBTQCP0006",
        "jobExec": "pbtq-pe-krb-inr-customereconomicinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0008",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0007",
        "jobExec": "pbtq-pe-spk-qlt-customereconomicinfor-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0009",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0015",
        "jobExec": "pbtq-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0010",
        "nextJobs": "PBTQCP0011",
        "prevJobs": "#N/A",
        "jobExec": "pbtq-pe-spk-qlt-custsocioeconomicprofls-01",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0011",
        "nextJobs": "PBTQCP0012, PBTQCP0014",
        "prevJobs": "PBTQCP0010",
        "jobExec": "pbtq-pe-krb-inr-custsocioeconomicproflp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0012",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0011",
        "jobExec": "pbtq-pe-spk-qlt-custsocioeconomicproflr-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0013",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0015",
        "jobExec": "pbtq-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0014",
        "nextJobs": "PBTQCP0015, PKBTQCP0022, PKBTQCP0026, PCDOCP0043",
        "prevJobs": "PBTQCP0I19, PBTQCP0003, PBTQCP0007, PBTQCP0011",
        "jobExec": "pbtq-pe-krb-inm-peopledailyinformationp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0015",
        "nextJobs": "PBTQCP0016, PBTQCP0005, PBTQCP0013, PBTQCP0009",
        "prevJobs": "PBTQCP0014",
        "jobExec": "pbtq-pe-spk-qlt-peopledailyinformationm-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0016",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0015",
        "jobExec": "pbtq-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0017",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0H16",
        "jobExec": "pbtq-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0018",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0H19",
        "jobExec": "pbtq-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0019",
        "nextJobs": "PBTQCP0020",
        "prevJobs": "#N/A",
        "jobExec": "pbtq-pe-spk-qlt-legalapplcustomerinfos-01",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0020",
        "nextJobs": "PBTQCP0021, PBTQCP0022",
        "prevJobs": "PBTQCP0019",
        "jobExec": "pbtq-pe-krb-inr-legalapplcustomerinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0021",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0020",
        "jobExec": "pbtq-pe-spk-qlt-legalapplcustomerinfor-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0022",
        "nextJobs": "PBTQCP0023",
        "prevJobs": "PBTQCP0020",
        "jobExec": "pbtq-pe-krb-inm-legalapplcustomerinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0023",
        "nextJobs": "PBTQCP0024",
        "prevJobs": "PBTQCP0022",
        "jobExec": "pbtq-pe-spk-qlt-legalapplcustomerinfom-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0024",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0023",
        "jobExec": "pbtq-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQPP0001",
        "nextJobs": "PBTQCP0025",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0025",
        "nextJobs": "PBTQCP0026",
        "prevJobs": "PBTQPP0001",
        "jobExec": "pbtq-pe-spk-qlt-addresslocals-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0026",
        "nextJobs": "PBTQCP0027, PBTQCP0028",
        "prevJobs": "PBTQCP0025",
        "jobExec": "pbtq-pe-krb-inr-addresslocalp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0027",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0026",
        "jobExec": "pbtq-pe-spk-qlt-addresslocalr-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0028",
        "nextJobs": "PBTQCP0029, PBTQCP0030",
        "prevJobs": "PBTQCP0026",
        "jobExec": "pbtq-pe-krb-inm-addresslocalp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0029",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0028",
        "jobExec": "pbtq-pe-spk-qlt-addresslocalm-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0030",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0028",
        "jobExec": "pbtq-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQPP0002",
        "nextJobs": "PBTQCP0031",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0031",
        "nextJobs": "PBTQCP0032",
        "prevJobs": "PBTQPP0002",
        "jobExec": "pbtq-pe-spk-qlt-corporateaddressess-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0032",
        "nextJobs": "PBTQCP0033, PBTQCP0034",
        "prevJobs": "PBTQCP0031",
        "jobExec": "pbtq-pe-krb-inr-corporateaddressesp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0033",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0032",
        "jobExec": "pbtq-pe-spk-qlt-corporateaddressesr-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0034",
        "nextJobs": "PBTQCP0035, PBTQCP0036",
        "prevJobs": "PBTQCP0032",
        "jobExec": "pbtq-pe-krb-inm-corporateaddressesp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0035",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0034",
        "jobExec": "pbtq-pe-spk-qlt-corporateaddressesm-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0036",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0034",
        "jobExec": "pbtq-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQPP0003",
        "nextJobs": "PBTQCP0037",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0037",
        "nextJobs": "PBTQCP0038",
        "prevJobs": "PBTQPP0003",
        "jobExec": "pbtq-pe-spk-qlt-companyriskclsfns-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0038",
        "nextJobs": "PBTQCP0039, PBTQCP0040",
        "prevJobs": "PBTQCP0037",
        "jobExec": "pbtq-pe-krb-inr-companyriskclsfnp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0039",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0038",
        "jobExec": "pbtq-pe-spk-qlt-companyriskclsfnr-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0040",
        "nextJobs": "PBTQCP0041, PBTQCP0042",
        "prevJobs": "PBTQCP0038",
        "jobExec": "pbtq-pe-krb-inm-companyriskclsfnp-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0041",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0040",
        "jobExec": "pbtq-pe-spk-qlt-companyriskclsfnm-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PBTQCP0042",
        "nextJobs": "#N/A",
        "prevJobs": "PBTQCP0040",
        "jobExec": "pbtq-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PBTQ/CR-PEBTQDIA-T02.xml"
      },
      {
        "job": "PPOMTP0I01",
        "nextJobs": "PPOMCP0H01",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPOMCD0001.sh",
        "isBase": true,
        "path": "./xmls/Local/PPOM/CR-PEPOMDIA-T02.xml"
      },
      {
        "job": "PPOMCP0H01",
        "nextJobs": "PPOMCP0I01",
        "prevJobs": "PPOMTP0I01",
        "jobExec": "ppom-pe-spk-qlt-fixincmaccumposninfos-01",
        "isBase": false,
        "path": "./xmls/Local/PPOM/CR-PEPOMDIA-T02.xml"
      },
      {
        "job": "PPOMCP0I01",
        "nextJobs": "PPOMCP0H02, PPOMCP0I02",
        "prevJobs": "PPOMCP0H01",
        "jobExec": "ppom-pe-krb-inr-fixincmaccumposninfop-01",
        "isBase": false,
        "path": "./xmls/Local/PPOM/CR-PEPOMDIA-T02.xml"
      },
      {
        "job": "PPOMCP0H02",
        "nextJobs": "#N/A",
        "prevJobs": "PPOMCP0I01",
        "jobExec": "ppom-pe-spk-qlt-fixincmaccumposninfor-01",
        "isBase": false,
        "path": "./xmls/Local/PPOM/CR-PEPOMDIA-T02.xml"
      },
      {
        "job": "PPOMCP0I02",
        "nextJobs": "PPOMCP0H03",
        "prevJobs": "PPOMCP0I01",
        "jobExec": "ppom-pe-krb-inm-fixincmaccumposninfop-01",
        "isBase": false,
        "path": "./xmls/Local/PPOM/CR-PEPOMDIA-T02.xml"
      },
      {
        "job": "PPOMCP0H03",
        "nextJobs": "#N/A",
        "prevJobs": "PPOMCP0I02",
        "jobExec": "ppom-pe-spk-qlt-fixincmaccumposninfom-01",
        "isBase": false,
        "path": "./xmls/Local/PPOM/CR-PEPOMDIA-T02.xml"
      },
      {
        "job": "PCRRPP0001",
        "nextJobs": "PCRRCP0001",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0001",
        "nextJobs": "PCRRTP0001",
        "prevJobs": "PCRRPP0001",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0001",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0001",
        "jobExec": "TX_PCRRCD0001.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0003",
        "nextJobs": "PCRRCP0002",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0002",
        "nextJobs": "PCRRTP0002",
        "prevJobs": "PCRRPP0003",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0002",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0002",
        "jobExec": "TX_PCRRCD0002.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0005",
        "nextJobs": "PCRRCP0003",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0003",
        "nextJobs": "PCRRTP0003",
        "prevJobs": "PCRRPP0005",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0003",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0003",
        "jobExec": "TX_PCRRCD0003.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0007",
        "nextJobs": "PCRRCP0004",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0004",
        "nextJobs": "PCRRTP0004",
        "prevJobs": "PCRRPP0007",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0004",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0004",
        "jobExec": "TX_PCRRCD0004.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0009",
        "nextJobs": "PCRRCP0005",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0005",
        "nextJobs": "PCRRTP0005",
        "prevJobs": "PCRRPP0009",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0005",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0005",
        "jobExec": "TX_PCRRCD0005.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0011",
        "nextJobs": "PCRRCP0006",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0006",
        "nextJobs": "PCRRTP0006",
        "prevJobs": "PCRRPP0011",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0006",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0006",
        "jobExec": "TX_PCRRCD0006.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0013",
        "nextJobs": "PCRRCP0007",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0007",
        "nextJobs": "PCRRTP0007",
        "prevJobs": "PCRRPP0013",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0007",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0007",
        "jobExec": "TX_PCRRCD0007.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0015",
        "nextJobs": "PCRRCP0008",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0008",
        "nextJobs": "PCRRTP0008",
        "prevJobs": "PCRRPP0015",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0008",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0008",
        "jobExec": "TX_PCRRCD0008.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0017",
        "nextJobs": "PCRRCP0009",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0009",
        "nextJobs": "PCRRTP0009",
        "prevJobs": "PCRRPP0017",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0009",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0009",
        "jobExec": "TX_PCRRCD0009.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0019",
        "nextJobs": "PCRRCP0010",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0010",
        "nextJobs": "PCRRTP0010",
        "prevJobs": "PCRRPP0019",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0010",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0010",
        "jobExec": "TX_PCRRCD0010.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0021",
        "nextJobs": "PCRRCP0011",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0011",
        "nextJobs": "PCRRTP0011",
        "prevJobs": "PCRRPP0021",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0011",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0011",
        "jobExec": "TX_PCRRCD0011.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0023",
        "nextJobs": "PCRRCP0012",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0012",
        "nextJobs": "PCRRTP0012",
        "prevJobs": "PCRRPP0023",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0012",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0012",
        "jobExec": "TX_PCRRCD0012.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0025",
        "nextJobs": "PCRRCP0013",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0013",
        "nextJobs": "PCRRTP0013",
        "prevJobs": "PCRRPP0025",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0013",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0013",
        "jobExec": "TX_PCRRCD0013.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0027",
        "nextJobs": "PCRRCP0014",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0014",
        "nextJobs": "PCRRTP0014",
        "prevJobs": "PCRRPP0027",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0014",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0014",
        "jobExec": "TX_PCRRCD0014.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0029",
        "nextJobs": "PCRRCP0015",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0015",
        "nextJobs": "PCRRTP0015",
        "prevJobs": "PCRRPP0029",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0015",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0015",
        "jobExec": "TX_PCRRCD0015.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0031",
        "nextJobs": "PCRRCP0016",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0016",
        "nextJobs": "PCRRTP0016",
        "prevJobs": "PCRRPP0031",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0016",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0016",
        "jobExec": "TX_PCRRCD0016.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0033",
        "nextJobs": "PCRRCP0017",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0017",
        "nextJobs": "PCRRTP0017",
        "prevJobs": "PCRRPP0033",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0017",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0017",
        "jobExec": "TX_PCRRCD0017.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0035",
        "nextJobs": "PCRRCP0018",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0018",
        "nextJobs": "PCRRTP0018",
        "prevJobs": "PCRRPP0035",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0018",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0018",
        "jobExec": "TX_PCRRCD0018.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0037",
        "nextJobs": "PCRRCP0019",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0019",
        "nextJobs": "PCRRTP0019",
        "prevJobs": "PCRRPP0037",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0019",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0019",
        "jobExec": "TX_PCRRCD0019.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0039",
        "nextJobs": "PCRRCP0020",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0020",
        "nextJobs": "PCRRTP0020",
        "prevJobs": "PCRRPP0039",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0020",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0020",
        "jobExec": "TX_PCRRCD0020.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0041",
        "nextJobs": "PCRRCP0021",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0021",
        "nextJobs": "PCRRTP0021",
        "prevJobs": "PCRRPP0041",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0021",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0021",
        "jobExec": "TX_PCRRCD0021.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0043",
        "nextJobs": "PCRRCP0022",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0022",
        "nextJobs": "PCRRTP0022",
        "prevJobs": "PCRRPP0043",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0022",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0022",
        "jobExec": "TX_PCRRCD0022.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0045",
        "nextJobs": "PCRRCP0023",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0023",
        "nextJobs": "PCRRTP0023",
        "prevJobs": "PCRRPP0045",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0023",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0023",
        "jobExec": "TX_PCRRCD0023.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0047",
        "nextJobs": "PCRRCP0024",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0024",
        "nextJobs": "PCRRTP0024",
        "prevJobs": "PCRRPP0047",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0024",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0024",
        "jobExec": "TX_PCRRCD0024.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0049",
        "nextJobs": "PCRRCP0025",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0025",
        "nextJobs": "PCRRTP0025",
        "prevJobs": "PCRRPP0049",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0025",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0025",
        "jobExec": "TX_PCRRCD0025.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0051",
        "nextJobs": "PCRRCP0026",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0026",
        "nextJobs": "PCRRTP0026",
        "prevJobs": "PCRRPP0051",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0026",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0026",
        "jobExec": "TX_PCRRCD0026.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0053",
        "nextJobs": "PCRRCP0027",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0027",
        "nextJobs": "PCRRTP0027",
        "prevJobs": "PCRRPP0053",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0027",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0027",
        "jobExec": "TX_PCRRCD0027.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0055",
        "nextJobs": "PCRRCP0028",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0028",
        "nextJobs": "PCRRTP0028",
        "prevJobs": "PCRRPP0055",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0028",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0028",
        "jobExec": "TX_PCRRCD0028.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0057",
        "nextJobs": "PCRRCP0029",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0029",
        "nextJobs": "PCRRTP0029",
        "prevJobs": "PCRRPP0057",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0029",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0029",
        "jobExec": "TX_PCRRCD0029.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0059",
        "nextJobs": "PCRRCP0030",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0030",
        "nextJobs": "PCRRTP0030",
        "prevJobs": "PCRRPP0059",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0030",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0030",
        "jobExec": "TX_PCRRCD0030.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0061",
        "nextJobs": "PCRRCP0031",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0031",
        "nextJobs": "PCRRTP0031",
        "prevJobs": "PCRRPP0061",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0031",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0031",
        "jobExec": "TX_PCRRCD0031.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0063",
        "nextJobs": "PCRRCP0032",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0032",
        "nextJobs": "PCRRTP0032",
        "prevJobs": "PCRRPP0063",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0032",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0032",
        "jobExec": "TX_PCRRCD0032.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0065",
        "nextJobs": "PCRRCP0033",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0033",
        "nextJobs": "PCRRTP0033",
        "prevJobs": "PCRRPP0065",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0033",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0033",
        "jobExec": "TX_PCRRCD0033.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0067",
        "nextJobs": "PCRRCP0034",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0034",
        "nextJobs": "PCRRTP0034",
        "prevJobs": "PCRRPP0067",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0034",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0034",
        "jobExec": "TX_PCRRCD0034.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0069",
        "nextJobs": "PCRRCP0035",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0035",
        "nextJobs": "PCRRTP0035",
        "prevJobs": "PCRRPP0069",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0035",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0035",
        "jobExec": "TX_PCRRCD0035.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0071",
        "nextJobs": "PCRRCP0036",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0036",
        "nextJobs": "PCRRTP0036",
        "prevJobs": "PCRRPP0071",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0036",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0036",
        "jobExec": "TX_PCRRCD0036.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0073",
        "nextJobs": "PCRRCP0037",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0037",
        "nextJobs": "PCRRTP0037",
        "prevJobs": "PCRRPP0073",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0037",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0037",
        "jobExec": "TX_PCRRCD0037.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0075",
        "nextJobs": "PCRRCP0038",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0038",
        "nextJobs": "PCRRTP0038",
        "prevJobs": "PCRRPP0075",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0038",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0038",
        "jobExec": "TX_PCRRCD0038.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0166",
        "nextJobs": "PCRRCP0039",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0039",
        "nextJobs": "PCRRTP0039",
        "prevJobs": "PCRRPP0166",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0039",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0039",
        "jobExec": "TX_PCRRCD4001.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0167",
        "nextJobs": "PCRRCP0040",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0040",
        "nextJobs": "PCRRTP0040",
        "prevJobs": "PCRRPP0167",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0040",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0040",
        "jobExec": "TX_PCRRCD4002.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0168",
        "nextJobs": "PCRRCP0041",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0041",
        "nextJobs": "PCRRTP0041",
        "prevJobs": "PCRRPP0168",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0041",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0041",
        "jobExec": "TX_PCRRCD4003.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0162",
        "nextJobs": "PCRRCP0042",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0042",
        "nextJobs": "PCRRTP0042",
        "prevJobs": "PCRRPP0162",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0042",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0042",
        "jobExec": "TX_PCRRCD0040.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0163",
        "nextJobs": "PCRRCP0043",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0043",
        "nextJobs": "PCRRTP0043",
        "prevJobs": "PCRRPP0163",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0043",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0043",
        "jobExec": "TX_PCRRCD0041.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0164",
        "nextJobs": "PCRRCP0044",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0044",
        "nextJobs": "PCRRTP0044",
        "prevJobs": "PCRRPP0164",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0044",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0044",
        "jobExec": "TX_PCRRCD0042.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRPP0165",
        "nextJobs": "PCRRCP0045",
        "prevJobs": "#N/A",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": true,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRCP0045",
        "nextJobs": "PCRRTP0045",
        "prevJobs": "PCRRPP0165",
        "jobExec": "pcrr-pe-spk-inm-operativizationcampaign-01",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PCRRTP0045",
        "nextJobs": "#N/A",
        "prevJobs": "PCRRCP0045",
        "jobExec": "TX_PCRRCD0043.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRR/CR-PECRRDIA-T02.xml"
      },
      {
        "job": "PGUGCP0001",
        "nextJobs": "PGUGCP0002",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-conformletterguarantees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0002",
        "nextJobs": "PGUGCP0003",
        "prevJobs": "PGUGCP0001",
        "jobExec": "pgug-pe-krb-inr-conformletterguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0003",
        "nextJobs": "PGUGCP0004",
        "prevJobs": "PGUGCP0002",
        "jobExec": "pgug-pe-spk-qlt-conformletterguaranteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0004",
        "nextJobs": "PGUGCP0005, PCDOCP0043",
        "prevJobs": "PGUGCP0003",
        "jobExec": "pgug-pe-krb-inm-conformletterguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0005",
        "nextJobs": "PGUGCP0006",
        "prevJobs": "PGUGCP0004",
        "jobExec": "pgug-pe-spk-qlt-conformletterguaranteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0006",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0005",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0007",
        "nextJobs": "PGUGCP0008",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-vehiclepledgeguarantees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0008",
        "nextJobs": "PGUGCP0009",
        "prevJobs": "PGUGCP0007",
        "jobExec": "pgug-pe-krb-inr-vehiclepledgeguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0009",
        "nextJobs": "PGUGCP0010",
        "prevJobs": "PGUGCP0008",
        "jobExec": "pgug-pe-spk-qlt-vehiclepledgeguaranteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0010",
        "nextJobs": "PGUGCP0011, PCDOCP0043",
        "prevJobs": "PGUGCP0009",
        "jobExec": "pgug-pe-krb-inm-vehiclepledgeguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0011",
        "nextJobs": "PGUGCP0012",
        "prevJobs": "PGUGCP0010",
        "jobExec": "pgug-pe-spk-qlt-vehiclepledgeguaranteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0012",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0011",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0013",
        "nextJobs": "PGUGCP0014",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-agriculturalpledgegntees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0014",
        "nextJobs": "PGUGCP0015",
        "prevJobs": "PGUGCP0013",
        "jobExec": "pgug-pe-krb-inr-agriculturalpledgegnteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0015",
        "nextJobs": "PGUGCP0016",
        "prevJobs": "PGUGCP0014",
        "jobExec": "pgug-pe-spk-qlt-agriculturalpledgegnteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0016",
        "nextJobs": "PGUGCP0017, PCDOCP0043",
        "prevJobs": "PGUGCP0015",
        "jobExec": "pgug-pe-krb-inm-agriculturalpledgegnteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0017",
        "nextJobs": "PGUGCP0018",
        "prevJobs": "PGUGCP0016",
        "jobExec": "pgug-pe-spk-qlt-agriculturalpledgegnteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0018",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0017",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0019",
        "nextJobs": "PGUGCP0020",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-warrantguarantees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0020",
        "nextJobs": "PGUGCP0021",
        "prevJobs": "PGUGCP0019",
        "jobExec": "pgug-pe-krb-inr-warrantguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0021",
        "nextJobs": "PGUGCP0022",
        "prevJobs": "PGUGCP0020",
        "jobExec": "pgug-pe-spk-qlt-warrantguaranteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0022",
        "nextJobs": "PGUGCP0023, PCDOCP0043",
        "prevJobs": "PGUGCP0021",
        "jobExec": "pgug-pe-krb-inm-warrantguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0023",
        "nextJobs": "PGUGCP0024",
        "prevJobs": "PGUGCP0022, PGUGCP0112",
        "jobExec": "pgug-pe-spk-qlt-warrantguaranteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0024",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0023",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0025",
        "nextJobs": "PGUGCP0026",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-tradepledgeguarantees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0026",
        "nextJobs": "PGUGCP0027",
        "prevJobs": "PGUGCP0025",
        "jobExec": "pgug-pe-krb-inr-tradepledgeguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0027",
        "nextJobs": "PGUGCP0028",
        "prevJobs": "PGUGCP0026",
        "jobExec": "pgug-pe-spk-qlt-tradepledgeguaranteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0028",
        "nextJobs": "PGUGCP0029, PCDOCP0043",
        "prevJobs": "PGUGCP0027",
        "jobExec": "pgug-pe-krb-inm-tradepledgeguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0029",
        "nextJobs": "PGUGCP0030",
        "prevJobs": "PGUGCP0028, PGUGCP0112",
        "jobExec": "pgug-pe-spk-qlt-tradepledgeguaranteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0030",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0029",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0031",
        "nextJobs": "PGUGCP0032",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-indspledgeguarantees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0032",
        "nextJobs": "PGUGCP0033",
        "prevJobs": "PGUGCP0031",
        "jobExec": "pgug-pe-krb-inr-indspledgeguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0033",
        "nextJobs": "PGUGCP0034",
        "prevJobs": "PGUGCP0032",
        "jobExec": "pgug-pe-spk-qlt-indspledgeguaranteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0034",
        "nextJobs": "PGUGCP0035, PCDOCP0043",
        "prevJobs": "PGUGCP0033",
        "jobExec": "pgug-pe-krb-inm-indspledgeguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0035",
        "nextJobs": "PGUGCP0036",
        "prevJobs": "PGUGCP0034, PGUGCP0112",
        "jobExec": "pgug-pe-spk-qlt-indspledgeguaranteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0036",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0035",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0037",
        "nextJobs": "PGUGCP0038",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-mortgageguarantees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0038",
        "nextJobs": "PGUGCP0039",
        "prevJobs": "PGUGCP0037",
        "jobExec": "pgug-pe-krb-inr-mortgageguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0039",
        "nextJobs": "PGUGCP0040",
        "prevJobs": "PGUGCP0038",
        "jobExec": "pgug-pe-spk-qlt-mortgageguaranteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0040",
        "nextJobs": "PGUGCP0041, PCDOCP0043",
        "prevJobs": "PGUGCP0039",
        "jobExec": "pgug-pe-krb-inm-mortgageguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0041",
        "nextJobs": "PGUGCP0042",
        "prevJobs": "PGUGCP0040",
        "jobExec": "pgug-pe-spk-qlt-mortgageguaranteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0042",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0041",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0043",
        "nextJobs": "PGUGCP0044",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-termdepositguarantees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0044",
        "nextJobs": "PGUGCP0045",
        "prevJobs": "PGUGCP0043",
        "jobExec": "pgug-pe-krb-inr-termdepositguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0045",
        "nextJobs": "PGUGCP0046",
        "prevJobs": "PGUGCP0044",
        "jobExec": "pgug-pe-spk-qlt-termdepositguaranteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0046",
        "nextJobs": "PGUGCP0047, PCDOCP0043",
        "prevJobs": "PGUGCP0045",
        "jobExec": "pgug-pe-krb-inm-termdepositguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0047",
        "nextJobs": "PGUGCP0048",
        "prevJobs": "PGUGCP0046, PGUGCP0112",
        "jobExec": "pgug-pe-spk-qlt-termdepositguaranteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0048",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0047",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0049",
        "nextJobs": "PGUGCP0050",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-linksloanguarantees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0050",
        "nextJobs": "PGUGCP0051",
        "prevJobs": "PGUGCP0049",
        "jobExec": "pgug-pe-krb-inr-linksloanguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0051",
        "nextJobs": "PGUGCP0052",
        "prevJobs": "PGUGCP0050",
        "jobExec": "pgug-pe-spk-qlt-linksloanguaranteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0052",
        "nextJobs": "PGUGCP0053, PCDOCP0043",
        "prevJobs": "PGUGCP0051",
        "jobExec": "pgug-pe-krb-inm-linksloanguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0053",
        "nextJobs": "PGUGCP0054",
        "prevJobs": "PGUGCP0052",
        "jobExec": "pgug-pe-spk-qlt-linksloanguaranteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0054",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0053",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0055",
        "nextJobs": "PGUGCP0056",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-guaranteemutualfunds-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0056",
        "nextJobs": "PGUGCP0057",
        "prevJobs": "PGUGCP0055",
        "jobExec": "pgug-pe-krb-inr-guaranteemutualfundp-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0057",
        "nextJobs": "PGUGCP0058",
        "prevJobs": "PGUGCP0056",
        "jobExec": "pgug-pe-spk-qlt-guaranteemutualfundr-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0058",
        "nextJobs": "PGUGCP0059, PCDOCP0043",
        "prevJobs": "PGUGCP0057",
        "jobExec": "pgug-pe-krb-inm-guaranteemutualfundp-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0059",
        "nextJobs": "PGUGCP0060",
        "prevJobs": "PGUGCP0058",
        "jobExec": "pgug-pe-spk-qlt-guaranteemutualfundm-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0060",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0059",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0061",
        "nextJobs": "PGUGCP0062",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-crdletstandbyguarantees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0062",
        "nextJobs": "PGUGCP0063",
        "prevJobs": "PGUGCP0061",
        "jobExec": "pgug-pe-krb-inr-crdletstandbyguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0063",
        "nextJobs": "PGUGCP0064",
        "prevJobs": "PGUGCP0062",
        "jobExec": "pgug-pe-spk-qlt-crdletstandbyguaranteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0064",
        "nextJobs": "PGUGCP0065, PCDOCP0043",
        "prevJobs": "PGUGCP0063",
        "jobExec": "pgug-pe-krb-inm-crdletstandbyguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0065",
        "nextJobs": "PGUGCP0066",
        "prevJobs": "PGUGCP0064",
        "jobExec": "pgug-pe-spk-qlt-crdletstandbyguaranteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0066",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0065",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0067",
        "nextJobs": "PGUGCP0068",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-miningpledgeguarantees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0068",
        "nextJobs": "PGUGCP0069",
        "prevJobs": "PGUGCP0067",
        "jobExec": "pgug-pe-krb-inr-miningpledgeguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0069",
        "nextJobs": "PGUGCP0070",
        "prevJobs": "PGUGCP0068",
        "jobExec": "pgug-pe-spk-qlt-miningpledgeguaranteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0070",
        "nextJobs": "PGUGCP0071, PCDOCP0043",
        "prevJobs": "PGUGCP0069",
        "jobExec": "pgug-pe-krb-inm-miningpledgeguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0071",
        "nextJobs": "PGUGCP0072",
        "prevJobs": "PGUGCP0070",
        "jobExec": "pgug-pe-spk-qlt-miningpledgeguaranteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0072",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0071",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0073",
        "nextJobs": "PGUGCP0074",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-bailbondguarantees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0074",
        "nextJobs": "PGUGCP0075",
        "prevJobs": "PGUGCP0073",
        "jobExec": "pgug-pe-krb-inr-bailbondguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0075",
        "nextJobs": "PGUGCP0076",
        "prevJobs": "PGUGCP0074",
        "jobExec": "pgug-pe-spk-qlt-bailbondguaranteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0076",
        "nextJobs": "PGUGCP0077, PCDOCP0043",
        "prevJobs": "PGUGCP0075",
        "jobExec": "pgug-pe-krb-inm-bailbondguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0077",
        "nextJobs": "PGUGCP0078",
        "prevJobs": "PGUGCP0076, PGUGCP0112",
        "jobExec": "pgug-pe-spk-qlt-bailbondguaranteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0078",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0077",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0079",
        "nextJobs": "PGUGCP0080",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-bailbankingguarantees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0080",
        "nextJobs": "PGUGCP0081",
        "prevJobs": "PGUGCP0079",
        "jobExec": "pgug-pe-krb-inr-bailbankingguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0081",
        "nextJobs": "PGUGCP0082",
        "prevJobs": "PGUGCP0080",
        "jobExec": "pgug-pe-spk-qlt-bailbankingguaranteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0082",
        "nextJobs": "PGUGCP0083, PCDOCP0043",
        "prevJobs": "PGUGCP0081",
        "jobExec": "pgug-pe-krb-inm-bailbankingguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0083",
        "nextJobs": "PGUGCP0084",
        "prevJobs": "PGUGCP0082, PGUGCP0112",
        "jobExec": "pgug-pe-spk-qlt-bailbankingguaranteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0084",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0083",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0085",
        "nextJobs": "PGUGCP0086",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-guaranteeletterss-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0086",
        "nextJobs": "PGUGCP0087",
        "prevJobs": "PGUGCP0085",
        "jobExec": "pgug-pe-krb-inr-guaranteelettersp-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0087",
        "nextJobs": "PGUGCP0088",
        "prevJobs": "PGUGCP0086",
        "jobExec": "pgug-pe-spk-qlt-guaranteelettersr-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0088",
        "nextJobs": "PGUGCP0089, PCDOCP0043",
        "prevJobs": "PGUGCP0087",
        "jobExec": "pgug-pe-krb-inm-guaranteelettersp-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0089",
        "nextJobs": "PGUGCP0090",
        "prevJobs": "PGUGCP0088, PGUGCP0112",
        "jobExec": "pgug-pe-spk-qlt-guaranteelettersm-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0090",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0089",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0091",
        "nextJobs": "PGUGCP0092",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-noguarantees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0092",
        "nextJobs": "PGUGCP0093",
        "prevJobs": "PGUGCP0091",
        "jobExec": "pgug-pe-krb-inr-noguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0093",
        "nextJobs": "PGUGCP0094",
        "prevJobs": "PGUGCP0092",
        "jobExec": "pgug-pe-spk-qlt-noguaranteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0094",
        "nextJobs": "PGUGCP0095, PCDOCP0043",
        "prevJobs": "PGUGCP0093",
        "jobExec": "pgug-pe-krb-inm-noguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0095",
        "nextJobs": "PGUGCP0096",
        "prevJobs": "PGUGCP0094",
        "jobExec": "pgug-pe-spk-qlt-noguaranteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0096",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0095",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0097",
        "nextJobs": "PGUGCP0098",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-excludedguarantees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0098",
        "nextJobs": "PGUGCP0099",
        "prevJobs": "PGUGCP0097",
        "jobExec": "pgug-pe-krb-inr-excludedguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0099",
        "nextJobs": "PGUGCP0100",
        "prevJobs": "PGUGCP0098",
        "jobExec": "pgug-pe-spk-qlt-excludedguaranteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0100",
        "nextJobs": "PGUGCP0101",
        "prevJobs": "PGUGCP0099",
        "jobExec": "pgug-pe-krb-inm-excludedguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0101",
        "nextJobs": "PGUGCP0102",
        "prevJobs": "PGUGCP0100",
        "jobExec": "pgug-pe-spk-qlt-excludedguaranteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0102",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0101",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0103",
        "nextJobs": "PGUGCP0104",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-excludedleasingctrcts-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0104",
        "nextJobs": "PGUGCP0105",
        "prevJobs": "PGUGCP0103",
        "jobExec": "pgug-pe-krb-inr-excludedleasingctrctp-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0105",
        "nextJobs": "PGUGCP0106",
        "prevJobs": "PGUGCP0104",
        "jobExec": "pgug-pe-spk-qlt-excludedleasingctrctr-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0106",
        "nextJobs": "PGUGCP0107",
        "prevJobs": "PGUGCP0105",
        "jobExec": "pgug-pe-krb-inm-excludedleasingctrctp-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0107",
        "nextJobs": "PGUGCP0108",
        "prevJobs": "PGUGCP0106",
        "jobExec": "pgug-pe-spk-qlt-excludedleasingctrctm-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0108",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0107",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0109",
        "nextJobs": "PGUGCP0110",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-customerguaranteectrcts-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0110",
        "nextJobs": "PGUGCP0111",
        "prevJobs": "PGUGCP0109",
        "jobExec": "pgug-pe-krb-inr-customerguaranteectrctp-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0111",
        "nextJobs": "PGUGCP0112",
        "prevJobs": "PGUGCP0110",
        "jobExec": "pgug-pe-spk-qlt-customerguaranteectrctr-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0112",
        "nextJobs": "PGUGCP0113, PCDOCP0043, PGUGCP0023, PGUGCP0029, PGUGCP0035, PGUGCP0047, PGUGCP0077, PGUGCP0089, PGUGCP0155, PGUGCP0083",
        "prevJobs": "PGUGCP0111",
        "jobExec": "pgug-pe-krb-inm-customerguaranteectrctp-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0113",
        "nextJobs": "PGUGCP0114",
        "prevJobs": "PGUGCP0112",
        "jobExec": "pgug-pe-spk-qlt-customerguaranteectrctm-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0114",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0113",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0115",
        "nextJobs": "PGUGCP0116",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-pledgedsecuritiesgnts-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0116",
        "nextJobs": "PGUGCP0117",
        "prevJobs": "PGUGCP0115",
        "jobExec": "pgug-pe-krb-inr-pledgedsecuritiesgntp-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0117",
        "nextJobs": "PGUGCP0118",
        "prevJobs": "PGUGCP0116",
        "jobExec": "pgug-pe-spk-qlt-pledgedsecuritiesgntr-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0118",
        "nextJobs": "PGUGCP0119, PCDOCP0043",
        "prevJobs": "PGUGCP0117",
        "jobExec": "pgug-pe-krb-inm-pledgedsecuritiesgntp-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0119",
        "nextJobs": "PGUGCP0120",
        "prevJobs": "PGUGCP0118",
        "jobExec": "pgug-pe-spk-qlt-pledgedsecuritiesgntm-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0120",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0119",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0121",
        "nextJobs": "PGUGCP0122",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-commitmentlettergntees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0122",
        "nextJobs": "PGUGCP0123",
        "prevJobs": "PGUGCP0121",
        "jobExec": "pgug-pe-krb-inr-commitmentlettergnteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0123",
        "nextJobs": "PGUGCP0124",
        "prevJobs": "PGUGCP0122",
        "jobExec": "pgug-pe-spk-qlt-commitmentlettergnteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0124",
        "nextJobs": "PGUGCP0125, PCDOCP0043",
        "prevJobs": "PGUGCP0123",
        "jobExec": "pgug-pe-krb-inm-commitmentlettergnteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0125",
        "nextJobs": "PGUGCP0126",
        "prevJobs": "PGUGCP0124",
        "jobExec": "pgug-pe-spk-qlt-commitmentlettergnteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0126",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0125",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0127",
        "nextJobs": "PGUGCP0128",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-detailcounterguaranteess-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0128",
        "nextJobs": "PGUGCP0129",
        "prevJobs": "PGUGCP0127",
        "jobExec": "pgug-pe-krb-inr-detailcounterguaranteesp-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0129",
        "nextJobs": "PGUGCP0130",
        "prevJobs": "PGUGCP0128",
        "jobExec": "pgug-pe-spk-qlt-detailcounterguaranteesr-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0130",
        "nextJobs": "PGUGCP0131, PCDOCP0043",
        "prevJobs": "PGUGCP0129",
        "jobExec": "pgug-pe-krb-inm-detailcounterguaranteesp-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0131",
        "nextJobs": "PGUGCP0132",
        "prevJobs": "PGUGCP0130",
        "jobExec": "pgug-pe-spk-qlt-detailcounterguaranteesm-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0132",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0131",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0133",
        "nextJobs": "PGUGCP0134",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-stocksbondsguarantees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0134",
        "nextJobs": "PGUGCP0135",
        "prevJobs": "PGUGCP0133",
        "jobExec": "pgug-pe-krb-inr-stocksbondsguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0135",
        "nextJobs": "PGUGCP0136",
        "prevJobs": "PGUGCP0134",
        "jobExec": "pgug-pe-spk-qlt-stocksbondsguaranteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0136",
        "nextJobs": "PGUGCP0137, PCDOCP0043",
        "prevJobs": "PGUGCP0135",
        "jobExec": "pgug-pe-krb-inm-stocksbondsguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0137",
        "nextJobs": "PGUGCP0138",
        "prevJobs": "PGUGCP0136",
        "jobExec": "pgug-pe-spk-qlt-stocksbondsguaranteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0138",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0137",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0139",
        "nextJobs": "PGUGCP0140",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-regisguarteappraisalss-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0140",
        "nextJobs": "PGUGCP0141",
        "prevJobs": "PGUGCP0139",
        "jobExec": "pgug-pe-krb-inr-regisguarteappraisalsp-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0141",
        "nextJobs": "PGUGCP0142",
        "prevJobs": "PGUGCP0140",
        "jobExec": "pgug-pe-spk-qlt-regisguarteappraisalsr-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0142",
        "nextJobs": "PGUGCP0143",
        "prevJobs": "PGUGCP0141",
        "jobExec": "pgug-pe-krb-inm-regisguarteappraisalsp-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0143",
        "nextJobs": "PGUGCP0144",
        "prevJobs": "PGUGCP0142",
        "jobExec": "pgug-pe-spk-qlt-regisguarteappraisalsm-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0144",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0143",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0145",
        "nextJobs": "PGUGCP0146",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-trnsppledgeguarantees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0146",
        "nextJobs": "PGUGCP0147",
        "prevJobs": "PGUGCP0145",
        "jobExec": "pgug-pe-krb-inr-trnsppledgeguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0147",
        "nextJobs": "PGUGCP0148",
        "prevJobs": "PGUGCP0146",
        "jobExec": "pgug-pe-spk-qlt-trnsppledgeguaranteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0148",
        "nextJobs": "PGUGCP0149, PCDOCP0043",
        "prevJobs": "PGUGCP0147",
        "jobExec": "pgug-pe-krb-inm-trnsppledgeguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0149",
        "nextJobs": "PGUGCP0150",
        "prevJobs": "PGUGCP0148",
        "jobExec": "pgug-pe-spk-qlt-trnsppledgeguaranteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0150",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0149",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0151",
        "nextJobs": "PGUGCP0152",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-superdepositguarantees-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0152",
        "nextJobs": "PGUGCP0153",
        "prevJobs": "PGUGCP0151",
        "jobExec": "pgug-pe-krb-inr-superdepositguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0153",
        "nextJobs": "PGUGCP0154",
        "prevJobs": "PGUGCP0152",
        "jobExec": "pgug-pe-spk-qlt-superdepositguaranteer-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0154",
        "nextJobs": "PGUGCP0155",
        "prevJobs": "PGUGCP0153",
        "jobExec": "pgug-pe-krb-inm-superdepositguaranteep-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0155",
        "nextJobs": "PGUGCP0156",
        "prevJobs": "PGUGCP0112, PGUGCP0154",
        "jobExec": "pgug-pe-spk-qlt-superdepositguaranteem-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0156",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0155",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0157",
        "nextJobs": "PGUGCP0158",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-guaranteeaccountss-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0158",
        "nextJobs": "PGUGCP0159",
        "prevJobs": "PGUGCP0157",
        "jobExec": "pgug-pe-krb-inr-guaranteeaccountsp-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0159",
        "nextJobs": "PGUGCP0160",
        "prevJobs": "PGUGCP0158",
        "jobExec": "pgug-pe-spk-qlt-guaranteeaccountsr-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0160",
        "nextJobs": "PGUGCP0161, PCDOCP0043",
        "prevJobs": "PGUGCP0159",
        "jobExec": "pgug-pe-krb-inm-guaranteeaccountsp-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0161",
        "nextJobs": "PGUGCP0162",
        "prevJobs": "PGUGCP0160",
        "jobExec": "pgug-pe-spk-qlt-guaranteeaccountsm-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0162",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0161",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0163",
        "nextJobs": "PGUGCP0164",
        "prevJobs": "#N/A",
        "jobExec": "pgug-pe-spk-qlt-cbmecbmncertguaranteess-01",
        "isBase": true,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0164",
        "nextJobs": "PGUGCP0165, PGUGCP0166",
        "prevJobs": "PGUGCP0163",
        "jobExec": "pgug-pe-krb-inr-cbmecbmncertguaranteesp-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0165",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0164",
        "jobExec": "pgug-pe-spk-qlt-cbmecbmncertguaranteesr-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0166",
        "nextJobs": "PGUGCP0167, PGUGCP0168",
        "prevJobs": "PGUGCP0164",
        "jobExec": "pgug-pe-krb-inm-cbmecbmncertguaranteesp-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0167",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0166",
        "jobExec": "pgug-pe-spk-qlt-cbmecbmncertguaranteesm-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PGUGCP0168",
        "nextJobs": "#N/A",
        "prevJobs": "PGUGCP0166",
        "jobExec": "pgug-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PGUG/CR-PEGUGDIA-T02.xml"
      },
      {
        "job": "PDEOCP4I01",
        "nextJobs": "PDEOCP4H02, PDEOCP4I02",
        "prevJobs": "PDEOCP4H01",
        "jobExec": "pdeo-pe-krb-inr-consolidatedcycledfltp-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEOMEN-T02.xml"
      },
      {
        "job": "PDEOCP4I02",
        "nextJobs": "PDEOCP4H03",
        "prevJobs": "PDEOCP4I01",
        "jobExec": "pdeo-pe-krb-inm-consolidatedcycledfltp-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEOMEN-T02.xml"
      },
      {
        "job": "PDEOCP4H02",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP4I01",
        "jobExec": "pdeo-pe-spk-qlt-consolidatedcycledfltr-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEOMEN-T02.xml"
      },
      {
        "job": "PDEOCP4H03",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP4I02",
        "jobExec": "pdeo-pe-spk-qlt-consolidatedcycledfltm-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEOMEN-T02.xml"
      },
      {
        "job": "PDEOCP4H01",
        "nextJobs": "PDEOCP4I01",
        "prevJobs": "PDEOTP4I01",
        "jobExec": "pdeo-pe-spk-qlt-consolidatedcycledflts-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEOMEN-T02.xml"
      },
      {
        "job": "PDEOTP4I01",
        "nextJobs": "PDEOCP4H01",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDEOCD0001.sh",
        "isBase": true,
        "path": "./xmls/Local/PDEO/CR-PEDEOMEN-T02.xml"
      },
      {
        "job": "PDEOCP0H01",
        "nextJobs": "PDEOCP0I01",
        "prevJobs": "#N/A",
        "jobExec": "pdeo-pe-spk-qlt-legalapplcontractstocks-01",
        "isBase": true,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0I01",
        "nextJobs": "PDEOCP0I02, PDEOCP0H02",
        "prevJobs": "PDEOCP0H01",
        "jobExec": "pdeo-pe-krb-inr-legalapplcontractstockp-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0H02",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP0I01",
        "jobExec": "pdeo-pe-spk-qlt-legalapplcontractstockr-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0I02",
        "nextJobs": "PDEOCP0H03",
        "prevJobs": "PDEOCP0I01",
        "jobExec": "pdeo-pe-krb-inm-legalapplcontractstockp-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0H03",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP0I02",
        "jobExec": "pdeo-pe-spk-qlt-legalapplcontractstockm-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0H04",
        "nextJobs": "PDEOCP0I03",
        "prevJobs": "#N/A",
        "jobExec": "pdeo-pe-spk-qlt-legalstudiesasgnbases-01",
        "isBase": true,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0I03",
        "nextJobs": "PDEOCP0H05, PDEOCP0I04",
        "prevJobs": "PDEOCP0H04",
        "jobExec": "pdeo-pe-krb-inr-legalstudiesasgnbasep-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0H05",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP0I03",
        "jobExec": "pdeo-pe-spk-qlt-legalstudiesasgnbaser-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0I04",
        "nextJobs": "PDEOCP0H06",
        "prevJobs": "PDEOCP0I03",
        "jobExec": "pdeo-pe-krb-inm-legalstudiesasgnbasep-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0H06",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP0I04",
        "jobExec": "pdeo-pe-spk-qlt-legalstudiesasgnbasem-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0H07",
        "nextJobs": "PDEOCP0I05",
        "prevJobs": "#N/A",
        "jobExec": "pdeo-pe-spk-qlt-refinancedloanss-01",
        "isBase": true,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0I05",
        "nextJobs": "PDEOCP0H08, PDEOCP0I06",
        "prevJobs": "PDEOCP0H07",
        "jobExec": "pdeo-pe-krb-inr-refinancedloansp-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0H08",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP0I05",
        "jobExec": "pdeo-pe-spk-qlt-refinancedloansr-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0I06",
        "nextJobs": "PDEOCP0H09",
        "prevJobs": "PDEOCP0I05",
        "jobExec": "pdeo-pe-krb-inm-refinancedloansp-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0H09",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP0I06",
        "jobExec": "pdeo-pe-spk-qlt-refinancedloansm-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0H10",
        "nextJobs": "PDEOCP0I07",
        "prevJobs": "#N/A",
        "jobExec": "pdeo-pe-spk-qlt-legaldailysetlsimlts-01",
        "isBase": true,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0I07",
        "nextJobs": "PDEOCP0H11, PDEOCP0I08",
        "prevJobs": "PDEOCP0H10",
        "jobExec": "pdeo-pe-krb-inr-legaldailysetlsimltp-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0H11",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP0I07",
        "jobExec": "pdeo-pe-spk-qlt-legaldailysetlsimltr-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0I08",
        "nextJobs": "PDEOCP0H12",
        "prevJobs": "PDEOCP0I07",
        "jobExec": "pdeo-pe-krb-inm-legaldailysetlsimltp-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0H12",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP0I08",
        "jobExec": "pdeo-pe-spk-qlt-legaldailysetlsimltm-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0001",
        "nextJobs": "PDEOCP0002",
        "prevJobs": "#N/A",
        "jobExec": "pdeo-pe-spk-qlt-legalapplcustomeroblgs-01",
        "isBase": true,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0002",
        "nextJobs": "PDEOCP0003, PDEOCP0004",
        "prevJobs": "PDEOCP0001",
        "jobExec": "pdeo-pe-krb-inr-legalapplcustomeroblgp-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0003",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP0002",
        "jobExec": "pdeo-pe-spk-qlt-legalapplcustomeroblgr-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0004",
        "nextJobs": "PDEOCP0005",
        "prevJobs": "PDEOCP0002",
        "jobExec": "pdeo-pe-krb-inm-legalapplcustomeroblgp-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0005",
        "nextJobs": "PDEOCP0006",
        "prevJobs": "PDEOCP0004",
        "jobExec": "pdeo-pe-spk-qlt-legalapplcustomeroblgm-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0006",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP0005",
        "jobExec": "pdeo-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0007",
        "nextJobs": "PDEOCP0008",
        "prevJobs": "#N/A",
        "jobExec": "pdeo-pe-spk-qlt-legalapplcustomerfiles-01",
        "isBase": true,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0008",
        "nextJobs": "PDEOCP0009, PDEOCP0010",
        "prevJobs": "PDEOCP0007",
        "jobExec": "pdeo-pe-krb-inr-legalapplcustomerfilep-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0009",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP0008",
        "jobExec": "pdeo-pe-spk-qlt-legalapplcustomerfiler-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0010",
        "nextJobs": "PDEOCP0011",
        "prevJobs": "PDEOCP0008",
        "jobExec": "pdeo-pe-krb-inm-legalapplcustomerfilep-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0011",
        "nextJobs": "PDEOCP0012",
        "prevJobs": "PDEOCP0010",
        "jobExec": "pdeo-pe-spk-qlt-legalapplcustomerfilem-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0012",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP0011",
        "jobExec": "pdeo-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0013",
        "nextJobs": "PDEOCP0014",
        "prevJobs": "#N/A",
        "jobExec": "pdeo-pe-spk-qlt-confirmingunpaidinvcs-01",
        "isBase": true,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0014",
        "nextJobs": "PDEOCP0015, PDEOCP0016",
        "prevJobs": "PDEOCP0013",
        "jobExec": "pdeo-pe-krb-inr-confirmingunpaidinvcp-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0015",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP0014",
        "jobExec": "pdeo-pe-spk-qlt-confirmingunpaidinvcr-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0016",
        "nextJobs": "PDEOCP0017",
        "prevJobs": "PDEOCP0014",
        "jobExec": "pdeo-pe-krb-inm-confirmingunpaidinvcp-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0017",
        "nextJobs": "PDEOCP0018",
        "prevJobs": "PDEOCP0016",
        "jobExec": "pdeo-pe-spk-qlt-confirmingunpaidinvcm-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0018",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP0017",
        "jobExec": "pdeo-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0019",
        "nextJobs": "PDEOCP0020",
        "prevJobs": "#N/A",
        "jobExec": "pdeo-pe-spk-qlt-unpaidportfolioctrcts-01",
        "isBase": true,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0020",
        "nextJobs": "PDEOCP0021, PDEOCP0022",
        "prevJobs": "PDEOCP0019",
        "jobExec": "pdeo-pe-krb-inr-unpaidportfolioctrctp-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0021",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP0020",
        "jobExec": "pdeo-pe-spk-qlt-unpaidportfolioctrctr-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0022",
        "nextJobs": "PDEOCP0023",
        "prevJobs": "PDEOCP0020",
        "jobExec": "pdeo-pe-krb-inm-unpaidportfolioctrctp-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0023",
        "nextJobs": "PDEOCP0024",
        "prevJobs": "PDEOCP0022",
        "jobExec": "pdeo-pe-spk-qlt-unpaidportfolioctrctm-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0024",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP0023",
        "jobExec": "pdeo-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0025",
        "nextJobs": "PDEOCP0026",
        "prevJobs": "#N/A",
        "jobExec": "pdeo-pe-spk-qlt-vsamlglmstrcntlinfos-01",
        "isBase": true,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0026",
        "nextJobs": "PDEOCP0027, PDEOCP0028",
        "prevJobs": "PDEOCP0025",
        "jobExec": "pdeo-pe-krb-inr-vsamlglmstrcntlinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0027",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP0026",
        "jobExec": "pdeo-pe-spk-qlt-vsamlglmstrcntlinfor-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0028",
        "nextJobs": "PDEOCP0029",
        "prevJobs": "PDEOCP0026",
        "jobExec": "pdeo-pe-krb-inm-vsamlglmstrcntlinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0029",
        "nextJobs": "PDEOCP0030",
        "prevJobs": "PDEOCP0028",
        "jobExec": "pdeo-pe-spk-qlt-vsamlglmstrcntlinfom-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PDEOCP0030",
        "nextJobs": "#N/A",
        "prevJobs": "PDEOCP0029",
        "jobExec": "pdeo-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PDEO/CR-PEDEODIA-T02.xml"
      },
      {
        "job": "PRASWP4001",
        "nextJobs": "PRASCP4H01",
        "prevJobs": "PRASTP4001",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4H01",
        "nextJobs": "PRASCP4I01",
        "prevJobs": "PRASWP4001",
        "jobExec": "pras-pe-spk-qlt-modelproactivepymes-01",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4I01",
        "nextJobs": "PRASCP4I02, PRASCP4H02",
        "prevJobs": "PRASCP4H01",
        "jobExec": "pras-pe-krb-inr-modelproactivepymep-01",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4I02",
        "nextJobs": "PRASCP4H03",
        "prevJobs": "PRASCP4I01",
        "jobExec": "pras-pe-krb-inm-modelproactivepymep-01",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4H03",
        "nextJobs": "#N/A",
        "prevJobs": "PRASCP4I02",
        "jobExec": "pras-pe-spk-qlt-modelproactivepymem-01",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASTP4001",
        "nextJobs": "PRASWP4001",
        "prevJobs": "#N/A",
        "jobExec": "RX_PEXTCD0004.sh",
        "isBase": true,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4H02",
        "nextJobs": "#N/A",
        "prevJobs": "PRASCP4I01",
        "jobExec": "pras-pe-spk-qlt-modelproactivepymer-01",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4001",
        "nextJobs": "PRASCP4002",
        "prevJobs": "#N/A",
        "jobExec": "pras-pe-spk-qlt-mortgagearea14scorings-01",
        "isBase": true,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4002",
        "nextJobs": "PRASCP4003, PRASCP4004",
        "prevJobs": "PRASCP4001",
        "jobExec": "pras-pe-krb-inr-mortgagearea14scoringp-01",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4003",
        "nextJobs": "#N/A",
        "prevJobs": "PRASCP4002",
        "jobExec": "pras-pe-spk-qlt-mortgagearea14scoringr-01",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4004",
        "nextJobs": "PRASCP4005",
        "prevJobs": "PRASCP4002",
        "jobExec": "pras-pe-krb-inm-area14scoringp-01",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4005",
        "nextJobs": "PRASCP4006",
        "prevJobs": "PRASCP4004",
        "jobExec": "pras-pe-spk-qlt-area14scoringm-03",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4006",
        "nextJobs": "#N/A",
        "prevJobs": "PRASCP4005",
        "jobExec": "pras-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4007",
        "nextJobs": "PRASCP4008",
        "prevJobs": "#N/A",
        "jobExec": "pras-pe-spk-qlt-consumerarea14scorings-01",
        "isBase": true,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4008",
        "nextJobs": "PRASCP4009, PRASCP4010",
        "prevJobs": "PRASCP4007",
        "jobExec": "pras-pe-krb-inr-consumerarea14scoringp-01",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4009",
        "nextJobs": "#N/A",
        "prevJobs": "PRASCP4008",
        "jobExec": "pras-pe-spk-qlt-consumerarea14scoringr-01",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4010",
        "nextJobs": "PRASCP4011",
        "prevJobs": "PRASCP4008",
        "jobExec": "pras-pe-krb-inm-area14scoringp-01",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4011",
        "nextJobs": "PRASCP4012",
        "prevJobs": "PRASCP4010",
        "jobExec": "pras-pe-spk-qlt-area14scoringm-02",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4012",
        "nextJobs": "#N/A",
        "prevJobs": "PRASCP4011",
        "jobExec": "pras-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4013",
        "nextJobs": "PRASCP4014",
        "prevJobs": "#N/A",
        "jobExec": "pras-pe-spk-qlt-cardarea14scorings-01",
        "isBase": true,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4014",
        "nextJobs": "PRASCP4015, PRASCP4016",
        "prevJobs": "PRASCP4013",
        "jobExec": "pras-pe-krb-inr-cardarea14scoringp-01",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4015",
        "nextJobs": "#N/A",
        "prevJobs": "PRASCP4014",
        "jobExec": "pras-pe-spk-qlt-cardarea14scoringr-01",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4016",
        "nextJobs": "PRASCP4017",
        "prevJobs": "PRASCP4014",
        "jobExec": "pras-pe-krb-inm-area14scoringp-01",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4017",
        "nextJobs": "PRASCP4018",
        "prevJobs": "PRASCP4016",
        "jobExec": "pras-pe-spk-qlt-area14scoringm-01",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PRASCP4018",
        "nextJobs": "#N/A",
        "prevJobs": "PRASCP4017",
        "jobExec": "pras-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PRAS/CR-PERASMEN-T02.xml"
      },
      {
        "job": "PBILTP0001",
        "nextJobs": "PBILWP0001",
        "prevJobs": "#N/A",
        "jobExec": "RX_PBILCD0001.sh",
        "isBase": true,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILWP0001",
        "nextJobs": "PBILCP0I01",
        "prevJobs": "PBILTP0001",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0I01",
        "nextJobs": "PBILCP0I02",
        "prevJobs": "PBILWP0001",
        "jobExec": "pbil-pe-krb-inr-parameterfinancep-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0I02",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP0I01",
        "jobExec": "pbil-pe-krb-inm-parameterfinancep-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0001",
        "nextJobs": "PBILCP0002, PBILCP0003, PBILCP0004, PBILCP0005, PBILCP0006, PBILCP0007, PBILCP0008, PBILCP0009, PBILCP0028",
        "prevJobs": "#N/A",
        "jobExec": "pbil-pe-spk-inm-inventorymaster-01",
        "isBase": true,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0003",
        "nextJobs": "PBILCP0010",
        "prevJobs": "PBILCP0001",
        "jobExec": "pbil-pe-spk-inm-cptrejected-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0004",
        "nextJobs": "PBILCP0010",
        "prevJobs": "PBILCP0001",
        "jobExec": "pbil-pe-spk-inm-cptcardsmovement-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0005",
        "nextJobs": "PBILCP0010",
        "prevJobs": "PBILCP0001",
        "jobExec": "pbil-pe-spk-inm-cptstocks-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0006",
        "nextJobs": "PBILCP0010",
        "prevJobs": "PBILCP0001",
        "jobExec": "pbil-pe-spk-inm-cptcards-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0009",
        "nextJobs": "PBILCP0010",
        "prevJobs": "PBILCP0001",
        "jobExec": "pbil-pe-spk-inm-cptproductsmovement-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0010",
        "nextJobs": "PBILCP0011",
        "prevJobs": "PBILCP0003, PBILCP0004, PBILCP0005, PBILCP0006, PBILCP0009, PBILCP0002, PBILCP0007, PBILCP0008, PBILCP0028",
        "jobExec": "pbil-pe-spk-inm-cptconsolidation-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0011",
        "nextJobs": "PBILCP0012",
        "prevJobs": "PBILCP0010",
        "jobExec": "pbil-pe-spk-inm-cmpcore-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0002",
        "nextJobs": "PBILCP0010",
        "prevJobs": "PBILCP0001",
        "jobExec": "pbil-pe-spk-inm-cptsalescancellations-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0007",
        "nextJobs": "PBILCP0010",
        "prevJobs": "PBILCP0001",
        "jobExec": "pbil-pe-spk-inm-cptinvoices-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0008",
        "nextJobs": "PBILCP0010",
        "prevJobs": "PBILCP0001",
        "jobExec": "pbil-pe-spk-inm-cptmutualfunds-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0012",
        "nextJobs": "PBILCP0013",
        "prevJobs": "PBILCP0011",
        "jobExec": "pbil-pe-spk-inm-adjustmentstcomsales-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0013",
        "nextJobs": "PBILCP0014",
        "prevJobs": "PBILCP0012",
        "jobExec": "pbil-pe-spk-inm-adjustmentstcomsales-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0014",
        "nextJobs": "PBILCP0015",
        "prevJobs": "PBILCP0013",
        "jobExec": "pbil-pe-spk-inm-cmpadditionalothers-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0015",
        "nextJobs": "PBILCP0016",
        "prevJobs": "PBILCP0014",
        "jobExec": "pbil-pe-spk-inm-adjustmentstcomsales-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0016",
        "nextJobs": "PBILCP0017",
        "prevJobs": "PBILCP0015",
        "jobExec": "pbil-pe-spk-inm-dailyadjustmentsbalances-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0017",
        "nextJobs": "PBILCP0018, PBILCP0019, PBILCP0020",
        "prevJobs": "PBILCP0016",
        "jobExec": "pbil-pe-spk-inm-cmpproductivity-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0018",
        "nextJobs": "PBILCP0021",
        "prevJobs": "PBILCP0017",
        "jobExec": "pbil-pe-spk-inm-dgtsalesfamily-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0019",
        "nextJobs": "PBILCP0021",
        "prevJobs": "PBILCP0017",
        "jobExec": "pbil-pe-spk-inm-dgtsalesfamily-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0020",
        "nextJobs": "PBILCP0021",
        "prevJobs": "PBILCP0017",
        "jobExec": "pbil-pe-spk-inm-dgtsalesfamily-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0021",
        "nextJobs": "PBILCP0022, PBILCP0023, PBILCP0029",
        "prevJobs": "PBILCP0018, PBILCP0019, PBILCP0020",
        "jobExec": "pbil-pe-spk-inm-dgtsalesconsolidation-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0023",
        "nextJobs": "PBILCP0024",
        "prevJobs": "PBILCP0021",
        "jobExec": "pbil-pe-spk-inm-availagregatebase-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0024",
        "nextJobs": "PBILCP0025, PBILCP0026, PBILCP0027",
        "prevJobs": "PBILCP0023",
        "jobExec": "pbil-pe-spk-inm-availintramis-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0028",
        "nextJobs": "PBILCP0010",
        "prevJobs": "PBILCP0001",
        "jobExec": "pbil-pe-spk-inm-cptexternalmovement-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0029",
        "nextJobs": "PBILCP4039, PBILCP4074, PBILCP4001",
        "prevJobs": "PBILCP0021",
        "jobExec": "pbil-pe-spk-inm-closeanalyticalprocess-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0026",
        "nextJobs": "PBILCP0038",
        "prevJobs": "PBILCP0024",
        "jobExec": "pbil-pe-krb-out-dailymanagerscatalog1p-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0038",
        "nextJobs": "PBILCP0042",
        "prevJobs": "PBILCP0026",
        "jobExec": "pbil-pe-spk-qlt-dailymanagerscatalog1s-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0042",
        "nextJobs": "PBILTP0003",
        "prevJobs": "PBILCP0038",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILTP0003",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP0042",
        "jobExec": "TX_PBILCD0003.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0022",
        "nextJobs": "PBILCP0039",
        "prevJobs": "PBILCP0021",
        "jobExec": "pbil-pe-krb-out-newproductiondaily1p-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0039",
        "nextJobs": "PBILCP0043",
        "prevJobs": "PBILCP0022",
        "jobExec": "pbil-pe-spk-qlt-newproductiondaily1s-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0043",
        "nextJobs": "PBILTP0005",
        "prevJobs": "PBILCP0039",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILTP0005",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP0043",
        "jobExec": "TX_PBILCD0005.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0025",
        "nextJobs": "PBILCP0036",
        "prevJobs": "PBILCP0024",
        "jobExec": "pbil-pe-krb-out-branchaggbillinddaily1p-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0036",
        "nextJobs": "PBILCP0040",
        "prevJobs": "PBILCP0025",
        "jobExec": "pbil-pe-spk-qlt-branchaggbillinddaily1s-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0040",
        "nextJobs": "PBILTP0002",
        "prevJobs": "PBILCP0036",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILTP0002",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP0040",
        "jobExec": "TX_PBILCD0002.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0027",
        "nextJobs": "PBILCP0037",
        "prevJobs": "PBILCP0024",
        "jobExec": "pbil-pe-krb-out-detldailybillmanager1p-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0037",
        "nextJobs": "PBILCP0041",
        "prevJobs": "PBILCP0027",
        "jobExec": "pbil-pe-spk-qlt-detldailybillmanager1s-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP0041",
        "nextJobs": "PBILTP0004",
        "prevJobs": "PBILCP0037",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILTP0004",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP0041",
        "jobExec": "TX_PBILCD0004.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILDIA-T02.xml"
      },
      {
        "job": "PBILCP4038",
        "nextJobs": "PBILCP4126",
        "prevJobs": "PBILCP4013",
        "jobExec": "pbil-pe-krb-out-stockmonthlyp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4022",
        "nextJobs": "PBILCP4120",
        "prevJobs": "PBILCP4037",
        "jobExec": "pbil-pe-krb-out-newproductionmonthly1p-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4025",
        "nextJobs": "PBILCP4135",
        "prevJobs": "PBILCP4024",
        "jobExec": "pbil-pe-krb-out-detlmthlybillmanager1p-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4026",
        "nextJobs": "PBILCP4114",
        "prevJobs": "PBILCP4024",
        "jobExec": "pbil-pe-krb-out-branchaggbillindmthly1p-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4028",
        "nextJobs": "PBILCP4132",
        "prevJobs": "PBILCP4027",
        "jobExec": "pbil-pe-krb-out-contstkmthbillhistserp-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4029",
        "nextJobs": "PBILCP4123",
        "prevJobs": "PBILCP4027",
        "jobExec": "pbil-pe-krb-out-regismthbillhistseriep-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4030",
        "nextJobs": "PBILCP4117",
        "prevJobs": "PBILCP4027",
        "jobExec": "pbil-pe-krb-out-cnclmthbillhistseriep-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4032",
        "nextJobs": "PBILCP4141",
        "prevJobs": "PBILCP4031",
        "jobExec": "pbil-pe-krb-out-holdprodinvcoperamtp-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4033",
        "nextJobs": "PBILCP4144",
        "prevJobs": "PBILCP4031",
        "jobExec": "pbil-pe-krb-out-holdprodinvcctrctnbrp-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4034",
        "nextJobs": "PBILCP4138",
        "prevJobs": "PBILCP4031",
        "jobExec": "pbil-pe-krb-out-holdprodchanoperamtp-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4035",
        "nextJobs": "PBILCP4129",
        "prevJobs": "PBILCP4031",
        "jobExec": "pbil-pe-krb-out-holdprodchanctrctnbrp-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4059",
        "nextJobs": "PBILCP4125",
        "prevJobs": "PBILCP4052",
        "jobExec": "pbil-pe-krb-out-stockmonthlyp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4060",
        "nextJobs": "PBILCP4119",
        "prevJobs": "PBILCP4058",
        "jobExec": "pbil-pe-krb-out-newproductionmonthly1p-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4063",
        "nextJobs": "PBILCP4134",
        "prevJobs": "PBILCP4062",
        "jobExec": "pbil-pe-krb-out-detlmthlybillmanager1p-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4064",
        "nextJobs": "PBILCP4113",
        "prevJobs": "PBILCP4062",
        "jobExec": "pbil-pe-krb-out-branchaggbillindmthly1p-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4066",
        "nextJobs": "PBILCP4131",
        "prevJobs": "PBILCP4065",
        "jobExec": "pbil-pe-krb-out-contstkmthbillhistserp-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4067",
        "nextJobs": "PBILCP4122",
        "prevJobs": "PBILCP4065",
        "jobExec": "pbil-pe-krb-out-regismthbillhistseriep-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4068",
        "nextJobs": "PBILCP4116",
        "prevJobs": "PBILCP4065",
        "jobExec": "pbil-pe-krb-out-cnclmthbillhistseriep-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4070",
        "nextJobs": "PBILCP4140",
        "prevJobs": "PBILCP4069",
        "jobExec": "pbil-pe-krb-out-holdprodinvcoperamtp-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4071",
        "nextJobs": "PBILCP4143",
        "prevJobs": "PBILCP4069",
        "jobExec": "pbil-pe-krb-out-holdprodinvcctrctnbrp-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4072",
        "nextJobs": "PBILCP4137",
        "prevJobs": "PBILCP4069",
        "jobExec": "pbil-pe-krb-out-holdprodchanoperamtp-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4073",
        "nextJobs": "PBILCP4128",
        "prevJobs": "PBILCP4069",
        "jobExec": "pbil-pe-krb-out-holdprodchanctrctnbrp-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4094",
        "nextJobs": "PBILCP4124",
        "prevJobs": "PBILCP4087",
        "jobExec": "pbil-pe-krb-out-stockmonthlyp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4095",
        "nextJobs": "PBILCP4118",
        "prevJobs": "PBILCP4093",
        "jobExec": "pbil-pe-krb-out-newproductionmonthly1p-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4098",
        "nextJobs": "PBILCP4133",
        "prevJobs": "PBILCP4097",
        "jobExec": "pbil-pe-krb-out-detlmthlybillmanager1p-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4099",
        "nextJobs": "PBILCP4112",
        "prevJobs": "PBILCP4097",
        "jobExec": "pbil-pe-krb-out-branchaggbillindmthly1p-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4101",
        "nextJobs": "PBILCP4130",
        "prevJobs": "PBILCP4100",
        "jobExec": "pbil-pe-krb-out-contstkmthbillhistserp-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4102",
        "nextJobs": "PBILCP4121",
        "prevJobs": "PBILCP4100",
        "jobExec": "pbil-pe-krb-out-regismthbillhistseriep-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4103",
        "nextJobs": "PBILCP4115",
        "prevJobs": "PBILCP4100",
        "jobExec": "pbil-pe-krb-out-cnclmthbillhistseriep-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4105",
        "nextJobs": "PBILCP4139",
        "prevJobs": "PBILCP4104",
        "jobExec": "pbil-pe-krb-out-holdprodinvcoperamtp-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4106",
        "nextJobs": "PBILCP4142",
        "prevJobs": "PBILCP4104",
        "jobExec": "pbil-pe-krb-out-holdprodinvcctrctnbrp-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4107",
        "nextJobs": "PBILCP4136",
        "prevJobs": "PBILCP4104",
        "jobExec": "pbil-pe-krb-out-holdprodchanoperamtp-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4108",
        "nextJobs": "PBILCP4127",
        "prevJobs": "PBILCP4104",
        "jobExec": "pbil-pe-krb-out-holdprodchanctrctnbrp-02",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4118",
        "nextJobs": "PBILCP4151",
        "prevJobs": "PBILCP4095",
        "jobExec": "pbil-pe-spk-qlt-newproductionmonthly1s-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4151",
        "nextJobs": "PBILTP4021",
        "prevJobs": "PBILCP4118",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4021",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4151",
        "jobExec": "TX_PBILCD0001.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4124",
        "nextJobs": "PBILCP4157",
        "prevJobs": "PBILCP4094",
        "jobExec": "pbil-pe-spk-qlt-stockmonthlys-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4157",
        "nextJobs": "PBILTP4033",
        "prevJobs": "PBILCP4124",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4033",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4157",
        "jobExec": "TX_PBILCD0015.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4139",
        "nextJobs": "PBILCP4172",
        "prevJobs": "PBILCP4105",
        "jobExec": "pbil-pe-spk-qlt-holdprodinvcoperamts-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4172",
        "nextJobs": "PBILTP4027",
        "prevJobs": "PBILCP4139",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4027",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4172",
        "jobExec": "TX_PBILCD0006.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4142",
        "nextJobs": "PBILCP4175",
        "prevJobs": "PBILCP4106",
        "jobExec": "pbil-pe-spk-qlt-holdprodinvcctrctnbrs-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4175",
        "nextJobs": "PBILTP4028",
        "prevJobs": "PBILCP4142",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4028",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4175",
        "jobExec": "TX_PBILCD0007.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4136",
        "nextJobs": "PBILCP4169",
        "prevJobs": "PBILCP4107",
        "jobExec": "pbil-pe-spk-qlt-holdprodchanoperamts-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4169",
        "nextJobs": "PBILTP4029",
        "prevJobs": "PBILCP4136",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4029",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4169",
        "jobExec": "TX_PBILCD0008.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4127",
        "nextJobs": "PBILCP4160",
        "prevJobs": "PBILCP4108",
        "jobExec": "pbil-pe-spk-qlt-holdprodchanctrctnbrs-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4160",
        "nextJobs": "PBILTP4030",
        "prevJobs": "PBILCP4127",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4030",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4160",
        "jobExec": "TX_PBILCD0009.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4133",
        "nextJobs": "PBILCP4166",
        "prevJobs": "PBILCP4098",
        "jobExec": "pbil-pe-spk-qlt-detlmthlybillmanager1s-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4166",
        "nextJobs": "PBILTP4022",
        "prevJobs": "PBILCP4133",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4022",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4166",
        "jobExec": "TX_PBILCD0010.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4112",
        "nextJobs": "PBILCP4145",
        "prevJobs": "PBILCP4099",
        "jobExec": "pbil-pe-spk-qlt-branchaggbillindmthly1s-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4145",
        "nextJobs": "PBILTP4023",
        "prevJobs": "PBILCP4112",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4023",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4145",
        "jobExec": "TX_PBILCD0011.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4130",
        "nextJobs": "PBILCP4163",
        "prevJobs": "PBILCP4101",
        "jobExec": "pbil-pe-spk-qlt-contstkmthbillhistsers-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4163",
        "nextJobs": "PBILTP4024",
        "prevJobs": "PBILCP4130",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4024",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4163",
        "jobExec": "TX_PBILCD0012.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4121",
        "nextJobs": "PBILCP4154",
        "prevJobs": "PBILCP4102",
        "jobExec": "pbil-pe-spk-qlt-regismthbillhistseries-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4154",
        "nextJobs": "PBILTP4025",
        "prevJobs": "PBILCP4121",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4025",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4154",
        "jobExec": "TX_PBILCD0013.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4115",
        "nextJobs": "PBILCP4148",
        "prevJobs": "PBILCP4103",
        "jobExec": "pbil-pe-spk-qlt-cnclmthbillhistseries-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4148",
        "nextJobs": "PBILTP4026",
        "prevJobs": "PBILCP4115",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4026",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4148",
        "jobExec": "TX_PBILCD0014.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4113",
        "nextJobs": "PBILCP4146",
        "prevJobs": "PBILCP4064",
        "jobExec": "pbil-pe-spk-qlt-branchaggbillindmthly1s-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4146",
        "nextJobs": "PBILTP4013",
        "prevJobs": "PBILCP4113",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4013",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4146",
        "jobExec": "TX_PBILCD0011.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4116",
        "nextJobs": "PBILCP4149",
        "prevJobs": "PBILCP4068",
        "jobExec": "pbil-pe-spk-qlt-cnclmthbillhistseries-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4149",
        "nextJobs": "PBILTP4016",
        "prevJobs": "PBILCP4116",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4016",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4149",
        "jobExec": "TX_PBILCD0014.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4119",
        "nextJobs": "PBILCP4152",
        "prevJobs": "PBILCP4060",
        "jobExec": "pbil-pe-spk-qlt-newproductionmonthly1s-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4152",
        "nextJobs": "PBILTP4011",
        "prevJobs": "PBILCP4119",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4011",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4152",
        "jobExec": "TX_PBILCD0001.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4122",
        "nextJobs": "PBILCP4155",
        "prevJobs": "PBILCP4067",
        "jobExec": "pbil-pe-spk-qlt-regismthbillhistseries-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4155",
        "nextJobs": "PBILTP4015",
        "prevJobs": "PBILCP4122",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4015",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4155",
        "jobExec": "TX_PBILCD0013.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4125",
        "nextJobs": "PBILCP4158",
        "prevJobs": "PBILCP4059",
        "jobExec": "pbil-pe-spk-qlt-stockmonthlys-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4158",
        "nextJobs": "PBILTP4032",
        "prevJobs": "PBILCP4125",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4032",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4158",
        "jobExec": "TX_PBILCD0015.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4128",
        "nextJobs": "PBILCP4161",
        "prevJobs": "PBILCP4073",
        "jobExec": "pbil-pe-spk-qlt-holdprodchanctrctnbrs-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4161",
        "nextJobs": "PBILTP4020",
        "prevJobs": "PBILCP4128",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4020",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4161",
        "jobExec": "TX_PBILCD0009.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4131",
        "nextJobs": "PBILCP4164",
        "prevJobs": "PBILCP4066",
        "jobExec": "pbil-pe-spk-qlt-contstkmthbillhistsers-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4164",
        "nextJobs": "PBILTP4014",
        "prevJobs": "PBILCP4131",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4014",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4164",
        "jobExec": "TX_PBILCD0012.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4134",
        "nextJobs": "PBILCP4167",
        "prevJobs": "PBILCP4063",
        "jobExec": "pbil-pe-spk-qlt-detlmthlybillmanager1s-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4167",
        "nextJobs": "PBILTP4012",
        "prevJobs": "PBILCP4134",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4012",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4167",
        "jobExec": "TX_PBILCD0010.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4137",
        "nextJobs": "PBILCP4170",
        "prevJobs": "PBILCP4072",
        "jobExec": "pbil-pe-spk-qlt-holdprodchanoperamts-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4170",
        "nextJobs": "PBILTP4019",
        "prevJobs": "PBILCP4137",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4019",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4170",
        "jobExec": "TX_PBILCD0008.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4140",
        "nextJobs": "PBILCP4173",
        "prevJobs": "PBILCP4070",
        "jobExec": "pbil-pe-spk-qlt-holdprodinvcoperamts-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4173",
        "nextJobs": "PBILTP4017",
        "prevJobs": "PBILCP4140",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4017",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4173",
        "jobExec": "TX_PBILCD0006.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4143",
        "nextJobs": "PBILCP4176",
        "prevJobs": "PBILCP4071",
        "jobExec": "pbil-pe-spk-qlt-holdprodinvcctrctnbrs-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4176",
        "nextJobs": "PBILTP4018",
        "prevJobs": "PBILCP4143",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4018",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4176",
        "jobExec": "TX_PBILCD0007.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4126",
        "nextJobs": "PBILCP4159",
        "prevJobs": "PBILCP4038",
        "jobExec": "pbil-pe-spk-qlt-stockmonthlys-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4159",
        "nextJobs": "PBILTP4031",
        "prevJobs": "PBILCP4126",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4031",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4159",
        "jobExec": "TX_PBILCD0015.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4114",
        "nextJobs": "PBILCP4147",
        "prevJobs": "PBILCP4026",
        "jobExec": "pbil-pe-spk-qlt-branchaggbillindmthly1s-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4147",
        "nextJobs": "PBILTP4007",
        "prevJobs": "PBILCP4114",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4007",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4147",
        "jobExec": "TX_PBILCD0011.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4117",
        "nextJobs": "PBILCP4150",
        "prevJobs": "PBILCP4030",
        "jobExec": "pbil-pe-spk-qlt-cnclmthbillhistseries-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4150",
        "nextJobs": "PBILTP4010",
        "prevJobs": "PBILCP4117",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4010",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4150",
        "jobExec": "TX_PBILCD0014.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4120",
        "nextJobs": "PBILCP4153",
        "prevJobs": "PBILCP4022",
        "jobExec": "pbil-pe-spk-qlt-newproductionmonthly1s-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4153",
        "nextJobs": "PBILTP4001",
        "prevJobs": "PBILCP4120",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4001",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4153",
        "jobExec": "TX_PBILCD0001.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4123",
        "nextJobs": "PBILCP4156",
        "prevJobs": "PBILCP4029",
        "jobExec": "pbil-pe-spk-qlt-regismthbillhistseries-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4156",
        "nextJobs": "PBILTP4009",
        "prevJobs": "PBILCP4123",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4009",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4156",
        "jobExec": "TX_PBILCD0013.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4129",
        "nextJobs": "PBILCP4162",
        "prevJobs": "PBILCP4035",
        "jobExec": "pbil-pe-spk-qlt-holdprodchanctrctnbrs-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4162",
        "nextJobs": "PBILTP4005",
        "prevJobs": "PBILCP4129",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4005",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4162",
        "jobExec": "TX_PBILCD0009.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4132",
        "nextJobs": "PBILCP4165",
        "prevJobs": "PBILCP4028",
        "jobExec": "pbil-pe-spk-qlt-contstkmthbillhistsers-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4165",
        "nextJobs": "PBILTP4008",
        "prevJobs": "PBILCP4132",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4008",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4165",
        "jobExec": "TX_PBILCD0012.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4135",
        "nextJobs": "PBILCP4168",
        "prevJobs": "PBILCP4025",
        "jobExec": "pbil-pe-spk-qlt-detlmthlybillmanager1s-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4168",
        "nextJobs": "PBILTP4006",
        "prevJobs": "PBILCP4135",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4006",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4168",
        "jobExec": "TX_PBILCD0010.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4138",
        "nextJobs": "PBILCP4171",
        "prevJobs": "PBILCP4034",
        "jobExec": "pbil-pe-spk-qlt-holdprodchanoperamts-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4171",
        "nextJobs": "PBILTP4004",
        "prevJobs": "PBILCP4138",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4004",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4171",
        "jobExec": "TX_PBILCD0008.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4141",
        "nextJobs": "PBILCP4174",
        "prevJobs": "PBILCP4032",
        "jobExec": "pbil-pe-spk-qlt-holdprodinvcoperamts-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4174",
        "nextJobs": "PBILTP4002",
        "prevJobs": "PBILCP4141",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4002",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4174",
        "jobExec": "TX_PBILCD0006.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4144",
        "nextJobs": "PBILCP4177",
        "prevJobs": "PBILCP4033",
        "jobExec": "pbil-pe-spk-qlt-holdprodinvcctrctnbrs-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4177",
        "nextJobs": "PBILTP4003",
        "prevJobs": "PBILCP4144",
        "jobExec": "pbil-pe-dfs-ren-operationalizationanp-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILTP4003",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4177",
        "jobExec": "TX_PBILCD0007.sh",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4039",
        "nextJobs": "PBILCP4040, PBILCP4041, PBILCP4042, PBILCP4043, PBILCP4044, PBILCP4045, PBILCP4046, PBILCP4047",
        "prevJobs": "#N/A",
        "jobExec": "pbil-pe-spk-inm-inventorymaster-01",
        "isBase": true,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4001",
        "nextJobs": "PBILCP4002, PBILCP4003, PBILCP4004, PBILCP4005, PBILCP4006, PBILCP4007, PBILCP4008, PBILCP4036",
        "prevJobs": "#N/A",
        "jobExec": "pbil-pe-spk-inm-inventorymaster-01",
        "isBase": true,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4037",
        "nextJobs": "PBILCP4111, PBILCP4022, PBILCP4031, PBILCP4023",
        "prevJobs": "PBILCP4019",
        "jobExec": "pbil-pe-spk-inm-monthlyfieldsrebuild-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4111",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4037",
        "jobExec": "pbil-pe-spk-inm-closeanalyticalprocess-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4036",
        "nextJobs": "PBILCP4009",
        "prevJobs": "PBILCP4001",
        "jobExec": "pbil-pe-spk-inm-cptexternalmovement-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4002",
        "nextJobs": "PBILCP4009",
        "prevJobs": "PBILCP4001",
        "jobExec": "pbil-pe-spk-inm-cptsalescancellations-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4003",
        "nextJobs": "PBILCP4009",
        "prevJobs": "PBILCP4001",
        "jobExec": "pbil-pe-spk-inm-cptcardsmovement-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4004",
        "nextJobs": "PBILCP4009",
        "prevJobs": "PBILCP4001",
        "jobExec": "pbil-pe-spk-inm-cptstocks-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4005",
        "nextJobs": "PBILCP4009",
        "prevJobs": "PBILCP4001",
        "jobExec": "pbil-pe-spk-inm-cptcards-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4006",
        "nextJobs": "PBILCP4009",
        "prevJobs": "PBILCP4001",
        "jobExec": "pbil-pe-spk-inm-cptinvoices-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4007",
        "nextJobs": "PBILCP4009",
        "prevJobs": "PBILCP4001",
        "jobExec": "pbil-pe-spk-inm-cptmutualfunds-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4008",
        "nextJobs": "PBILCP4009",
        "prevJobs": "PBILCP4001",
        "jobExec": "pbil-pe-spk-inm-cptproductsmovement-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4009",
        "nextJobs": "PBILCP4010",
        "prevJobs": "PBILCP4036, PBILCP4002, PBILCP4003, PBILCP4004, PBILCP4005, PBILCP4006, PBILCP4007, PBILCP4008",
        "jobExec": "pbil-pe-spk-inm-cptconsolidation-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4010",
        "nextJobs": "PBILCP4011",
        "prevJobs": "PBILCP4009",
        "jobExec": "pbil-pe-spk-inm-cmpcore-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4011",
        "nextJobs": "PBILCP4012",
        "prevJobs": "PBILCP4010",
        "jobExec": "pbil-pe-spk-inm-adjustmentstcomsales-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4012",
        "nextJobs": "PBILCP4013",
        "prevJobs": "PBILCP4011",
        "jobExec": "pbil-pe-spk-inm-adjustmentstcomsales-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4013",
        "nextJobs": "PBILCP4014, PBILCP4038",
        "prevJobs": "PBILCP4012",
        "jobExec": "pbil-pe-spk-inm-cmpadditionalothers-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4014",
        "nextJobs": "PBILCP4015",
        "prevJobs": "PBILCP4013",
        "jobExec": "pbil-pe-spk-inm-monthlyadjustmentsbalances-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4015",
        "nextJobs": "PBILCP4016, PBILCP4017, PBILCP4018",
        "prevJobs": "PBILCP4014",
        "jobExec": "pbil-pe-spk-inm-cmpproductivity-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4016",
        "nextJobs": "PBILCP4019",
        "prevJobs": "PBILCP4015",
        "jobExec": "pbil-pe-spk-inm-dgtsalesfamily-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4017",
        "nextJobs": "PBILCP4019",
        "prevJobs": "PBILCP4015",
        "jobExec": "pbil-pe-spk-inm-dgtsalesfamily-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4018",
        "nextJobs": "PBILCP4019",
        "prevJobs": "PBILCP4015",
        "jobExec": "pbil-pe-spk-inm-dgtsalesfamily-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4019",
        "nextJobs": "PBILCP4037, PBILCP4031",
        "prevJobs": "PBILCP4016, PBILCP4017, PBILCP4018",
        "jobExec": "pbil-pe-spk-inm-dgtsalesconsolidation-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4023",
        "nextJobs": "PBILCP4024, PBILCP4027",
        "prevJobs": "PBILCP4037",
        "jobExec": "pbil-pe-spk-inm-availagregatebase-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4024",
        "nextJobs": "PBILCP4025, PBILCP4026",
        "prevJobs": "PBILCP4023",
        "jobExec": "pbil-pe-spk-inm-availintramis-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4027",
        "nextJobs": "PBILCP4028, PBILCP4029, PBILCP4030",
        "prevJobs": "PBILCP4023",
        "jobExec": "pbil-pe-spk-inm-availhistbillingserie-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4031",
        "nextJobs": "PBILCP4032, PBILCP4033, PBILCP4034, PBILCP4035",
        "prevJobs": "PBILCP4037, PBILCP4019",
        "jobExec": "pbil-pe-spk-inm-availproductivityholding-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4047",
        "nextJobs": "PBILCP4048",
        "prevJobs": "PBILCP4039",
        "jobExec": "pbil-pe-spk-inm-cptexternalmovement-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4040",
        "nextJobs": "PBILCP4048",
        "prevJobs": "PBILCP4039",
        "jobExec": "pbil-pe-spk-inm-cptsalescancellations-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4041",
        "nextJobs": "PBILCP4048",
        "prevJobs": "PBILCP4039",
        "jobExec": "pbil-pe-spk-inm-cptcardsmovement-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4042",
        "nextJobs": "PBILCP4048",
        "prevJobs": "PBILCP4039",
        "jobExec": "pbil-pe-spk-inm-cptstocks-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4043",
        "nextJobs": "PBILCP4048",
        "prevJobs": "PBILCP4039",
        "jobExec": "pbil-pe-spk-inm-cptcards-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4044",
        "nextJobs": "PBILCP4048",
        "prevJobs": "PBILCP4039",
        "jobExec": "pbil-pe-spk-inm-cptinvoices-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4045",
        "nextJobs": "PBILCP4048",
        "prevJobs": "PBILCP4039",
        "jobExec": "pbil-pe-spk-inm-cptmutualfunds-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4046",
        "nextJobs": "PBILCP4048",
        "prevJobs": "PBILCP4039",
        "jobExec": "pbil-pe-spk-inm-cptproductsmovement-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4048",
        "nextJobs": "PBILCP4049",
        "prevJobs": "PBILCP4047, PBILCP4040, PBILCP4041, PBILCP4042, PBILCP4043, PBILCP4044, PBILCP4045, PBILCP4046",
        "jobExec": "pbil-pe-spk-inm-cptconsolidation-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4049",
        "nextJobs": "PBILCP4050",
        "prevJobs": "PBILCP4048",
        "jobExec": "pbil-pe-spk-inm-cmpcore-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4050",
        "nextJobs": "PBILCP4051",
        "prevJobs": "PBILCP4049",
        "jobExec": "pbil-pe-spk-inm-adjustmentstcomsales-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4051",
        "nextJobs": "PBILCP4052",
        "prevJobs": "PBILCP4050",
        "jobExec": "pbil-pe-spk-inm-adjustmentstcomsales-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4052",
        "nextJobs": "PBILCP4053, PBILCP4059",
        "prevJobs": "PBILCP4051",
        "jobExec": "pbil-pe-spk-inm-cmpadditionalothers-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4053",
        "nextJobs": "PBILCP4054",
        "prevJobs": "PBILCP4052",
        "jobExec": "pbil-pe-spk-inm-monthlyadjustmentsbalances-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4054",
        "nextJobs": "PBILCP4055, PBILCP4056, PBILCP4057",
        "prevJobs": "PBILCP4053",
        "jobExec": "pbil-pe-spk-inm-cmpproductivity-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4055",
        "nextJobs": "PBILCP4058",
        "prevJobs": "PBILCP4054",
        "jobExec": "pbil-pe-spk-inm-dgtsalesfamily-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4056",
        "nextJobs": "PBILCP4058",
        "prevJobs": "PBILCP4054",
        "jobExec": "pbil-pe-spk-inm-dgtsalesfamily-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4057",
        "nextJobs": "PBILCP4058",
        "prevJobs": "PBILCP4054",
        "jobExec": "pbil-pe-spk-inm-dgtsalesfamily-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4058",
        "nextJobs": "PBILCP4061, PBILCP4060, PBILCP4069, PBILCP4110",
        "prevJobs": "PBILCP4055, PBILCP4056, PBILCP4057",
        "jobExec": "pbil-pe-spk-inm-dgtsalesconsolidation-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4061",
        "nextJobs": "PBILCP4062, PBILCP4065",
        "prevJobs": "PBILCP4058",
        "jobExec": "pbil-pe-spk-inm-availagregatebase-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4062",
        "nextJobs": "PBILCP4063, PBILCP4064",
        "prevJobs": "PBILCP4061",
        "jobExec": "pbil-pe-spk-inm-availintramis-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4065",
        "nextJobs": "PBILCP4066, PBILCP4067, PBILCP4068",
        "prevJobs": "PBILCP4061",
        "jobExec": "pbil-pe-spk-inm-availhistbillingserie-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4069",
        "nextJobs": "PBILCP4070, PBILCP4071, PBILCP4072, PBILCP4073",
        "prevJobs": "PBILCP4058",
        "jobExec": "pbil-pe-spk-inm-availproductivityholding-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4074",
        "nextJobs": "PBILCP4075, PBILCP4076, PBILCP4077, PBILCP4078, PBILCP4079, PBILCP4080, PBILCP4081, PBILCP4082",
        "prevJobs": "#N/A",
        "jobExec": "pbil-pe-spk-inm-inventorymaster-01",
        "isBase": true,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4082",
        "nextJobs": "PBILCP4083",
        "prevJobs": "PBILCP4074",
        "jobExec": "pbil-pe-spk-inm-cptexternalmovement-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4075",
        "nextJobs": "PBILCP4083",
        "prevJobs": "PBILCP4074",
        "jobExec": "pbil-pe-spk-inm-cptsalescancellations-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4076",
        "nextJobs": "PBILCP4083",
        "prevJobs": "PBILCP4074",
        "jobExec": "pbil-pe-spk-inm-cptcardsmovement-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4077",
        "nextJobs": "PBILCP4083",
        "prevJobs": "PBILCP4074",
        "jobExec": "pbil-pe-spk-inm-cptstocks-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4078",
        "nextJobs": "PBILCP4083",
        "prevJobs": "PBILCP4074",
        "jobExec": "pbil-pe-spk-inm-cptcards-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4079",
        "nextJobs": "PBILCP4083",
        "prevJobs": "PBILCP4074",
        "jobExec": "pbil-pe-spk-inm-cptinvoices-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4080",
        "nextJobs": "PBILCP4083",
        "prevJobs": "PBILCP4074",
        "jobExec": "pbil-pe-spk-inm-cptmutualfunds-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4081",
        "nextJobs": "PBILCP4083",
        "prevJobs": "PBILCP4074",
        "jobExec": "pbil-pe-spk-inm-cptproductsmovement-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4083",
        "nextJobs": "PBILCP4084",
        "prevJobs": "PBILCP4082, PBILCP4075, PBILCP4076, PBILCP4077, PBILCP4078, PBILCP4079, PBILCP4080, PBILCP4081",
        "jobExec": "pbil-pe-spk-inm-cptconsolidation-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4084",
        "nextJobs": "PBILCP4085",
        "prevJobs": "PBILCP4083",
        "jobExec": "pbil-pe-spk-inm-cmpcore-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4085",
        "nextJobs": "PBILCP4086",
        "prevJobs": "PBILCP4084",
        "jobExec": "pbil-pe-spk-inm-adjustmentstcomsales-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4086",
        "nextJobs": "PBILCP4087",
        "prevJobs": "PBILCP4085",
        "jobExec": "pbil-pe-spk-inm-adjustmentstcomsales-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4087",
        "nextJobs": "PBILCP4088, PBILCP4094",
        "prevJobs": "PBILCP4086",
        "jobExec": "pbil-pe-spk-inm-cmpadditionalothers-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4088",
        "nextJobs": "PBILCP4089",
        "prevJobs": "PBILCP4087",
        "jobExec": "pbil-pe-spk-inm-monthlyadjustmentsbalances-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4089",
        "nextJobs": "PBILCP4090, PBILCP4091, PBILCP4092",
        "prevJobs": "PBILCP4088",
        "jobExec": "pbil-pe-spk-inm-cmpproductivity-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4090",
        "nextJobs": "PBILCP4093",
        "prevJobs": "PBILCP4089",
        "jobExec": "pbil-pe-spk-inm-dgtsalesfamily-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4091",
        "nextJobs": "PBILCP4093",
        "prevJobs": "PBILCP4089",
        "jobExec": "pbil-pe-spk-inm-dgtsalesfamily-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4092",
        "nextJobs": "PBILCP4093",
        "prevJobs": "PBILCP4089",
        "jobExec": "pbil-pe-spk-inm-dgtsalesfamily-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4093",
        "nextJobs": "PBILCP4096, PBILCP4095, PBILCP4104, PBILCP4109",
        "prevJobs": "PBILCP4090, PBILCP4091, PBILCP4092",
        "jobExec": "pbil-pe-spk-inm-dgtsalesconsolidation-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4096",
        "nextJobs": "PBILCP4097, PBILCP4100",
        "prevJobs": "PBILCP4093",
        "jobExec": "pbil-pe-spk-inm-availagregatebase-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4097",
        "nextJobs": "PBILCP4098, PBILCP4099",
        "prevJobs": "PBILCP4096",
        "jobExec": "pbil-pe-spk-inm-availintramis-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4100",
        "nextJobs": "PBILCP4101, PBILCP4102, PBILCP4103",
        "prevJobs": "PBILCP4096",
        "jobExec": "pbil-pe-spk-inm-availhistbillingserie-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4104",
        "nextJobs": "PBILCP4105, PBILCP4106, PBILCP4107, PBILCP4108",
        "prevJobs": "PBILCP4093",
        "jobExec": "pbil-pe-spk-inm-availproductivityholding-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4109",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4093",
        "jobExec": "pbil-pe-spk-inm-closeanalyticalprocess-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PBILCP4110",
        "nextJobs": "#N/A",
        "prevJobs": "PBILCP4058",
        "jobExec": "pbil-pe-spk-inm-closeanalyticalprocess-01",
        "isBase": false,
        "path": "./xmls/Local/PBIL/CR-PEBILMEN-T02.xml"
      },
      {
        "job": "PDCOCP4006",
        "nextJobs": "PDCOCP4007",
        "prevJobs": "PDCOTP4002",
        "jobExec": "pdco-pdco-customerinformation-address-contactability-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4025",
        "nextJobs": "PDCOPP4027",
        "prevJobs": "PDCOCP4026",
        "jobExec": "pdco-pdco-proactive-model-inter-var-avro-custom",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4027",
        "nextJobs": "PDCOCP4028",
        "prevJobs": "PDCOPP4036",
        "jobExec": "pdco-pdco-risk-rcc-balance-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4029",
        "nextJobs": "PDCOCP4030",
        "prevJobs": "PDCOPP4036",
        "jobExec": "pdco-pdco-risk-rcc-customers-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4037",
        "nextJobs": "PDCOCP4038",
        "prevJobs": "PDCOTP4001",
        "jobExec": "pdco-pdco-risk-top-15m-companies-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4039",
        "nextJobs": "PDCOCP4040",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-cust-segment-tcom-monthly-avro",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4041",
        "nextJobs": "PDCOCP4042",
        "prevJobs": "PDCOCP4250",
        "jobExec": "pdco-pdco-risk-income-estimator-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4043",
        "nextJobs": "PDCOCP4044",
        "prevJobs": "PDCOTP4038",
        "jobExec": "pdco-pdco-risk-over-indebtedness-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4049",
        "nextJobs": "PDCOCP4050",
        "prevJobs": "PDCOPP4002",
        "jobExec": "pdco-pdco-risk-scoring-customer-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4051",
        "nextJobs": "PDCOCP4052",
        "prevJobs": "PDCOPP4003",
        "jobExec": "pdco-pdco-risk-scoring-exercise-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4053",
        "nextJobs": "PDCOCP4054",
        "prevJobs": "PDCOPP4004",
        "jobExec": "pdco-pdco-risk-scoring-result-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4011",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4058",
        "jobExec": "pdco-pdco-customerinformation-card-propensity-mdl-score-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4019",
        "nextJobs": "PCRTCP4006, PCRTCP4004, PCRTCP4007, PCRTCP4012, PCRTCP4008",
        "prevJobs": "PDCOCP4056, PDCOCP4005",
        "jobExec": "pdco-pdco-retail-business-banking-model-matrix-ic-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4007",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4006",
        "jobExec": "pdco-pdco-customerinformation-address-contactability-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4028",
        "nextJobs": "PDCOCP4031, PREICP4001, PDCOCP4005",
        "prevJobs": "PDCOCP4027",
        "jobExec": "pdco-pdco-risk-rcc-balance-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4038",
        "nextJobs": "PDCOCP4055",
        "prevJobs": "PDCOCP4037",
        "jobExec": "pdco-pdco-risk-top-15m-companies-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4040",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4039",
        "jobExec": "pdco-pdco-customerinformation-cust-segment-tcom-monthly-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4042",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4041",
        "jobExec": "pdco-pdco-risk-income-estimator-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4044",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4043",
        "jobExec": "pdco-pe-spk-inm-overindebtedness-01",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4050",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4049",
        "jobExec": "pdco-pdco-risk-scoring-customer-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4052",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4051",
        "jobExec": "pdco-pdco-risk-scoring-exercise-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4054",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4053",
        "jobExec": "pdco-pdco-risk-scoring-result-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4033",
        "nextJobs": "PDCOCP4055, PBTQCP4001, PCRTCP4012",
        "prevJobs": "PDCOCP4185, PDCOCP4187",
        "jobExec": "pdco-pdco-risk-risk-buro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4030",
        "nextJobs": "PDCOCP4014",
        "prevJobs": "PDCOCP4029",
        "jobExec": "pdco-pdco-risk-rcc-customers-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4055",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4038, PDCOCP4033, PDCOCP4034, PDCOCP4048",
        "jobExec": "pdco-pdco-customerinformation-issuers-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4056",
        "nextJobs": "PDCOCP4032, PDCOCP4019, PCRTCP4001, PCRTCP4008, PCRTCP4009, PCRTCP4013, PCRTCP4018, PCRTCP4022",
        "prevJobs": "PDCOCP4014, PDCOCP4031",
        "jobExec": "pdco-pdco-customerinformation-people-board-aggregate-men-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4005",
        "nextJobs": "PDCOCP4019, PCRTCP4022",
        "prevJobs": "PDCOCP4028",
        "jobExec": "pdco-pdco-risk-account-sbs-aggregate-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4014",
        "nextJobs": "PDCOCP4056",
        "prevJobs": "PDCOCP4030",
        "jobExec": "pdco-pdco-risk-code-sbs-aggregate-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4026",
        "nextJobs": "PDCOCP4025, PBTQCP4I10",
        "prevJobs": "PDCOCP4048, PDCOCP4076",
        "jobExec": "pdco-pdco-risk-proactive-model-inter-var-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4031",
        "nextJobs": "PDCOCP4056",
        "prevJobs": "PDCOCP4028",
        "jobExec": "pdco-pdco-risk-rcc-default-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4032",
        "nextJobs": "PDCOCP4231, PBTQCP4I09",
        "prevJobs": "PDCOCP4056",
        "jobExec": "pdco-pdco-approve-offers-var-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4034",
        "nextJobs": "PDCOCP4055",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-rating-parquet",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4048",
        "nextJobs": "PDCOCP4055, PDCOCP4026",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-payroll-bdph-mov-parquet",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4058",
        "nextJobs": "PDCOCP4011",
        "prevJobs": "PDCOCP4235",
        "jobExec": "pdco-pdco-matrix-prop-tc-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4001",
        "nextJobs": "PDCOCP4037",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0015.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4002",
        "nextJobs": "PDCOCP4049",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4003",
        "nextJobs": "PDCOCP4051",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4004",
        "nextJobs": "PDCOCP4053",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4002",
        "nextJobs": "PDCOCP4006",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0016.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOWP4001",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "#N/A",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4071",
        "nextJobs": "PDCOCP4072",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-card-lock-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4072",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4071",
        "jobExec": "pdco-pdco-retailbusinessbanking-card-lock-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4069",
        "nextJobs": "PDCOCP4070",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-descriptive-locks-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4070",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4069",
        "jobExec": "pdco-pdco-retailbusinessbanking-descriptive-locks-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4073",
        "nextJobs": "PDCOCP4074",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-contract-rates-di-monthly-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4074",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4073",
        "jobExec": "pdco-pdco-finance-contract-rates-di-monthly-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4061",
        "nextJobs": "PDCOCP4062",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-cross-channel-catalog-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4062",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4061",
        "jobExec": "pdco-pdco-cross-channel-catalog-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4006",
        "nextJobs": "PDCOCP4079",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4079",
        "nextJobs": "PDCOCP4080",
        "prevJobs": "PDCOPP4006",
        "jobExec": "pdco-pdco-risk-mstr-classified-accounts-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4080",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4079",
        "jobExec": "pdco-pdco-risk-mstr-classified-accounts-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4005",
        "nextJobs": "PDCOCP4117",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4117",
        "nextJobs": "PDCOCP4076",
        "prevJobs": "PDCOPP4005",
        "jobExec": "pdco-pdco-risk-monthly-transactional-rcd-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4076",
        "nextJobs": "PDCOCP4026",
        "prevJobs": "PDCOCP4117",
        "jobExec": "pdco-pdco-risk-monthly-transactional-rcd-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4011",
        "nextJobs": "PDCOCP4081",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0026.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4081",
        "nextJobs": "PDCOCP4082",
        "prevJobs": "PDCOTP4011",
        "jobExec": "pdco-pdco-finance-monthly-turnover-only-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4082",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4081",
        "jobExec": "pdco-pdco-finance-monthly-turnover-only-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4012",
        "nextJobs": "PDCOCP4075",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0028.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4075",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOTP4012",
        "jobExec": "pdco-pdco-customerinformation-promoter-customers-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4006",
        "nextJobs": "PDCOCP4063",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0043.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4063",
        "nextJobs": "PDCOCP4064",
        "prevJobs": "PDCOTP4006",
        "jobExec": "pdco-pdco-customerinformation-customer-kpi-digital-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4064",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4063",
        "jobExec": "pdco-pdco-customerinformation-customer-kpi-digital-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4007",
        "nextJobs": "PDCOCP4065",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0030.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4065",
        "nextJobs": "PDCOCP4066",
        "prevJobs": "PDCOTP4007",
        "jobExec": "pdco-pdco-customerinformation-fuvex-high-base-monthly-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4066",
        "nextJobs": "PBILCP4001",
        "prevJobs": "PDCOCP4065",
        "jobExec": "pdco-pdco-customerinformation-fuvex-high-base-monthly-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4008",
        "nextJobs": "PDCOCP4067",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0027.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4067",
        "nextJobs": "PDCOCP4068",
        "prevJobs": "PDCOTP4008",
        "jobExec": "pdco-pdco-customerinformation-linking-people-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4068",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4067",
        "jobExec": "pdco-pdco-customerinformation-linking-people-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4009",
        "nextJobs": "PDCOCP4077",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0054.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4077",
        "nextJobs": "PDCOCP4078",
        "prevJobs": "PDCOTP4009",
        "jobExec": "pdco-pdco-customerinformation-ciiu-relocations-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4078",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4077",
        "jobExec": "pdco-pdco-customerinformation-ciiu-relocations-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4010",
        "nextJobs": "PDCOCP4083",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0056.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4083",
        "nextJobs": "PDCOCP4084",
        "prevJobs": "PDCOTP4010",
        "jobExec": "pdco-pdco-finance-asset-allocation-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4084",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4083",
        "jobExec": "pdco-pdco-finance-asset-allocation-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4009",
        "nextJobs": "PDCOCP4087",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4087",
        "nextJobs": "PDCOCP4088",
        "prevJobs": "PDCOPP4009",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-invty-products-mthly-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4088",
        "nextJobs": "PBILCP4074",
        "prevJobs": "PDCOCP4087",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4010",
        "nextJobs": "PDCOCP4089",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4089",
        "nextJobs": "PDCOCP4090",
        "prevJobs": "PDCOPP4010",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-invty-products-mthly-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4090",
        "nextJobs": "PBILCP4074",
        "prevJobs": "PDCOCP4089",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4011",
        "nextJobs": "PDCOCP4091",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4091",
        "nextJobs": "PDCOCP4092",
        "prevJobs": "PDCOPP4011",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-invty-products-mthly-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4092",
        "nextJobs": "PBILCP4074",
        "prevJobs": "PDCOCP4091",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4012",
        "nextJobs": "PDCOCP4093",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4093",
        "nextJobs": "PDCOCP4094",
        "prevJobs": "PDCOPP4012",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-invty-products-mthly-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4094",
        "nextJobs": "PBILCP4074",
        "prevJobs": "PDCOCP4093",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4013",
        "nextJobs": "PDCOCP4095",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4095",
        "nextJobs": "PDCOCP4096",
        "prevJobs": "PDCOPP4013",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-invty-products-mthly-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4096",
        "nextJobs": "PBILCP4074",
        "prevJobs": "PDCOCP4095",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4014",
        "nextJobs": "PDCOCP4097",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4097",
        "nextJobs": "PDCOCP4098",
        "prevJobs": "PDCOPP4014",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-invty-products-mthly-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4098",
        "nextJobs": "PBILCP4074",
        "prevJobs": "PDCOCP4097",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4015",
        "nextJobs": "PDCOCP4099",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4099",
        "nextJobs": "PDCOCP4100",
        "prevJobs": "PDCOPP4015",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-invty-products-mthly-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4100",
        "nextJobs": "PBILCP4074",
        "prevJobs": "PDCOCP4099",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4016",
        "nextJobs": "PDCOCP4101",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4101",
        "nextJobs": "PDCOCP4102",
        "prevJobs": "PDCOPP4016",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-invty-products-mthly-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4102",
        "nextJobs": "PBILCP4074",
        "prevJobs": "PDCOCP4101",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4017",
        "nextJobs": "PDCOCP4103",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4103",
        "nextJobs": "PDCOCP4104",
        "prevJobs": "PDCOPP4017",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-invty-products-mthly-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4104",
        "nextJobs": "PBILCP4074",
        "prevJobs": "PDCOCP4103",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4018",
        "nextJobs": "PDCOCP4105",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4105",
        "nextJobs": "PDCOCP4106",
        "prevJobs": "PDCOPP4018",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-invty-products-mthly-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4106",
        "nextJobs": "PBILCP4074",
        "prevJobs": "PDCOCP4105",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4019",
        "nextJobs": "PDCOCP4107",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4107",
        "nextJobs": "PDCOCP4108",
        "prevJobs": "PDCOPP4019",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-invty-products-mthly-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4108",
        "nextJobs": "PBILCP4074",
        "prevJobs": "PDCOCP4107",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4020",
        "nextJobs": "PDCOCP4109",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4109",
        "nextJobs": "PDCOCP4110",
        "prevJobs": "PDCOPP4020",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-invty-products-mthly-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4110",
        "nextJobs": "PBILCP4074",
        "prevJobs": "PDCOCP4109",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4021",
        "nextJobs": "PDCOCP4111",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4111",
        "nextJobs": "PDCOCP4112",
        "prevJobs": "PDCOPP4021",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-invty-products-mthly-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4112",
        "nextJobs": "PBILCP4074",
        "prevJobs": "PDCOCP4111",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4022",
        "nextJobs": "PDCOCP4113",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4113",
        "nextJobs": "PDCOCP4114",
        "prevJobs": "PDCOPP4022",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-invty-products-mthly-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4114",
        "nextJobs": "PBILCP4074",
        "prevJobs": "PDCOCP4113",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4023",
        "nextJobs": "PDCOCP4115",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4115",
        "nextJobs": "PDCOCP4116",
        "prevJobs": "PDCOPP4023",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-invty-products-mthly-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4116",
        "nextJobs": "PBILCP4074",
        "prevJobs": "PDCOCP4115",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4024",
        "nextJobs": "PDCOCP4118",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4118",
        "nextJobs": "PDCOCP4119",
        "prevJobs": "PDCOPP4024",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-invty-products-mthly-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4119",
        "nextJobs": "PBILCP4074",
        "prevJobs": "PDCOCP4118",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4014",
        "nextJobs": "PDCOCP4120",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0058.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4120",
        "nextJobs": "PDCOCP4121",
        "prevJobs": "PDCOTP4014",
        "jobExec": "pdco-pdco-finance-provision-holding-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4121",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4120",
        "jobExec": "pdco-pdco-finance-provision-holding-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4025",
        "nextJobs": "PDCOCP4142",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4142",
        "nextJobs": "PDCOCP4143",
        "prevJobs": "PDCOPP4025",
        "jobExec": "pdco-pdco-finance-adjust-rates-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4143",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4142",
        "jobExec": "pdco-pdco-finance-adjust-rates-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4021",
        "nextJobs": "PDCOCP4150",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0065.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4026",
        "nextJobs": "PDCOCP4160",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0078.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4160",
        "nextJobs": "PDCOCP4161",
        "prevJobs": "PDCOTP4026",
        "jobExec": "pdco-pdco-risk-provisions-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4161",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4160",
        "jobExec": "pdco-pdco-risk-provisions-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4162",
        "nextJobs": "PDCOCP4163",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-risk-scoring-area-12-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4163",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4162",
        "jobExec": "pdco-pdco-risk-scoring-area-12-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4164",
        "nextJobs": "PDCOCP4165",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-risk-scoring-area-12-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4165",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4164",
        "jobExec": "pdco-pdco-risk-scoring-area-12-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4166",
        "nextJobs": "PDCOCP4167",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-risk-scoring-area-12-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4167",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4166",
        "jobExec": "pdco-pdco-risk-scoring-area-12-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4184",
        "nextJobs": "PDCOCP4185",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-risk-natural-people-bureau-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4185",
        "nextJobs": "PDCOCP4033",
        "prevJobs": "PDCOCP4184",
        "jobExec": "pdco-pdco-risk-natural-people-bureau-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4186",
        "nextJobs": "PDCOCP4187",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-risk-legal-people-bureau-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4187",
        "nextJobs": "PDCOCP4033",
        "prevJobs": "PDCOCP4186",
        "jobExec": "pdco-pdco-risk-legal-people-bureau-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4008",
        "nextJobs": "PIDSCP0C05, PDCOCP4085",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4085",
        "nextJobs": "PDCOCP4086",
        "prevJobs": "PDCOPP4008",
        "jobExec": "pdco-pdco-finance-intragrou-intercom-client-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4086",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4085",
        "jobExec": "pdco-pdco-finance-intragrou-intercom-client-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4150",
        "nextJobs": "PDCOCP4151",
        "prevJobs": "PDCOTP4021",
        "jobExec": "pdco-pdco-finance-fuvex-payment-fee-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4151",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4150",
        "jobExec": "pdco-pdco-finance-fuvex-payment-fee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4022",
        "nextJobs": "PDCOCP4152",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0066.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4152",
        "nextJobs": "PDCOCP4153",
        "prevJobs": "PDCOTP4022",
        "jobExec": "pdco-pdco-finance-fuvex-loan-card-fee-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4153",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4152",
        "jobExec": "pdco-pdco-finance-fuvex-loan-card-fee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4023",
        "nextJobs": "PDCOCP4154",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0067.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4154",
        "nextJobs": "PDCOCP4155",
        "prevJobs": "PDCOTP4023",
        "jobExec": "pdco-pdco-finance-fuvex-portfolio-fee-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4155",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4154",
        "jobExec": "pdco-pdco-finance-fuvex-portfolio-fee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4024",
        "nextJobs": "PDCOCP4156",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0076.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4156",
        "nextJobs": "PDCOCP4157",
        "prevJobs": "PDCOTP4024",
        "jobExec": "pdco-pdco-risk-scale-model-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4157",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4156",
        "jobExec": "pdco-pdco-risk-scale-model-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4025",
        "nextJobs": "PDCOCP4158",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0077.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4158",
        "nextJobs": "PDCOCP4159",
        "prevJobs": "PDCOTP4025",
        "jobExec": "pdco-pdco-finance-customer-payment-base-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4159",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4158",
        "jobExec": "pdco-pdco-finance-customer-payment-base-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4168",
        "nextJobs": "PDCOCP4169",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-risk-contract-master-ifrs9-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4169",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4168",
        "jobExec": "pdco-pdco-risk-contract-master-ifrs9-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4027",
        "nextJobs": "PDCOCP4170",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0081.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4170",
        "nextJobs": "PDCOCP4171",
        "prevJobs": "PDCOTP4027",
        "jobExec": "pdco-pdco-finance-rof-global-sales-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4171",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4170",
        "jobExec": "pdco-pdco-finance-rof-global-sales-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4028",
        "nextJobs": "PDCOCP4172",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0080.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4172",
        "nextJobs": "PDCOCP4173",
        "prevJobs": "PDCOTP4028",
        "jobExec": "pdco-pdco-finance-rof-networks-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4173",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4172",
        "jobExec": "pdco-pdco-finance-rof-networks-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4026",
        "nextJobs": "PDCOCP4182",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4182",
        "nextJobs": "PDCOCP4183",
        "prevJobs": "PDCOPP4026",
        "jobExec": "pdco-pdco-retailbusinessbanking-corp-group-cust-master-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4183",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4182",
        "jobExec": "pdco-pdco-retailbusinessbanking-corp-group-cust-master-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4190",
        "nextJobs": "PDCOCP4191",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-instlmt-plan-extl-comm-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4191",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4190",
        "jobExec": "pdco-pdco-finance-instlmt-plan-extl-comm-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4192",
        "nextJobs": "PDCOCP4193",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-instlmt-plan-loan-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4193",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4192",
        "jobExec": "pdco-pdco-finance-instlmt-plan-loan-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4194",
        "nextJobs": "PDCOCP4195",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-instlmt-plan-card-risk-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4195",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4194",
        "jobExec": "pdco-pdco-finance-instlmt-plan-card-risk-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4196",
        "nextJobs": "PDCOCP4197",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-instlmt-plan-leasing-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4197",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4196",
        "jobExec": "pdco-pdco-finance-instlmt-plan-leasing-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4198",
        "nextJobs": "PDCOCP4199",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-instlmt-plan-term-account-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4199",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4198",
        "jobExec": "pdco-pdco-finance-instlmt-plan-term-account-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4200",
        "nextJobs": "PDCOCP4201",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-risk-scoring-area-16-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4201",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4200",
        "jobExec": "pdco-pdco-risk-scoring-area-16-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4204",
        "nextJobs": "PDCOCP4205",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-risk-scoring-area-16-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4203",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4202",
        "jobExec": "pdco-pdco-risk-scoring-area-16-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4202",
        "nextJobs": "PDCOCP4203",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-risk-scoring-area-16-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4205",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4204",
        "jobExec": "pdco-pdco-risk-scoring-area-16-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4206",
        "nextJobs": "PDCOCP4207",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-risk-scoring-area-14-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4207",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4206",
        "jobExec": "pdco-pdco-risk-scoring-area-14-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4210",
        "nextJobs": "PDCOCP4211",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-risk-scoring-area-14-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4211",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4210",
        "jobExec": "pdco-pdco-risk-scoring-area-14-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4208",
        "nextJobs": "PDCOCP4209",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-risk-scoring-area-14-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4209",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4208",
        "jobExec": "pdco-pdco-risk-scoring-area-14-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4223",
        "nextJobs": "PDCOCP4224",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-risk-scoring-area-11-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4224",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4223",
        "jobExec": "pdco-pdco-risk-scoring-area-11-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4225",
        "nextJobs": "PDCOCP4226",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-risk-scoring-area-11-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4226",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4225",
        "jobExec": "pdco-pdco-risk-scoring-area-11-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4227",
        "nextJobs": "PDCOCP4228",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-risk-scoring-area-11-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4228",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4227",
        "jobExec": "pdco-pdco-risk-scoring-area-11-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4027",
        "nextJobs": "PDCOTP4031",
        "prevJobs": "PDCOCP4025",
        "jobExec": "pdco-pdco-hadoop-operations-hdfs",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4031",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOPP4027",
        "jobExec": "TX_PDCOCD0006.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOWP4002",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "#N/A",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4229",
        "nextJobs": "PDCOCP4230",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-proactive-model-result-avro-pwcv-custom",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4230",
        "nextJobs": "PDCOPP4029, PMORCP4I03, PMORCP4I04",
        "prevJobs": "PDCOCP4229",
        "jobExec": "pdco-pdco-proactive-model-result-pwcv-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4029",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4230",
        "jobExec": "pdco-pdco-hadoop-operations-hdfs",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4231",
        "nextJobs": "PDCOPP4030",
        "prevJobs": "PDCOCP4032, PDCOPP4036",
        "jobExec": "pdco-pdco-risk-var-approved-offers-custom",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4030",
        "nextJobs": "PDCOTP4032",
        "prevJobs": "PDCOCP4231",
        "jobExec": "pdco-pdco-hadoop-operations-hdfs",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4032",
        "nextJobs": "PDCOPP4034, PDCOCP4236, PDCOCP4233",
        "prevJobs": "PDCOPP4030",
        "jobExec": "TX_PDCOCD0007.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOWP4003",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "#N/A",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4236",
        "nextJobs": "PDCOCP4232",
        "prevJobs": "PDCOTP4032",
        "jobExec": "pdco-pdco-risk-approve-offers-error-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4232",
        "nextJobs": "PDCOPP4032",
        "prevJobs": "PDCOCP4236",
        "jobExec": "pdco-pdco-risk-approve-offers-error-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4032",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4232",
        "jobExec": "pdco-pdco-hadoop-operations-hdfs",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOWP4004",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "#N/A",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4233",
        "nextJobs": "PDCOCP4234",
        "prevJobs": "PDCOTP4032",
        "jobExec": "pdco-pdco-risk-evaluation-result-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4234",
        "nextJobs": "PDCOCP4235, PCRTCP4I03, PCRTCP4020",
        "prevJobs": "PDCOCP4233",
        "jobExec": "pdco-pdco-risk-evaluation-result-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4235",
        "nextJobs": "PDCOPP4033, PDCOCP4058, PCRTCP4002, PCRTCP4003, PCRTCP4004, PCRTCP4005, PCRTCP4008, PCRTCP4012, PCRTCP4016, PSAGCP4001, PCRTCP4I04",
        "prevJobs": "PDCOCP4234",
        "jobExec": "pdco-pdco-risk-approve-offers-limits-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4033",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4235",
        "jobExec": "pdco-pdco-hadoop-operations-hdfs",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4034",
        "nextJobs": "PDCOPP4050",
        "prevJobs": "PDCOTP4032",
        "jobExec": "pdco-pdco-hadoop-operations-hdfs",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4035",
        "nextJobs": "PDCOPP4051",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-hadoop-operations-hdfs",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4033",
        "nextJobs": "PDCOCP4237",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0021.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4237",
        "nextJobs": "PDCOCP4238",
        "prevJobs": "PDCOTP4033",
        "jobExec": "pdco-pdco-retailbusinessbanking-cafae-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4238",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4237",
        "jobExec": "pdco-pdco-retailbusinessbanking-cafae-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4034",
        "nextJobs": "PDCOCP4239",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0019.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4239",
        "nextJobs": "PDCOCP4240",
        "prevJobs": "PDCOTP4034",
        "jobExec": "pdco-pdco-customerinformation-extension-customer-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4240",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4239",
        "jobExec": "pdco-pdco-customerinformation-extension-customer-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4035",
        "nextJobs": "PDCOCP4241",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0018.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4241",
        "nextJobs": "PDCOCP4242",
        "prevJobs": "PDCOTP4035",
        "jobExec": "pdco-pdco-customerinformation-scoring-equifax-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4242",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4241",
        "jobExec": "pdco-pdco-customerinformation-scoring-equifax-parquet-dif",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4036",
        "nextJobs": "PDCOCP4027, PDCOCP4029, PDCOCP4231",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-hadoop-operations-hdfs",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4041",
        "nextJobs": "PDCOCP4251",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0044.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4251",
        "nextJobs": "PDCOCP4252",
        "prevJobs": "PDCOTP4041",
        "jobExec": "pdco-pe-krb-inr-feedbackfuvexp-01",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4252",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4251",
        "jobExec": "pdco-pe-krb-inm-feedbackfuvexp-01",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4037",
        "nextJobs": "PDCOCP4243",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0045.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4243",
        "nextJobs": "PDCOCP4244",
        "prevJobs": "PDCOTP4037",
        "jobExec": "pdco-pe-krb-inr-contactabilityp-01",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4244",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4243",
        "jobExec": "pdco-pe-spk-inm-contactability-01",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4250",
        "nextJobs": "PDCOCP4041",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0089.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4038",
        "nextJobs": "PDCOCP4043",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0087.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4039",
        "nextJobs": "PDCOCP4253",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0088.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4253",
        "nextJobs": "PDCOCP4254",
        "prevJobs": "PDCOTP4039",
        "jobExec": "pdco-pdco-customerinformation-non-contact-ic-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4254",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4253",
        "jobExec": "pdco-pdco-customerinformation-non-contact-ic-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOWP4005",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "#N/A",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4040",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0087.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4042",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0019.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4043",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0018.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4044",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0021.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4045",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0044.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4046",
        "nextJobs": "PDCOCP4245",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0090.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4245",
        "nextJobs": "PDCOCP4246",
        "prevJobs": "PDCOTP4046",
        "jobExec": "pdco-pdco-customerinformation-campaign-people-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4246",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4245",
        "jobExec": "pdco-pdco-customerinformation-campaign-people-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4047",
        "nextJobs": "PDCOCP4247",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0091.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4247",
        "nextJobs": "PDCOCP4248",
        "prevJobs": "PDCOTP4047",
        "jobExec": "pdco-pdco-customerinformation-addressed-campaign-model-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4248",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4247",
        "jobExec": "pdco-pdco-customerinformation-addressed-campaign-model-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOTP4048",
        "nextJobs": "PDCOCP4249",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0092.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4249",
        "nextJobs": "PDCOCP4260",
        "prevJobs": "PDCOTP4048",
        "jobExec": "pdco-pdco-customerinformation-addressed-campaign-master-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP4260",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP4249",
        "jobExec": "pdco-pdco-customerinformation-addressed-campaign-master-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4050",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOPP4034",
        "jobExec": "pdco-pdco-hadoop-operations-hdfs",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOPP4051",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOPP4035",
        "jobExec": "pdco-pdco-hadoop-operations-hdfs",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCOMEN-T02.xml"
      },
      {
        "job": "PDCOCP0T04",
        "nextJobs": "PICHCP0001",
        "prevJobs": "PDCOCP0C04",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A02",
        "nextJobs": "PDCOCP0P02",
        "prevJobs": "PDCOCP0D00",
        "jobExec": "pdco-pdco-cross-exception-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P02",
        "nextJobs": "PDCOCP0C02",
        "prevJobs": "PDCOCP0A02",
        "jobExec": "pdco-pdco-cross-exception-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T06",
        "nextJobs": "PICHCP0GAR",
        "prevJobs": "PDCOCP0C06",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T05",
        "nextJobs": "PICHCP0VIN",
        "prevJobs": "PDCOCP0C05",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T03",
        "nextJobs": "PICHCP0PAR",
        "prevJobs": "PDCOCP0C03",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C02",
        "nextJobs": "PDCOCP0T02",
        "prevJobs": "PDCOCP0P02",
        "jobExec": "pdco-pdco-cross-exception-csv",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A01",
        "nextJobs": "PDCOCP0P01",
        "prevJobs": "PDCOCP0D00",
        "jobExec": "pdco-pdco-cross-currency-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P01",
        "nextJobs": "PDCOCP0C01, PKMOLCP0P01",
        "prevJobs": "PDCOCP0A01",
        "jobExec": "pdco-pdco-cross-currency-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C01",
        "nextJobs": "PDCOCP0T01",
        "prevJobs": "PDCOCP0P01",
        "jobExec": "pdco-pdco-cross-currency-csv",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A03",
        "nextJobs": "PDCOCP0P03",
        "prevJobs": "PDCOCP0D01",
        "jobExec": "pdco-pdco-retailbusinessbanking-insurance-participant-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P03",
        "nextJobs": "PDCOCP0C03",
        "prevJobs": "PDCOCP0A03",
        "jobExec": "pdco-pdco-retailbusinessbanking-insurance-participant-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C03",
        "nextJobs": "PDCOCP0T03",
        "prevJobs": "PDCOCP0P03",
        "jobExec": "pdco-pdco-retailbusinessbanking-insurance-participant-csv",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A06",
        "nextJobs": "PDCOCP0P06",
        "prevJobs": "PDCOCP0D01",
        "jobExec": "pdco-pdco-retailbusinessbanking-insurance-coverage-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P06",
        "nextJobs": "PDCOCP0C06",
        "prevJobs": "PDCOCP0A06",
        "jobExec": "pdco-pdco-retailbusinessbanking-insurance-coverage-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C06",
        "nextJobs": "PDCOCP0T06",
        "prevJobs": "PDCOCP0P06",
        "jobExec": "pdco-pdco-retailbusinessbanking-insurance-coverage-csv",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A08",
        "nextJobs": "PDCOCP0P08",
        "prevJobs": "PDCOCP0D02",
        "jobExec": "pdco-pdco-retailbusinessbanking-loan-fees-rates-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P08",
        "nextJobs": "PDCOCP0C08",
        "prevJobs": "PDCOCP0A08",
        "jobExec": "pdco-pdco-retailbusinessbanking-loan-fees-rates-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C08",
        "nextJobs": "PDCOCP0T08",
        "prevJobs": "PDCOCP0P08",
        "jobExec": "pdco-pdco-retailbusinessbanking-loan-fees-rates-csv",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A09",
        "nextJobs": "PDCOCP0P09",
        "prevJobs": "PDCOCP0D02",
        "jobExec": "pdco-pdco-retailbusinessbanking-loan-codes-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P09",
        "nextJobs": "PDCOCP0C09",
        "prevJobs": "PDCOCP0A09",
        "jobExec": "pdco-pdco-retailbusinessbanking-loan-codes-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C09",
        "nextJobs": "PDCOCP0T09",
        "prevJobs": "PDCOCP0P09",
        "jobExec": "pdco-pdco-retailbusinessbanking-loan-codes-csv",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A10",
        "nextJobs": "PDCOCP0P10",
        "prevJobs": "PDCOCP0D02",
        "jobExec": "pdco-pdco-retailbusinessbanking-loan-prod-conditions-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P10",
        "nextJobs": "PDCOCP0C10",
        "prevJobs": "PDCOCP0A10",
        "jobExec": "pdco-pdco-retailbusinessbanking-loan-prod-conditions-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C10",
        "nextJobs": "PDCOCP0T10",
        "prevJobs": "PDCOCP0P10",
        "jobExec": "pdco-pdco-retailbusinessbanking-loan-prod-conditions-csv",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A00",
        "nextJobs": "PDCOCP0P00",
        "prevJobs": "PDCOCP0D00",
        "jobExec": "pdco-pdco-cross-festive-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P00",
        "nextJobs": "PDCOCP0C00",
        "prevJobs": "PDCOCP0A00",
        "jobExec": "pdco-pdco-cross-festive-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C00",
        "nextJobs": "PDCOCP0T00",
        "prevJobs": "PDCOCP0P00",
        "jobExec": "pdco-pdco-cross-festive-csv",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A04",
        "nextJobs": "PDCOCP0P04",
        "prevJobs": "PDCOCP0D01",
        "jobExec": "pdco-pdco-retailbusinessbanking-insurance-rate-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P04",
        "nextJobs": "PDCOCP0C04",
        "prevJobs": "PDCOCP0A04",
        "jobExec": "pdco-pdco-retailbusinessbanking-insurance-rate-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C04",
        "nextJobs": "PDCOCP0T04",
        "prevJobs": "PDCOCP0P04",
        "jobExec": "pdco-pdco-retailbusinessbanking-insurance-rate-csv",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A05",
        "nextJobs": "PDCOCP0P05",
        "prevJobs": "PDCOCP0D01",
        "jobExec": "pdco-pdco-retailbusinessbanking-insurance-linkage-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P05",
        "nextJobs": "PDCOCP0C05",
        "prevJobs": "PDCOCP0A05",
        "jobExec": "pdco-pdco-retailbusinessbanking-insurance-linkage-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C05",
        "nextJobs": "PDCOCP0T05",
        "prevJobs": "PDCOCP0P05",
        "jobExec": "pdco-pdco-retailbusinessbanking-insurance-linkage-csv",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A07",
        "nextJobs": "PDCOCP0P07",
        "prevJobs": "PDCOCP0D02",
        "jobExec": "pdco-pdco-retailbusinessbanking-loan-product-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P07",
        "nextJobs": "PDCOCP0C07",
        "prevJobs": "PDCOCP0A07",
        "jobExec": "pdco-pdco-retailbusinessbanking-loan-product-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C07",
        "nextJobs": "PDCOCP0T07",
        "prevJobs": "PDCOCP0P07",
        "jobExec": "pdco-pdco-retailbusinessbanking-loan-product-csv",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T07",
        "nextJobs": "PUGHCP0PRO",
        "prevJobs": "PDCOCP0C07",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T08",
        "nextJobs": "PUGHCP0LQS",
        "prevJobs": "PDCOCP0C08",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T09",
        "nextJobs": "PUGHCP0COD",
        "prevJobs": "PDCOCP0C09",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T10",
        "nextJobs": "PUGHCP0ADS",
        "prevJobs": "PDCOCP0C10",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T00",
        "nextJobs": "PTCHCP0020",
        "prevJobs": "PDCOCP0C00",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T01",
        "nextJobs": "PTCHCP0080",
        "prevJobs": "PDCOCP0C01",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T02",
        "nextJobs": "PTCHCP0022",
        "prevJobs": "PDCOCP0C02",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0D00",
        "nextJobs": "PDCOCP0A00, PDCOCP0A01, PDCOCP0A02",
        "prevJobs": "#N/A",
        "jobExec": "#N/A",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0D01",
        "nextJobs": "PDCOCP0A03, PDCOCP0A04, PDCOCP0A05, PDCOCP0A06",
        "prevJobs": "#N/A",
        "jobExec": "#N/A",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0D02",
        "nextJobs": "PDCOCP0A07, PDCOCP0A08, PDCOCP0A09, PDCOCP0A10",
        "prevJobs": "#N/A",
        "jobExec": "#N/A",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A11",
        "nextJobs": "PDCOCP0P11",
        "prevJobs": "PDCOCP0A12",
        "jobExec": "pdco-pdco-shipping-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P11",
        "nextJobs": "PDCOCP0C11, PDCOCP0C19",
        "prevJobs": "PDCOCP0A11",
        "jobExec": "pdco-pdco-shipping-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C11",
        "nextJobs": "PDCOCP0T11",
        "prevJobs": "PDCOCP0P11",
        "jobExec": "pdco-pdco-shipping-custom",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T11",
        "nextJobs": "PCOGCP0SHI",
        "prevJobs": "PDCOCP0C11",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A12",
        "nextJobs": "PDCOCP0P12, PDCOCP0A11",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-covenantcategory-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P12",
        "nextJobs": "PDCOCP0C12",
        "prevJobs": "PDCOCP0A12",
        "jobExec": "pdco-pdco-covenantcategory-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C12",
        "nextJobs": "PDCOCP0T12",
        "prevJobs": "PDCOCP0P12",
        "jobExec": "pdco-pdco-covenantcategory-custom",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T12",
        "nextJobs": "PSANCP0RUB",
        "prevJobs": "PDCOCP0C12",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A13",
        "nextJobs": "PDCOCP0P13, PKMOLCP0P10",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-covenant-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P13",
        "nextJobs": "PDCOCP0C13, PDCOCP0C15, PDCOCP0C16, PDCOCP0C17, PDCOCP0C18, PDCOCP0C19, PKPFMCP0P07",
        "prevJobs": "PDCOCP0A13",
        "jobExec": "pdco-pdco-covenant-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C13",
        "nextJobs": "PDCOCP0T13",
        "prevJobs": "PDCOCP0P13",
        "jobExec": "pdco-pdco-covenant-custom",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T13",
        "nextJobs": "PSANCP0CON",
        "prevJobs": "PDCOCP0C13",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A14",
        "nextJobs": "PDCOCP0P14",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-covenantextended-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P14",
        "nextJobs": "PDCOCP0C14",
        "prevJobs": "PDCOCP0A14",
        "jobExec": "pdco-pdco-covenantextended-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C14",
        "nextJobs": "PDCOCP0T14",
        "prevJobs": "PDCOCP0P14",
        "jobExec": "pdco-pdco-covenantextended-custom",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T14",
        "nextJobs": "PSANCP0CO2",
        "prevJobs": "PDCOCP0C14",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C15",
        "nextJobs": "PDCOCP0T15",
        "prevJobs": "PDCOCP0P13",
        "jobExec": "pdco-pdco-covenantaccount-custom",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T15",
        "nextJobs": "PSANCP0ACC",
        "prevJobs": "PDCOCP0C15",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C16",
        "nextJobs": "PDCOCP0T16",
        "prevJobs": "PDCOCP0P13",
        "jobExec": "pdco-pdco-covenantemail-custom",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T16",
        "nextJobs": "PSANCP0EML",
        "prevJobs": "PDCOCP0C16",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C17",
        "nextJobs": "PDCOCP0T17",
        "prevJobs": "PDCOCP0P13",
        "jobExec": "pdco-pdco-covenantpaymentmethod-custom",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T17",
        "nextJobs": "PSANCP0MET",
        "prevJobs": "PDCOCP0C17",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C18",
        "nextJobs": "PDCOCP0T18",
        "prevJobs": "PDCOCP0P13",
        "jobExec": "pdco-pdco-covenantpaymentchannel-custom",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T18",
        "nextJobs": "PSANCP0CHA",
        "prevJobs": "PDCOCP0C18",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C19",
        "nextJobs": "PDCOCP0T19",
        "prevJobs": "PDCOCP0P11, PDCOCP0P13",
        "jobExec": "pdco-pdco-covenantshipping-custom",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T19",
        "nextJobs": "PSANCP0SHI",
        "prevJobs": "PDCOCP0C19",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A20",
        "nextJobs": "PDCOCP0P20",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-accountsubproduct-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P20",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0A20",
        "jobExec": "pdco-pdco-accountsubproduct-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A21",
        "nextJobs": "PDCOCP0P21",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-tablecatalog-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P21",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0A21",
        "jobExec": "pdco-pdco-tablecatalog-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A28",
        "nextJobs": "PDCOCP0P28",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-exchangerate-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P28",
        "nextJobs": "PCOGCP0C28, PKMOLCP0P01",
        "prevJobs": "PDCOCP0A28",
        "jobExec": "pdco-pdco-exchangerate-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C26",
        "nextJobs": "PDCOCP0T26",
        "prevJobs": "PDCOCP0043",
        "jobExec": "pdco-pdco-corporatecatalogs-custom",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0T26",
        "nextJobs": "PSANCP0RUB, PCOGCP0DF0",
        "prevJobs": "PDCOCP0C26",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0C27",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0437",
        "jobExec": "pdco-pdco-people-custom",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0001",
        "nextJobs": "PDCOCP0002",
        "prevJobs": "PDCOTP0006",
        "jobExec": "pdco-pdco-customerinformation-afp-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0005",
        "nextJobs": "PDCOCP0006",
        "prevJobs": "PDCOTP0007",
        "jobExec": "pdco-pdco-customerinformation-sunedu-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0009",
        "nextJobs": "PDCOCP0010",
        "prevJobs": "PDCOTP0014",
        "jobExec": "pdco-pdco-cross-descriptive-account-sbs-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0011",
        "nextJobs": "PDCOCP0012",
        "prevJobs": "PDCOTP0010",
        "jobExec": "pdco-pdco-customerinformation-dulasse-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0013",
        "nextJobs": "PDCOCP0014, PDCOCP0107",
        "prevJobs": "PDCOTP0013",
        "jobExec": "pdco-pdco-cross-geo-location-equivalency-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0019",
        "nextJobs": "PDCOCP0020",
        "prevJobs": "PDCOTP0005",
        "jobExec": "pdco-pdco-customerinformation-reniec-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0021",
        "nextJobs": "PDCOCP0022",
        "prevJobs": "PDCOTP0012",
        "jobExec": "pdco-pdco-cross-segment-group-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0023",
        "nextJobs": "PDCOCP0027",
        "prevJobs": "PDCOTP0004",
        "jobExec": "pdco-pdco-customerinformation-sunat-additional-info-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0024",
        "nextJobs": "PDCOCP0027",
        "prevJobs": "PDCOTP0003",
        "jobExec": "pdco-pdco-customerinformation-sunat-basic-information-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0025",
        "nextJobs": "PDCOCP0026",
        "prevJobs": "PDCOTP0008",
        "jobExec": "pdco-pdco-customerinformation-sunat-debt-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0028",
        "nextJobs": "PDCOCP0029",
        "prevJobs": "PDCOTP0011",
        "jobExec": "pdco-pdco-customerinformation-verifications-equifax-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0030",
        "nextJobs": "PDCOCP0031",
        "prevJobs": "PDCOTP0002",
        "jobExec": "pdco-pdco-cross-parameter-file-ic-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0032",
        "nextJobs": "PDCOCP0033",
        "prevJobs": "PDCOTP0001",
        "jobExec": "pdco-pdco-cross-parameter-file-risk-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0034",
        "nextJobs": "PDCOCP0092",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-card-contract-avro",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0035",
        "nextJobs": "PDCOCP0036, PKMOLCP0P10",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-card-master-avro",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0038",
        "nextJobs": "PDCOCP0039",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-cross-catalogs-segment-avro",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0042",
        "nextJobs": "PDCOCP0043",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-cross-corporate-catalogs-avro",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0044",
        "nextJobs": "PDCOCP0045",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-credit-card-mov-avro",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0046",
        "nextJobs": "PDCOCP0047, PDCOCP0120",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-cust-segment-tcom-daily-avro",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0048",
        "nextJobs": "PDCOCP0049",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-debit-card-mov-avro",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0050",
        "nextJobs": "PDCOCP0053, PDCOCP0123",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-talentculture-employees-avro",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0054",
        "nextJobs": "PDCOCP0055",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-guarantee-avro",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0056",
        "nextJobs": "PDCOCP0057",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-internet-banking-mov-avro",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0062",
        "nextJobs": "PDCOCP0063",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-non-payment-daily-avro",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0064",
        "nextJobs": "PDCOCP0092",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-parallel-lines-contract-avro",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0065",
        "nextJobs": "PDCOCP0066",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-personal-accounts-mov-avro",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0067",
        "nextJobs": "PDCOCP0068",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-product-loan-daily-avro",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0069",
        "nextJobs": "PDCOCP0070",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-cross-rate-commission-bin-avro",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0071",
        "nextJobs": "PDCOCP0072",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-reserved-information-avro",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0073",
        "nextJobs": "PDCOCP0074",
        "prevJobs": "PDCOPP0015",
        "jobExec": "pdco-pdco-finance-balance-daily-corp-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0075",
        "nextJobs": "PDCOCP0076",
        "prevJobs": "PDCOPP0016",
        "jobExec": "pdco-pdco-finance-balance-daily-local-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0078",
        "nextJobs": "PDCOCP0077",
        "prevJobs": "PDCOPP0022",
        "jobExec": "pdco-pdco-customerinformation-address-corp-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0079",
        "nextJobs": "PDCOCP0077",
        "prevJobs": "PDCOPP0023",
        "jobExec": "pdco-pdco-customerinformation-address-local-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0080",
        "nextJobs": "PDCOCP0081",
        "prevJobs": "PDCOPP0013",
        "jobExec": "pdco-pdco-finance-balance-monthly-corp-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0082",
        "nextJobs": "PDCOCP0083",
        "prevJobs": "PDCOPP0014",
        "jobExec": "pdco-pdco-finance-balance-monthly-local-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0085",
        "nextJobs": "PDCOCP0086",
        "prevJobs": "PDCOPP0045",
        "jobExec": "pdco-pdco-cross-branch-catalog-category-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0087",
        "nextJobs": "PDCOCP0084",
        "prevJobs": "PDCOPP0042",
        "jobExec": "pdco-pdco-cross-branch-catalog-corp-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0088",
        "nextJobs": "PDCOCP0084",
        "prevJobs": "PDCOPP0043",
        "jobExec": "pdco-pdco-cross-branch-catalog-local-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0089",
        "nextJobs": "PDCOCP0090",
        "prevJobs": "PDCOPP0037",
        "jobExec": "pdco-pdco-cross-business-days-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0091",
        "nextJobs": "PDCOCP0092",
        "prevJobs": "PDCOPP0012",
        "jobExec": "pdco-pdco-retailbusinessbanking-contract-master-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0093",
        "nextJobs": "PDCOCP0096",
        "prevJobs": "PDCOPP0052",
        "jobExec": "pdco-pdco-retailbusinessbanking-contract-monthly-local-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0095",
        "nextJobs": "PDCOCP0094",
        "prevJobs": "PDCOPP0040",
        "jobExec": "pdco-pdco-cross-epigraph-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0098",
        "nextJobs": "PDCOCP0099",
        "prevJobs": "PDCOPP0039",
        "jobExec": "pdco-pdco-cross-epigraph-product-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0100",
        "nextJobs": "PDCOCP0101",
        "prevJobs": "PDCOPP0038",
        "jobExec": "pdco-pdco-cross-exchange-rate-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0102",
        "nextJobs": "PDCOCP0103",
        "prevJobs": "PDCOPP0032",
        "jobExec": "pdco-pdco-customerinformation-feedback-red-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0104",
        "nextJobs": "PDCOCP0105",
        "prevJobs": "PDCOPP0036",
        "jobExec": "pdco-pdco-cross-formula-concepan-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0106",
        "nextJobs": "PDCOCP0107",
        "prevJobs": "PDCOPP0048",
        "jobExec": "pdco-pdco-cross-geo-location-catalog-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0108",
        "nextJobs": "PDCOCP0109",
        "prevJobs": "PDCOPP0050",
        "jobExec": "pdco-pdco-cross-geo-location-hierarchy-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0111",
        "nextJobs": "PDCOCP0116",
        "prevJobs": "PDCOPP0044",
        "jobExec": "pdco-pdco-cross-hierarchy-branch-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0113",
        "nextJobs": "PDCOCP0114",
        "prevJobs": "PDCOPP0006",
        "jobExec": "pdco-pdco-risk-loan-request-customer-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0115",
        "nextJobs": "PDCOCP0112",
        "prevJobs": "PDCOPP0047",
        "jobExec": "pdco-pdco-cross-manager-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0117",
        "nextJobs": "PDCOCP0118",
        "prevJobs": "PDCOPP0011",
        "jobExec": "pdco-pdco-retailbusinessbanking-membership-digital-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0128",
        "nextJobs": "PDCOCP0119",
        "prevJobs": "PDCOPP0029",
        "jobExec": "pdco-pdco-customerinformation-participants-corp-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0121",
        "nextJobs": "PDCOCP0119",
        "prevJobs": "PDCOPP0030",
        "jobExec": "pdco-pdco-customerinformation-participants-local-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0122",
        "nextJobs": "PDCOCP0123",
        "prevJobs": "PDCOPP0010",
        "jobExec": "pdco-pdco-retailbusinessbanking-payroll-mph-mov-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0125",
        "nextJobs": "PDCOCP0120",
        "prevJobs": "PDCOPP0017",
        "jobExec": "pdco-pdco-customerinformation-people-daily-corp-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0126",
        "nextJobs": "PDCOCP0120",
        "prevJobs": "PDCOPP0018",
        "jobExec": "pdco-pdco-customerinformation-people-daily-local-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0127",
        "nextJobs": "PDCOCP0124",
        "prevJobs": "PDCOPP0031",
        "jobExec": "pdco-pdco-customerinformation-portfolio-corp-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0129",
        "nextJobs": "PDCOCP0130",
        "prevJobs": "PDCOPP0041",
        "jobExec": "pdco-pdco-cross-product-subproduct-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0131",
        "nextJobs": "PDCOCP0132",
        "prevJobs": "PDCOPP0002",
        "jobExec": "pdco-pdco-risk-rating-customer-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0133",
        "nextJobs": "PDCOCP0134",
        "prevJobs": "PDCOPP0003",
        "jobExec": "pdco-pdco-risk-rating-exercise-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0135",
        "nextJobs": "PDCOCP0136",
        "prevJobs": "PDCOPP0004",
        "jobExec": "pdco-pdco-risk-ratingexercisedetail-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0137",
        "nextJobs": "PDCOCP0138",
        "prevJobs": "PDCOPP0005",
        "jobExec": "pdco-pdco-risk-classification-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0139",
        "nextJobs": "PDCOCP0140",
        "prevJobs": "PDCOPP0007",
        "jobExec": "pdco-pdco-risk-score-rating-excluded-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0141",
        "nextJobs": "PDCOCP0142",
        "prevJobs": "PDCOPP0001",
        "jobExec": "pdco-pdco-risk-watchlist-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0143",
        "nextJobs": "PDCOCP0147",
        "prevJobs": "PDCOTP0015",
        "jobExec": "pdco-pdco-customerinformation-sunarp-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0010",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0009",
        "jobExec": "pdco-pdco-cross-descriptive-account-sbs-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0014",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0013",
        "jobExec": "pdco-pdco-cross-geo-location-equivalency-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0022",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0021",
        "jobExec": "pdco-pdco-cross-segment-group-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0029",
        "nextJobs": "PBTQCP4001",
        "prevJobs": "PDCOCP0028",
        "jobExec": "pdco-pdco-customerinformation-verifications-equifax-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0031",
        "nextJobs": "PBTQCP4002",
        "prevJobs": "PDCOCP0030",
        "jobExec": "pdco-pdco-cross-parameter-file-ic-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0033",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0032",
        "jobExec": "pdco-pdco-cross-parameter-file-risk-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0037",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0043",
        "jobExec": "pdco-pdco-cross-catalogs-ciiu-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0039",
        "nextJobs": "PCDOCP0013",
        "prevJobs": "PDCOCP0038",
        "jobExec": "pdco-pdco-cross-catalogs-segment-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0043",
        "nextJobs": "PDCOCP0037, PDCOCP0C26, PCDOCP0013, PKBTQCP0C01, PKMOLCP0P02, PKMOLCP0P03, PKMOLCP0P04, PKMOLCP0P05, PKPFMCP0P07",
        "prevJobs": "PDCOCP0042",
        "jobExec": "pdco-pdco-cross-corporate-catalogs-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0045",
        "nextJobs": "PKMOLCP0P02, PKMOLCP0P07",
        "prevJobs": "PDCOCP0044",
        "jobExec": "pdco-pdco-retailbusinessbanking-credit-card-mov-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0047",
        "nextJobs": "PBILCP0012, PBILCP4039",
        "prevJobs": "PDCOCP0046",
        "jobExec": "pdco-pdco-customerinformation-cust-segment-tcom-daily-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0049",
        "nextJobs": "PKMOLCP0P05, PKMOLCP0P07",
        "prevJobs": "PDCOCP0048",
        "jobExec": "pdco-pdco-retailbusinessbanking-debit-card-mov-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0053",
        "nextJobs": "PCDOCP0014",
        "prevJobs": "PDCOCP0050",
        "jobExec": "pdco-pdco-talentculture-employees-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0055",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0054",
        "jobExec": "pdco-pdco-retailbusinessbanking-guarantee-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0057",
        "nextJobs": "PBTQCP4002, PCTDCP0P02",
        "prevJobs": "PDCOCP0056",
        "jobExec": "pdco-pdco-retailbusinessbanking-internet-banking-mov-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0063",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0062",
        "jobExec": "pdco-pdco-retailbusinessbanking-non-payment-daily-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0066",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0065",
        "jobExec": "pdco-pdco-retailbusinessbanking-personal-accounts-mov-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0068",
        "nextJobs": "PBTQCP4001",
        "prevJobs": "PDCOCP0067",
        "jobExec": "pdco-pdco-retailbusinessbanking-product-loan-daily-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0070",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0069",
        "jobExec": "pdco-pdco-cross-rate-commission-bin-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0072",
        "nextJobs": "PDCOCP4055, PBTQCP4001, PCDOCP0013, PBTQCP0C01",
        "prevJobs": "PDCOCP0071",
        "jobExec": "pdco-pdco-customerinformation-reserved-information-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0074",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0073",
        "jobExec": "pdco-pdco-finance-balance-daily-corp-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0076",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0075",
        "jobExec": "pdco-pdco-finance-balance-daily-local-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0077",
        "nextJobs": "PCDOCP0013",
        "prevJobs": "PDCOCP0078, PDCOCP0079",
        "jobExec": "pdco-pdco-customerinformation-address-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0084",
        "nextJobs": "PCDOCP0013",
        "prevJobs": "PDCOCP0087, PDCOCP0088",
        "jobExec": "pdco-pdco-cross-branch-catalog-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0086",
        "nextJobs": "PCDOCP0013",
        "prevJobs": "PDCOCP0085",
        "jobExec": "pdco-pdco-cross-branch-catalog-category-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0090",
        "nextJobs": "PSANCP4001, PBTQCP4002",
        "prevJobs": "PDCOCP0089",
        "jobExec": "pdco-pdco-cross-business-days-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0092",
        "nextJobs": "PDCOCP0016, PDCOCP0151, PBTQCP4001",
        "prevJobs": "PDCOCP0034, PDCOCP0064, PDCOCP0091",
        "jobExec": "pdco-pdco-retailbusinessbanking-contract-master-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0096",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0093",
        "jobExec": "pdco-pdco-retailbusinessbanking-contract-monthly-local-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0094",
        "nextJobs": "PDCOCP0097, PDCOCP4005, PDCOCP0151, PCDOCP0015",
        "prevJobs": "PDCOCP0095",
        "jobExec": "pdco-pdco-cross-epigraph-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0099",
        "nextJobs": "PDCOCP4005, PDCOCP0151, PBILCP0011",
        "prevJobs": "PDCOCP0098",
        "jobExec": "pdco-pdco-cross-epigraph-product-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0101",
        "nextJobs": "PDCOCP4034, PDCOCP4048, PBILCP0011, PBILCP0015",
        "prevJobs": "PDCOCP0100",
        "jobExec": "pdco-pdco-cross-exchange-rate-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0103",
        "nextJobs": "PBILCP0018",
        "prevJobs": "PDCOCP0102",
        "jobExec": "pdco-pdco-customerinformation-feedback-red-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0105",
        "nextJobs": "PDCOCP0151",
        "prevJobs": "PDCOCP0104",
        "jobExec": "pdco-pdco-cross-formula-concepan-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0107",
        "nextJobs": "PDCOCP0110",
        "prevJobs": "PDCOCP0013, PDCOCP0106",
        "jobExec": "pdco-pdco-cross-geo-location-catalog-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0109",
        "nextJobs": "PDCOCP0110",
        "prevJobs": "PDCOCP0108",
        "jobExec": "pdco-pdco-cross-geo-location-hierarchy-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0116",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0111",
        "jobExec": "pdco-pdco-cross-hierarchy-branch-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0114",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0113",
        "jobExec": "pdco-pdco-risk-loan-request-customer-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0112",
        "nextJobs": "PCDOCP0014, PCDOCP0010, PCDOCP0013, PBILCP0012, PBILCP4039",
        "prevJobs": "PDCOCP0115",
        "jobExec": "pdco-pdco-cross-manager-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0118",
        "nextJobs": "PDCOCP0016, PBILCP0013",
        "prevJobs": "PDCOCP0117",
        "jobExec": "pdco-pdco-retailbusinessbanking-membership-digital-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0119",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0128, PDCOCP0121, PDCOCP0153",
        "jobExec": "pdco-pdco-customerinformation-participants-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0123",
        "nextJobs": "PDCOCP0016, PDCOCP4048",
        "prevJobs": "PDCOCP0050, PDCOCP0122",
        "jobExec": "pdco-pdco-retailbusinessbanking-payroll-mph-mov-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0120",
        "nextJobs": "PDCOCP4055, PDCOCP0016, PCDOCP0013, PBILCP0002, PBILCP0011, PDCOCP4244",
        "prevJobs": "PDCOCP0046, PDCOCP0125, PDCOCP0126",
        "jobExec": "pdco-pdco-customerinformation-people-daily-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0124",
        "nextJobs": "PCDOCP0014, PCDOCP0010, PCDOCP0013, PBILCP0012, PBILCP4039",
        "prevJobs": "PDCOCP0127",
        "jobExec": "pdco-pdco-customerinformation-portfolio-corp-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0130",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0129",
        "jobExec": "pdco-pdco-cross-product-subproduct-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0132",
        "nextJobs": "PDCOCP4034, PCDOCP4038",
        "prevJobs": "PDCOCP0131",
        "jobExec": "pdco-pdco-risk-rating-customer-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0134",
        "nextJobs": "PDCOCP4034, PCDOCP4002, PCDOCP4038",
        "prevJobs": "PDCOCP0133",
        "jobExec": "pdco-pdco-risk-rating-exercise-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0136",
        "nextJobs": "PDCOCP4034, PCDOCP4039",
        "prevJobs": "PDCOCP0135",
        "jobExec": "pdco-pdco-risk-rating-exercise-detail-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0138",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0137",
        "jobExec": "pdco-pdco-risk-classification-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0140",
        "nextJobs": "PDCOCP4034",
        "prevJobs": "PDCOCP0139",
        "jobExec": "pdco-pdco-risk-score-rating-excluded-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0142",
        "nextJobs": "PDCOCP4055",
        "prevJobs": "PDCOCP0141",
        "jobExec": "pdco-pdco-risk-watchlist-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0147",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0143",
        "jobExec": "pdco-pdco-customerinformation-sunarp-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0002",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0001",
        "jobExec": "pdco-pdco-afp-diferencial",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0004",
        "nextJobs": "PDCOTP0059",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-sunat-legal-rep-parquet",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0012",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0011",
        "jobExec": "pdco-pdco-customerinformation-dulasse-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0020",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0019",
        "jobExec": "pdco-pdco-customerinformation-reniec-parquet-dif",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0026",
        "nextJobs": "PDCOCP4055",
        "prevJobs": "PDCOCP0025",
        "jobExec": "pdco-pdco-customerinformation-sunat-debt-parquet-dif",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0036",
        "nextJobs": "PBTQCP4001, PSANCP4001, PBILCP0006, PKMOLCP0P02, PKMOLCP0P05, PKSANCP0P01",
        "prevJobs": "PDCOCP0035",
        "jobExec": "pdco-pdco-retailbusinessbanking-card-master-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0006",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0005",
        "jobExec": "pdco-pdco-customerinformation-sunedu-parquet-dif",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0027",
        "nextJobs": "PDCOCP4055, PDCOCP0016, PDCOCP4014",
        "prevJobs": "PDCOCP0023, PDCOCP0024",
        "jobExec": "pdco-pdco-customerinformation-sunat-people-parquet-dif",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0081",
        "nextJobs": "PDCOCP0151",
        "prevJobs": "PDCOCP0080",
        "jobExec": "pdco-pdco-finance-balance-monthly-corp-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0016",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0092, PDCOCP0118, PDCOCP0123, PDCOCP0120, PDCOCP0027",
        "jobExec": "pdco-pdco-peopleboard-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0097",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0094",
        "jobExec": "pdco-pdco-cross-epigraph-normalized-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0110",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0107, PDCOCP0109",
        "jobExec": "pdco-pdco-cross-geo-location-master-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0151",
        "nextJobs": "PDCOCP4026",
        "prevJobs": "PDCOCP0092, PDCOCP0094, PDCOCP0099, PDCOCP0105, PDCOCP0081",
        "jobExec": "pdco-pdco-finance-balance-aggregate-monthly",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0001",
        "nextJobs": "PDCOCP0141",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0002",
        "nextJobs": "PDCOCP0131",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0003",
        "nextJobs": "PDCOCP0133",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0004",
        "nextJobs": "PDCOCP0135",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0005",
        "nextJobs": "PDCOCP0137",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0006",
        "nextJobs": "PDCOCP0113",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0007",
        "nextJobs": "PDCOCP0139",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0001",
        "nextJobs": "PDCOCP0032",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0002.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0002",
        "nextJobs": "PDCOCP0030",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0003.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0010",
        "nextJobs": "PDCOCP0122",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0011",
        "nextJobs": "PDCOCP0117",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0012",
        "nextJobs": "PDCOCP0091",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0013",
        "nextJobs": "PDCOCP0080",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0014",
        "nextJobs": "PDCOCP0082",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0015",
        "nextJobs": "PDCOCP0073",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0016",
        "nextJobs": "PDCOCP0075",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0017",
        "nextJobs": "PDCOCP0125",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0018",
        "nextJobs": "PDCOCP0126",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0003",
        "nextJobs": "PDCOCP0024",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0004.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0004",
        "nextJobs": "PDCOCP0023",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0005.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0005",
        "nextJobs": "PDCOCP0019",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0001.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0022",
        "nextJobs": "PDCOCP0078",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0023",
        "nextJobs": "PDCOCP0079",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0006",
        "nextJobs": "PDCOCP0001",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0006.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0007",
        "nextJobs": "PDCOCP0005",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0007.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0008",
        "nextJobs": "PDCOCP0025",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0008.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0010",
        "nextJobs": "PDCOCP0011",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0010.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0029",
        "nextJobs": "PDCOCP0128",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0030",
        "nextJobs": "PDCOCP0121",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0031",
        "nextJobs": "PDCOCP0127",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0032",
        "nextJobs": "PDCOCP0102",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0011",
        "nextJobs": "PDCOCP0028",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0011.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0036",
        "nextJobs": "PDCOCP0104",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0037",
        "nextJobs": "PDCOCP0089",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0038",
        "nextJobs": "PDCOCP0100",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0039",
        "nextJobs": "PDCOCP0098",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0040",
        "nextJobs": "PDCOCP0095",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0041",
        "nextJobs": "PDCOCP0129",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0042",
        "nextJobs": "PDCOCP0087",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0043",
        "nextJobs": "PDCOCP0088",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0044",
        "nextJobs": "PDCOCP0111",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0045",
        "nextJobs": "PDCOCP0085",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0012",
        "nextJobs": "PDCOCP0021",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0012.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0047",
        "nextJobs": "PDCOCP0115",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0048",
        "nextJobs": "PDCOCP0106",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0013",
        "nextJobs": "PDCOCP0013",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0013.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0050",
        "nextJobs": "PDCOCP0108",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0014",
        "nextJobs": "PDCOCP0009",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0014.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0052",
        "nextJobs": "PDCOCP0093",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0015",
        "nextJobs": "PDCOCP0143",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0017.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0053",
        "nextJobs": "PDCOCP0152",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0152",
        "nextJobs": "PDCOCP0153",
        "prevJobs": "PDCOPP0053",
        "jobExec": "pdco-pdco-customerinformation-iuc-generator-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0153",
        "nextJobs": "PDCOCP0119",
        "prevJobs": "PDCOCP0152",
        "jobExec": "pdco-pdco-customerinformation-iuc-generator-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0079",
        "nextJobs": "PDCOCP0213",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0213",
        "nextJobs": "PDCOCP0334",
        "prevJobs": "PDCOPP0079",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-account-terms-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0334",
        "nextJobs": "PBILCP0001",
        "prevJobs": "PDCOCP0213",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0069",
        "nextJobs": "PDCOCP0202",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0202",
        "nextJobs": "PDCOCP0324",
        "prevJobs": "PDCOPP0069",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-checking-saving-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0324",
        "nextJobs": "PBILCP0001",
        "prevJobs": "PDCOCP0202",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0081",
        "nextJobs": "PDCOCP0215",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0215",
        "nextJobs": "PDCOCP0336",
        "prevJobs": "PDCOPP0081",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-contingent-comex-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0336",
        "nextJobs": "PBILCP0001",
        "prevJobs": "PDCOCP0215",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0077",
        "nextJobs": "PDCOCP0211",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0211",
        "nextJobs": "PDCOCP0332",
        "prevJobs": "PDCOPP0077",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-credits-liquidate-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0332",
        "nextJobs": "PBILCP0001",
        "prevJobs": "PDCOCP0211",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0075",
        "nextJobs": "PDCOCP0208",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0208",
        "nextJobs": "PDCOCP0330",
        "prevJobs": "PDCOPP0075",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-cts-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0330",
        "nextJobs": "PBILCP0001",
        "prevJobs": "PDCOCP0208",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0082",
        "nextJobs": "PDCOCP0216",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0216",
        "nextJobs": "PDCOCP0337",
        "prevJobs": "PDCOPP0082",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-financing-comex-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0337",
        "nextJobs": "PBILCP0001",
        "prevJobs": "PDCOCP0216",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0067",
        "nextJobs": "PDCOCP0200",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0200",
        "nextJobs": "PDCOCP0249",
        "prevJobs": "PDCOPP0067",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-firm-risk-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0249",
        "nextJobs": "PBILCP0001",
        "prevJobs": "PDCOCP0200",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0070",
        "nextJobs": "PDCOCP0203",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0203",
        "nextJobs": "PDCOCP0325",
        "prevJobs": "PDCOPP0070",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-insurance-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0325",
        "nextJobs": "PBILCP0001",
        "prevJobs": "PDCOCP0203",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0068",
        "nextJobs": "PDCOCP0201",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0201",
        "nextJobs": "PDCOCP0323",
        "prevJobs": "PDCOPP0068",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-leasing-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0323",
        "nextJobs": "PBILCP0001",
        "prevJobs": "PDCOCP0201",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0078",
        "nextJobs": "PDCOCP0212",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0212",
        "nextJobs": "PDCOCP0333",
        "prevJobs": "PDCOPP0078",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-legal-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0333",
        "nextJobs": "PBILCP0001",
        "prevJobs": "PDCOCP0212",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0076",
        "nextJobs": "PDCOCP0210",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0210",
        "nextJobs": "PDCOCP0331",
        "prevJobs": "PDCOPP0076",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-loan-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0331",
        "nextJobs": "PBILCP0001",
        "prevJobs": "PDCOCP0210",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0080",
        "nextJobs": "PDCOCP0214",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0214",
        "nextJobs": "PDCOCP0335",
        "prevJobs": "PDCOPP0080",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-mutual-funds-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0335",
        "nextJobs": "PBILCP0001",
        "prevJobs": "PDCOCP0214",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0072",
        "nextJobs": "PDCOCP0205",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0205",
        "nextJobs": "PDCOCP0327",
        "prevJobs": "PDCOPP0072",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-portfolio-effects-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0327",
        "nextJobs": "PBILCP0001",
        "prevJobs": "PDCOCP0205",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0074",
        "nextJobs": "PDCOCP0207",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0207",
        "nextJobs": "PDCOCP0329",
        "prevJobs": "PDCOPP0074",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-portfolio-loan-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0329",
        "nextJobs": "PBILCP0001",
        "prevJobs": "PDCOCP0207",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0071",
        "nextJobs": "PDCOCP0204",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0204",
        "nextJobs": "PDCOCP0326",
        "prevJobs": "PDCOPP0071",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-risk-card-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0326",
        "nextJobs": "PBILCP0001",
        "prevJobs": "PDCOCP0204",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0073",
        "nextJobs": "PDCOCP0206",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0206",
        "nextJobs": "PDCOCP0328",
        "prevJobs": "PDCOPP0073",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-securities-custody-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0328",
        "nextJobs": "PBILCP0001",
        "prevJobs": "PDCOCP0206",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-inventory-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0253",
        "nextJobs": "PDCOCP0263",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-account-card-relationship-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0263",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0253",
        "jobExec": "pdco-pdco-retailbusinessbanking-account-card-relationship-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0252",
        "nextJobs": "PDCOCP0262",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-account-mov-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0262",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0252",
        "jobExec": "pdco-pdco-retailbusinessbanking-account-mov-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0250",
        "nextJobs": "PDCOCP0260",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-bonuses-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0260",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0250",
        "jobExec": "pdco-pdco-retailbusinessbanking-bonuses-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0243",
        "nextJobs": "PDCOCP0244",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-cross-product-subproduct-host-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0244",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0243",
        "jobExec": "pdco-pdco-cross-product-subproduct-host-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0232",
        "nextJobs": "PDCOCP0245",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-contract-rates-di-daily-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0245",
        "nextJobs": "PBILCP0014",
        "prevJobs": "PDCOCP0232",
        "jobExec": "pdco-pdco-finance-contract-rates-di-daily-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0230",
        "nextJobs": "PDCOCP0321",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-view-saving-mis-mov-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0321",
        "nextJobs": "PBILCP0008, PBILCP0009",
        "prevJobs": "PDCOCP0230",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-mov-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0231",
        "nextJobs": "PDCOCP0322",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-credit-lines-mis-mov-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0322",
        "nextJobs": "PBILCP0008, PBILCP0009",
        "prevJobs": "PDCOCP0231",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-mov-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0055",
        "nextJobs": "PDCOCP0219",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0219",
        "nextJobs": "PDCOCP0308",
        "prevJobs": "PDCOPP0055",
        "jobExec": "pdco-pdco-retailbusinessbanking-confirming-mis-mov-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0308",
        "nextJobs": "PBILCP0008, PBILCP0009",
        "prevJobs": "PDCOCP0219",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-mov-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0062",
        "nextJobs": "PDCOCP0226",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0226",
        "nextJobs": "PDCOCP0317",
        "prevJobs": "PDCOPP0062",
        "jobExec": "pdco-pdco-retailbusinessbanking-contingent-comex-mis-mov-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0317",
        "nextJobs": "PBILCP0008, PBILCP0009",
        "prevJobs": "PDCOCP0226",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-mov-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0063",
        "nextJobs": "PDCOCP0227",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0227",
        "nextJobs": "PDCOCP0318",
        "prevJobs": "PDCOPP0063",
        "jobExec": "pdco-pdco-retailbusinessbanking-cts-mis-mov-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0318",
        "nextJobs": "PBILCP0008, PBILCP0009",
        "prevJobs": "PDCOCP0227",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-mov-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0091",
        "nextJobs": "PDCOCP0217",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0217",
        "nextJobs": "PDCOCP0248",
        "prevJobs": "PDCOPP0091",
        "jobExec": "pdco-pdco-retailbusinessbanking-effect-portfolio-mis-mov-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0248",
        "nextJobs": "PBILCP0008, PBILCP0009",
        "prevJobs": "PDCOCP0217",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-mov-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0065",
        "nextJobs": "PDCOCP0229",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0229",
        "nextJobs": "PDCOCP0320",
        "prevJobs": "PDCOPP0065",
        "jobExec": "pdco-pdco-retailbusinessbanking-financing-comex-mis-mov-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0320",
        "nextJobs": "PBILCP0008, PBILCP0009",
        "prevJobs": "PDCOCP0229",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-mov-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0061",
        "nextJobs": "PDCOCP0225",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0225",
        "nextJobs": "PDCOCP0316",
        "prevJobs": "PDCOPP0061",
        "jobExec": "pdco-pdco-retailbusinessbanking-guarantee-mis-mov-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0316",
        "nextJobs": "PBILCP0008, PBILCP0009",
        "prevJobs": "PDCOCP0225",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-mov-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0064",
        "nextJobs": "PDCOCP0228",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0228",
        "nextJobs": "PDCOCP0319",
        "prevJobs": "PDCOPP0064",
        "jobExec": "pdco-pdco-retailbusinessbanking-insurance-mis-mov-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0319",
        "nextJobs": "PBILCP0008, PBILCP0009",
        "prevJobs": "PDCOCP0228",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-mov-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0058",
        "nextJobs": "PDCOCP0222",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0222",
        "nextJobs": "PDCOCP0313",
        "prevJobs": "PDCOPP0058",
        "jobExec": "pdco-pdco-retailbusinessbanking-leasing-mis-mov-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0313",
        "nextJobs": "PBILCP0008, PBILCP0009",
        "prevJobs": "PDCOCP0222",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-mov-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0059",
        "nextJobs": "PDCOCP0223",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0223",
        "nextJobs": "PDCOCP0314",
        "prevJobs": "PDCOPP0059",
        "jobExec": "pdco-pdco-retailbusinessbanking-legal-mis-mov-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0314",
        "nextJobs": "PBILCP0008, PBILCP0009",
        "prevJobs": "PDCOCP0223",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-mov-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0060",
        "nextJobs": "PDCOCP0224",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0224",
        "nextJobs": "PDCOCP0315",
        "prevJobs": "PDCOPP0060",
        "jobExec": "pdco-pdco-retailbusinessbanking-loan-mis-mov-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0315",
        "nextJobs": "PBILCP0008, PBILCP0009",
        "prevJobs": "PDCOCP0224",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-mov-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0054",
        "nextJobs": "PDCOCP0218",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0218",
        "nextJobs": "PDCOCP0307",
        "prevJobs": "PDCOPP0054",
        "jobExec": "pdco-pdco-retailbusinessbanking-loan-portfolio-mis-mov-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0307",
        "nextJobs": "PBILCP0008, PBILCP0009",
        "prevJobs": "PDCOCP0218",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-mov-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0057",
        "nextJobs": "PDCOCP0221",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0221",
        "nextJobs": "PDCOCP0312",
        "prevJobs": "PDCOPP0057",
        "jobExec": "pdco-pdco-retailbusinessbanking-mutual-fund-mis-mov-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0312",
        "nextJobs": "PBILCP0008, PBILCP0009",
        "prevJobs": "PDCOCP0221",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-mov-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0056",
        "nextJobs": "PDCOCP0220",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0220",
        "nextJobs": "PDCOCP0311",
        "prevJobs": "PDCOPP0056",
        "jobExec": "pdco-pdco-retailbusinessbanking-term-account-mis-mov-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0311",
        "nextJobs": "PBILCP0008, PBILCP0009",
        "prevJobs": "PDCOCP0220",
        "jobExec": "pdco-pdco-retailbusinessbanking-mis-mov-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0301",
        "nextJobs": "PDCOCP0302",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-account-personal-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0300",
        "nextJobs": "PDCOCP0302",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-account-personal-complem-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0302",
        "nextJobs": "PDCOCP0A15, PKMOLCP0P01, PKSANCP0P01",
        "prevJobs": "PDCOCP0301, PDCOCP0300",
        "jobExec": "pdco-pdco-retailbusinessbanking-account-personal-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0309",
        "nextJobs": "PDCOCP0310",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-inter-bnkng-legal-chn-mov-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0310",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0309",
        "jobExec": "pdco-pdco-retailbusinessbanking-inter-bnkng-legal-chn-mov-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0358",
        "nextJobs": "PDCOCP0359",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-intnt-bnkng-mngmt-layer-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0359",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0358",
        "jobExec": "pdco-pdco-retailbusinessbanking-intnt-bnkng-mngmt-layer-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0298",
        "nextJobs": "PDCOCP0299",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-mngmt-layer-detail-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0299",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0298",
        "jobExec": "pdco-pdco-retailbusinessbanking-mngmt-layer-detail-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0360",
        "nextJobs": "PDCOCP0361",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-netcash-payroll-header-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0361",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0360",
        "jobExec": "pdco-pdco-retailbusinessbanking-netcash-payroll-header-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0278",
        "nextJobs": "PDCOCP0400",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-aggregator-cashier-saex-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0400",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0278",
        "jobExec": "pdco-pdco-retailbusinessbanking-aggregator-cashier-saex-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0295",
        "nextJobs": "PDCOCP0417",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-box-register-hist-saex-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0417",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0295",
        "jobExec": "pdco-pdco-retailbusinessbanking-box-register-hist-saex-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0290",
        "nextJobs": "PDCOCP0412",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-box-register-saex-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0412",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0290",
        "jobExec": "pdco-pdco-retailbusinessbanking-box-register-saex-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0258",
        "nextJobs": "PDCOCP0268",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-catalog-services-netcash-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0268",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0258",
        "jobExec": "pdco-pdco-retailbusinessbanking-catalog-services-netcash-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0254",
        "nextJobs": "PDCOCP0264",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-catalog-trans-netcash-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0264",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0254",
        "jobExec": "pdco-pdco-retailbusinessbanking-catalog-trans-netcash-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0284",
        "nextJobs": "PDCOCP0406",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-commissions-range-saex-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0406",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0284",
        "jobExec": "pdco-pdco-retailbusinessbanking-commissions-range-saex-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0283",
        "nextJobs": "PDCOCP0405",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-company-commission-saex-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0405",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0283",
        "jobExec": "pdco-pdco-retailbusinessbanking-company-commission-saex-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0286",
        "nextJobs": "PDCOCP0408",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-customer-enterprises-saex-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0293",
        "nextJobs": "PDCOCP0415",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-customer-limits-saex-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0415",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0293",
        "jobExec": "pdco-pdco-retailbusinessbanking-customer-limits-saex-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0279",
        "nextJobs": "PDCOCP0401",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-enterprises-saex-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0401",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0279",
        "jobExec": "pdco-pdco-retailbusinessbanking-enterprises-saex-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0280",
        "nextJobs": "PDCOCP0402",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-establishments-saex-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0402",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0280",
        "jobExec": "pdco-pdco-retailbusinessbanking-establishments-saex-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0285",
        "nextJobs": "PDCOCP0407",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-fee-exceptions-saex-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0255",
        "nextJobs": "PDCOCP0265",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-info-services-netcash-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0265",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0255",
        "jobExec": "pdco-pdco-retailbusinessbanking-info-services-netcash-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0288",
        "nextJobs": "PDCOCP0410",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-limit-transaction-saex-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0410",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0288",
        "jobExec": "pdco-pdco-retailbusinessbanking-limit-transaction-saex-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0282",
        "nextJobs": "PDCOCP0404",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pe-krb-inr-logoperationsaexp-01",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0404",
        "nextJobs": "PCTDCP0P02",
        "prevJobs": "PDCOCP0282",
        "jobExec": "pdco-pdco-retailbusinessbanking-log-operation-saex-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0287",
        "nextJobs": "PDCOCP0409",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-param-limit-trans-saex-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0409",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0287",
        "jobExec": "pdco-pdco-retailbusinessbanking-param-limit-trans-saex-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0294",
        "nextJobs": "PDCOCP0416",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-penalty-saex-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0256",
        "nextJobs": "PDCOCP0266",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-profile-channel-altv-net-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0266",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0256",
        "jobExec": "pdco-pdco-retailbusinessbanking-profile-channel-altv-net-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0257",
        "nextJobs": "PDCOCP0267",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-profile-cust-altv-channel-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0267",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0257",
        "jobExec": "pdco-pdco-retailbusinessbanking-profile-cust-altv-channel-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0281",
        "nextJobs": "PDCOCP0403",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-terminal-saex-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0403",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0281",
        "jobExec": "pdco-pdco-retailbusinessbanking-terminal-saex-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0289",
        "nextJobs": "PDCOCP0411",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-trans-corresp-saex-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0411",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0289",
        "jobExec": "pdco-pdco-retailbusinessbanking-trans-corresp-saex-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0292",
        "nextJobs": "PDCOCP0414",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-transactions-saex-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0414",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0292",
        "jobExec": "pdco-pdco-retailbusinessbanking-transactions-saex-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0259",
        "nextJobs": "PDCOCP0269",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-user-cust-altv-channel-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0269",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0259",
        "jobExec": "pdco-pdco-retailbusinessbanking-user-cust-altv-channel-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0291",
        "nextJobs": "PDCOCP0413",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-users-saex-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0413",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0291",
        "jobExec": "pdco-pdco-retailbusinessbanking-users-saex-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0088",
        "nextJobs": "PDCOCP0424",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0424",
        "nextJobs": "PDCOCP0275",
        "prevJobs": "PDCOPP0088",
        "jobExec": "pdco-pdco-retailbusinessbanking-access-customer-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0275",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0424",
        "jobExec": "pdco-pdco-retailbusinessbanking-access-customer-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0084",
        "nextJobs": "PDCOCP0420",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0420",
        "nextJobs": "PDCOCP0271",
        "prevJobs": "PDCOPP0084",
        "jobExec": "pdco-pdco-retailbusinessbanking-agents-plus-mov-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0271",
        "nextJobs": "PCTDCP0P02",
        "prevJobs": "PDCOCP0420",
        "jobExec": "pdco-pdco-retailbusinessbanking-agents-plus-mov-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0089",
        "nextJobs": "PDCOCP0425",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0425",
        "nextJobs": "PDCOCP0276",
        "prevJobs": "PDCOPP0089",
        "jobExec": "pdco-pdco-retailbusinessbanking-catalog-operator-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0276",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0425",
        "jobExec": "pdco-pdco-retailbusinessbanking-catalog-operator-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0086",
        "nextJobs": "PDCOCP0422",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0422",
        "nextJobs": "PDCOCP0273",
        "prevJobs": "PDCOPP0086",
        "jobExec": "pdco-pdco-retailbusinessbanking-front-office-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0273",
        "nextJobs": "PCTDCP0P02",
        "prevJobs": "PDCOCP0422",
        "jobExec": "pdco-pdco-retailbusinessbanking-front-office-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0087",
        "nextJobs": "PDCOCP0423",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0423",
        "nextJobs": "PDCOCP0274",
        "prevJobs": "PDCOPP0087",
        "jobExec": "pdco-pdco-retailbusinessbanking-front-office-oper-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0274",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0423",
        "jobExec": "pdco-pdco-retailbusinessbanking-front-office-oper-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0083",
        "nextJobs": "PDCOCP0419",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0419",
        "nextJobs": "PDCOCP0270",
        "prevJobs": "PDCOPP0083",
        "jobExec": "pdco-pdco-retailbusinessbanking-inter-bank-hire-net-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0270",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0419",
        "jobExec": "pdco-pdco-retailbusinessbanking-inter-bank-hire-net-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0085",
        "nextJobs": "PDCOCP0421",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0421",
        "nextJobs": "PDCOCP0272",
        "prevJobs": "PDCOPP0085",
        "jobExec": "pdco-pdco-retailbusinessbanking-payments-mov-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0272",
        "nextJobs": "PCTDCP0P02",
        "prevJobs": "PDCOCP0421",
        "jobExec": "pdco-pdco-retailbusinessbanking-payments-mov-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0090",
        "nextJobs": "PDCOCP0426",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0426",
        "nextJobs": "PDCOCP0277",
        "prevJobs": "PDCOPP0090",
        "jobExec": "pdco-pdco-retailbusinessbanking-redex-mov-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0277",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0426",
        "jobExec": "pdco-pdco-retailbusinessbanking-redex-mov-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0241",
        "nextJobs": "PDCOCP0366",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-email-people-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0366",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0241",
        "jobExec": "pdco-pdco-customerinformation-email-people-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0239",
        "nextJobs": "PDCOCP0237",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-phone-people-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0237",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0239",
        "jobExec": "pdco-pdco-customerinformation-phone-people-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0240",
        "nextJobs": "PDCOCP0238",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-email-affiliates-eecc-tc-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0238",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0240",
        "jobExec": "pdco-pdco-customerinformation-email-affiliates-eecc-tc-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0304",
        "nextJobs": "PDCOCP0305",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-phone-affiliates-eecc-tc-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0305",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0304",
        "jobExec": "pdco-pdco-customerinformation-phone-affiliates-eecc-tc-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOPP0092",
        "nextJobs": "PDCOCP0236",
        "prevJobs": "#N/A",
        "jobExec": "multi_tpt.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0236",
        "nextJobs": "PDCOCP0368",
        "prevJobs": "PDCOPP0092",
        "jobExec": "pdco-pdco-customerinformation-affiliations-legal-person-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0368",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0236",
        "jobExec": "pdco-pdco-customerinformation-affiliations-legal-person-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0460",
        "nextJobs": "PDCOCP0461",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-affil-eecc-tc-people-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0461",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0460",
        "jobExec": "pdco-pdco-customerinformation-affil-eecc-tc-people-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0242",
        "nextJobs": "PDCOCP0367",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-email-affiliates-infomail-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0367",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0242",
        "jobExec": "pdco-pdco-customerinformation-email-affiliates-infomail-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0235",
        "nextJobs": "PDCOCP0246, PKMOLCP0P09",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-loan-master-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0246",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0235",
        "jobExec": "pdco-pdco-finance-loan-master-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0433",
        "nextJobs": "PDCOCP0439, PDCOCP0441",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-address-people-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0439",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0433, PDCOCP0434",
        "jobExec": "pdco-pdco-customerinformation-address-people-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0441",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0433, PDCOCP0434",
        "jobExec": "pdco-pdco-customerinformation-address-people-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0429",
        "nextJobs": "PDCOCP0430, PDCOTP0051",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-mark-people-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0430",
        "nextJobs": "PKCSNCP0C02",
        "prevJobs": "PDCOCP0429",
        "jobExec": "pdco-pdco-customerinformation-mark-people-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0427",
        "nextJobs": "PDCOCP0428, PKMOLCP0P10",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-participants-people-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0428",
        "nextJobs": "PCTDCP0P02, PKPFMCP0P05, PKPFMCP0P07",
        "prevJobs": "PDCOCP0427",
        "jobExec": "pdco-pdco-customerinformation-participants-people-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0434",
        "nextJobs": "PDCOCP0439, PDCOCP0441, PDCOCP0437, PKMOLCP0P10",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-basic-data-people-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0435",
        "nextJobs": "PDCOCP0437",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-complementary-data-people-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0436",
        "nextJobs": "PDCOCP0437",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-socioeconomic-profile-people-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0438",
        "nextJobs": "PDCOCP0437",
        "prevJobs": "#N/A",
        "jobExec": "",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0437",
        "nextJobs": "PDCOCP0C27, PKBTQCP0C05, PCTDCP0P02, PKPFMCP0P07",
        "prevJobs": "PDCOCP0434, PDCOCP0435, PDCOCP0436, PDCOCP0438",
        "jobExec": "pdco-pdco-customerinformation-people-daily-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0431",
        "nextJobs": "PDCOCP0432",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-portfolio-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0432",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0431",
        "jobExec": "pdco-pdco-customerinformation-portfolio-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0485",
        "nextJobs": "PDCOCP0486",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-bin-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0486",
        "nextJobs": "PBILCP0006, PBILCP0013",
        "prevJobs": "PDCOCP0485",
        "jobExec": "pdco-pdco-bin-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0369",
        "nextJobs": "PDCOCP0370",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-mutual-funds-products-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0370",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0369",
        "jobExec": "pdco-pdco-retailbusinessbanking-mutual-funds-products-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0389",
        "nextJobs": "PDCOCP0390",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-ffmm-participant-accounts-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0390",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0389",
        "jobExec": "pdco-pdco-retailbusinessbanking-ffmm-participant-accounts-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0391",
        "nextJobs": "PDCOCP0392",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-fund-participants-mov-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0392",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0391",
        "jobExec": "pdco-pdco-retailbusinessbanking-fund-participants-mov-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0393",
        "nextJobs": "PDCOCP0394",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-log-fund-mutual-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0394",
        "nextJobs": "PBILCP0008",
        "prevJobs": "PDCOCP0393",
        "jobExec": "pdco-pdco-retailbusinessbanking-log-fund-mutual-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0395",
        "nextJobs": "PDCOCP0396",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-mutual-funds-quotations-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0396",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0395",
        "jobExec": "pdco-pdco-retailbusinessbanking-mutual-funds-quotations-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0397",
        "nextJobs": "PDCOCP0398",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-retentions-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0398",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0397",
        "jobExec": "pdco-pdco-retailbusinessbanking-retentions-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0399",
        "nextJobs": "PDCOCP0440",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-establishments-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0440",
        "nextJobs": "PKMOLCP0P02, PKMOLCP0P05",
        "prevJobs": "PDCOCP0399",
        "jobExec": "pdco-pdco-retailbusinessbanking-establishments-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0443",
        "nextJobs": "PDCOCP0444",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-telephone-banking-ivr-mov-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0444",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0443",
        "jobExec": "pdco-pdco-retailbusinessbanking-telephone-banking-ivr-mov-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0445",
        "nextJobs": "PDCOCP0446",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-collection-center-catalog-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0446",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0445",
        "jobExec": "pdco-pdco-retailbusinessbanking-collection-center-catalog-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0447",
        "nextJobs": "PDCOCP0448",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-establishments-agents-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0448",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0447",
        "jobExec": "pdco-pdco-retailbusinessbanking-establishments-agents-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0449",
        "nextJobs": "PDCOCP0450",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-terminal-agents-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0450",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0449",
        "jobExec": "pdco-pdco-retailbusinessbanking-terminal-agents-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0451",
        "nextJobs": "PDCOCP0452",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-station-terminal-agents-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0452",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0451",
        "jobExec": "pdco-pdco-retailbusinessbanking-station-terminal-agents-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0453",
        "nextJobs": "PDCOCP0454",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-mobile-banking-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0454",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0453",
        "jobExec": "pdco-pdco-retailbusinessbanking-mobile-banking-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0457",
        "nextJobs": "PDCOCP0458",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-cashier-atm-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0458",
        "nextJobs": "PCTDCP0P02",
        "prevJobs": "PDCOCP0457",
        "jobExec": "pdco-pdco-retailbusinessbanking-cashier-atm-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A22",
        "nextJobs": "PDCOCP0P22",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-addressaccount-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P22",
        "nextJobs": "PDCOCP0B22",
        "prevJobs": "PDCOCP0A22",
        "jobExec": "pdco-pdco-addressaccount-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0B22",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0P22",
        "jobExec": "pdco-pdco-borrado-staging",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A23",
        "nextJobs": "PDCOCP0P23",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-complementarydocuments-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P23",
        "nextJobs": "PDCOCP0B23",
        "prevJobs": "PDCOCP0A23",
        "jobExec": "pdco-pdco-complementarydocuments-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0B23",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0P23",
        "jobExec": "pdco-pdco-borrado-staging",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A24",
        "nextJobs": "PDCOCP0P24, PDCOTP0052",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerphones-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P24",
        "nextJobs": "PDCOCP0B24",
        "prevJobs": "PDCOCP0A24",
        "jobExec": "pdco-pdco-customerphones-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0B24",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0P24, PDCOTP0052",
        "jobExec": "pdco-pdco-borrado-staging",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0A25",
        "nextJobs": "PDCOCP0P25, PDCOTP0053",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customeremails-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0P25",
        "nextJobs": "PDCOCP0B25",
        "prevJobs": "PDCOCP0A25",
        "jobExec": "pdco-pdco-customeremails-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0B25",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0P25, PDCOTP0053",
        "jobExec": "pdco-pdco-borrado-staging",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0083",
        "nextJobs": "PCDOCP4002, PBILCP0014",
        "prevJobs": "PDCOCP0082",
        "jobExec": "pdco-pdco-finance-balance-monthly-local-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0503",
        "nextJobs": "PDCOCP0504",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-risk-daily-transactional-rcd-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0504",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0503",
        "jobExec": "pdco-pdco-risk-daily-transactional-rcd-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0489",
        "nextJobs": "PDCOCP0490",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-bail-bond-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0490",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0489",
        "jobExec": "pdco-pdco-finance-bail-bond-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0491",
        "nextJobs": "PDCOCP0492",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-conform-letter-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0492",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0491",
        "jobExec": "pdco-pdco-finance-conform-letter-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0493",
        "nextJobs": "PDCOCP0494",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-letter-engagement-gntee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0494",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0493",
        "jobExec": "pdco-pdco-finance-letter-engagement-gntee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0495",
        "nextJobs": "PDCOCP0496",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-accountant-log-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0496",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0495",
        "jobExec": "pdco-pdco-finance-accountant-log-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0497",
        "nextJobs": "PDCOCP0498",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-trade-pledge-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0498",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0497",
        "jobExec": "pdco-pdco-finance-trade-pledge-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0505",
        "nextJobs": "PDCOCP0506",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-against-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0506",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0505",
        "jobExec": "pdco-pdco-finance-against-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0507",
        "nextJobs": "PDCOCP0508",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-stocks-bonds-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0508",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0507",
        "jobExec": "pdco-pdco-finance-stocks-bonds-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0509",
        "nextJobs": "PDCOCP0510",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-values-pledge-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0510",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0509",
        "jobExec": "pdco-pdco-finance-values-pledge-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0511",
        "nextJobs": "PDCOCP0512",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-guarantee-letters-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0512",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0511",
        "jobExec": "pdco-pdco-finance-guarantee-letters-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0513",
        "nextJobs": "PDCOCP0514",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-no-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0514",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0513",
        "jobExec": "pdco-pdco-finance-no-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0515",
        "nextJobs": "PDCOCP0516",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-cbme-cbmn-certi-guarant-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0516",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0515",
        "jobExec": "pdco-pdco-finance-cbme-cbmn-certi-guarant-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0517",
        "nextJobs": "PDCOCP0518",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-appraisals-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0518",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0517",
        "jobExec": "pdco-pdco-finance-appraisals-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0019",
        "nextJobs": "PDCOCP0234",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0025.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0234",
        "nextJobs": "PDCOCP0247",
        "prevJobs": "PDCOTP0019",
        "jobExec": "pdco-pdco-customerinformation-fuvex-high-base-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0247",
        "nextJobs": "PBILCP0013",
        "prevJobs": "PDCOCP0234",
        "jobExec": "pdco-pdco-customerinformation-fuvex-high-base-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0035",
        "nextJobs": "PDCOCP0376",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0038.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0376",
        "nextJobs": "PDCOCP0297",
        "prevJobs": "PDCOTP0035",
        "jobExec": "pdco-pdco-customerinformation-call-me-back-form-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0036",
        "nextJobs": "PDCOCP0377",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0039.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0377",
        "nextJobs": "PDCOCP0233",
        "prevJobs": "PDCOTP0036",
        "jobExec": "pdco-pdco-customerinformation-no-customers-form-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0037",
        "nextJobs": "PDCOCP0378",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0040.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0378",
        "nextJobs": "PDCOCP0209",
        "prevJobs": "PDCOTP0037",
        "jobExec": "pdco-pdco-customerinformation-remarketing-form-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0462",
        "nextJobs": "PDCOCP0463",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-fee-clct-pend-netcash-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0463",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0462",
        "jobExec": "pdco-pdco-retailbusinessbanking-fee-collection-netcash-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0464",
        "nextJobs": "PDCOCP0465",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-fee-clct-chrg-netcash-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0465",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0464",
        "jobExec": "pdco-pdco-retailbusinessbanking-fee-collection-netcash-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0499",
        "nextJobs": "PDCOCP0500",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-pending-payroll-load-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0500",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0499",
        "jobExec": "pdco-pdco-retailbusinessbanking-payroll-load-proc-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0501",
        "nextJobs": "PDCOCP0502",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-paid-payroll-load-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0502",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0501",
        "jobExec": "pdco-pdco-retailbusinessbanking-payroll-load-proc-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0519",
        "nextJobs": "PDCOCP0520",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-mortgage-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0520",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0519",
        "jobExec": "pdco-pdco-finance-mortgage-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0521",
        "nextJobs": "PDCOCP0522",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-inds-pledge-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0522",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0521",
        "jobExec": "pdco-pdco-finance-inds-pledge-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0523",
        "nextJobs": "PDCOCP0524",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-mining-pledge-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0524",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0523",
        "jobExec": "pdco-pdco-finance-mining-pledge-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0525",
        "nextJobs": "PDCOCP0526",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-trnsp-pledge-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0526",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0525",
        "jobExec": "pdco-pdco-finance-trnsp-pledge-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0527",
        "nextJobs": "PDCOCP0528",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-vehicle-pledge-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0528",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0527",
        "jobExec": "pdco-pdco-finance-vehicle-pledge-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0529",
        "nextJobs": "PDCOCP0530",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-agricultural-pledge-gntee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0530",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0529",
        "jobExec": "pdco-pdco-finance-agricultural-pledge-gntee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0531",
        "nextJobs": "PDCOCP0532",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-super-deposit-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0532",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0531",
        "jobExec": "pdco-pdco-finance-super-deposit-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0533",
        "nextJobs": "PDCOCP0534",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-warrant-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0534",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0533",
        "jobExec": "pdco-pdco-finance-warrant-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0535",
        "nextJobs": "PDCOCP0536",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-term-deposit-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0536",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0535",
        "jobExec": "pdco-pdco-finance-term-deposit-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0537",
        "nextJobs": "PDCOCP0538",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-accounts-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0538",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0537",
        "jobExec": "pdco-pdco-finance-accounts-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0539",
        "nextJobs": "PDCOCP0540",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-standby-letter-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0540",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0539",
        "jobExec": "pdco-pdco-finance-standby-letter-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0541",
        "nextJobs": "PDCOCP0542",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-bail-banking-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0542",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0541",
        "jobExec": "pdco-pdco-finance-bail-banking-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0543",
        "nextJobs": "PDCOCP0544",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-mutual-fund-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0544",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0543",
        "jobExec": "pdco-pdco-finance-mutual-fund-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0545",
        "nextJobs": "PDCOCP0546",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-link-table-guarantee-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0546",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0545",
        "jobExec": "pdco-pdco-finance-link-table-guarantee-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0547",
        "nextJobs": "PDCOCP0548",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-rof-fx-exchange-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0548",
        "nextJobs": "PBILCP0028",
        "prevJobs": "PDCOCP0547",
        "jobExec": "pdco-pdco-finance-rof-fx-exchange-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0579",
        "nextJobs": "PDCOCP0580",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-instlmnt-credit-card-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0580",
        "nextJobs": "PBILCP0004",
        "prevJobs": "PDCOCP0579",
        "jobExec": "pdco-pdco-retailbusinessbanking-instlmnt-credit-card-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0581",
        "nextJobs": "PDCOCP0582",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-endorsements-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0582",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0581",
        "jobExec": "pdco-pdco-customerinformation-endorsements-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0583",
        "nextJobs": "PDCOCP0584",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-confg-campaign-pocket-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0584",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0583",
        "jobExec": "pdco-pdco-customerinformation-confg-campaign-pocket-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0585",
        "nextJobs": "PDCOCP0586",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-affil-savings-goal-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0586",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0585",
        "jobExec": "pdco-pdco-customerinformation-affil-savings-goal-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0587",
        "nextJobs": "PDCOCP0588",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-mov-savings-goal-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0588",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0587",
        "jobExec": "pdco-pdco-customerinformation-mov-savings-goal-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0589",
        "nextJobs": "PDCOCP0590",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-bonuses-pocket-cmpgn-det-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0590",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0589",
        "jobExec": "pdco-pdco-customerinformation-bonuses-pocket-cmpgn-det-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0591",
        "nextJobs": "PDCOCP0592",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-campaign-pocket-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0592",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0591",
        "jobExec": "pdco-pdco-customerinformation-campaign-pocket-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0031",
        "nextJobs": "PDCOCP0549",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0057.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0549",
        "nextJobs": "PDCOCP0550",
        "prevJobs": "PDCOTP0031",
        "jobExec": "pdco-pdco-risk-risk-segments-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0550",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0549",
        "jobExec": "pdco-pdco-risk-risk-segments-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0573",
        "nextJobs": "PDCOCP0574",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-economic-group-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0574",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0573",
        "jobExec": "pdco-pdco-retailbusinessbanking-economic-group-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0575",
        "nextJobs": "PDCOCP0576",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-relnshp-btwn-cust-co-grp-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0576",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0575",
        "jobExec": "pdco-pdco-retailbusinessbanking-relnshp-btwn-cust-co-grp-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0297",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0376",
        "jobExec": "pdco-pdco-customerinformation-web-form-client-tracking-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0233",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0377",
        "jobExec": "pdco-pdco-customerinformation-web-form-client-tracking-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0209",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0378",
        "jobExec": "pdco-pdco-customerinformation-web-form-client-tracking-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0043",
        "nextJobs": "PDCOWP0001",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0068.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOWP0001",
        "nextJobs": "PDCOCP0551",
        "prevJobs": "PDCOTP0043",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0551",
        "nextJobs": "PDCOCP0552",
        "prevJobs": "PDCOWP0001",
        "jobExec": "pdco-pdco-risk-management-information-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0552",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0551",
        "jobExec": "pdco-pdco-risk-management-information-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0044",
        "nextJobs": "PDCOCP0553",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0069.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0553",
        "nextJobs": "PDCOCP0554",
        "prevJobs": "PDCOTP0044",
        "jobExec": "pdco-pdco-risk-management-catalog-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0554",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0553",
        "jobExec": "pdco-pdco-risk-management-catalog-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0045",
        "nextJobs": "PDCOCP0555",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0070.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0555",
        "nextJobs": "PDCOCP0556",
        "prevJobs": "PDCOTP0045",
        "jobExec": "pdco-pdco-risk-action-type-catalog-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0556",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0555",
        "jobExec": "pdco-pdco-risk-action-type-catalog-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0046",
        "nextJobs": "PDCOCP0557",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0071.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0557",
        "nextJobs": "PDCOCP0558",
        "prevJobs": "PDCOTP0046",
        "jobExec": "pdco-pdco-risk-contact-type-catalog-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0558",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0557",
        "jobExec": "pdco-pdco-risk-contact-type-catalog-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0047",
        "nextJobs": "PDCOCP0559",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0072.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0559",
        "nextJobs": "PDCOCP0560",
        "prevJobs": "PDCOTP0047",
        "jobExec": "pdco-pdco-risk-agency-catalog-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0560",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0559",
        "jobExec": "pdco-pdco-risk-agency-catalog-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0048",
        "nextJobs": "PDCOCP0561",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0073.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0561",
        "nextJobs": "PDCOCP0562",
        "prevJobs": "PDCOTP0048",
        "jobExec": "pdco-pdco-risk-agency-group-catalog-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0562",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0561",
        "jobExec": "pdco-pdco-risk-agency-group-catalog-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0049",
        "nextJobs": "PDCOCP0563",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0074.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0563",
        "nextJobs": "PDCOCP0564",
        "prevJobs": "PDCOTP0049",
        "jobExec": "pdco-pdco-risk-user-catalog-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0564",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0563",
        "jobExec": "pdco-pdco-risk-user-catalog-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0050",
        "nextJobs": "PDCOCP0565",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0075.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0565",
        "nextJobs": "PDCOCP0566",
        "prevJobs": "PDCOTP0050",
        "jobExec": "pdco-pdco-risk-user-type-catalog-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0566",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0565",
        "jobExec": "pdco-pdco-risk-user-type-catalog-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0567",
        "nextJobs": "PDCOCP0568",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-contract-stock-loan-appl-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0568",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0567",
        "jobExec": "pdco-pdco-retailbusinessbanking-contract-stock-loan-appl-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0609",
        "nextJobs": "PDCOCP0610",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-cross-pen-overdue-debt-cards-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0610",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0609",
        "jobExec": "pdco-pdco-cross-pen-overdue-debt-cards-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0611",
        "nextJobs": "PDCOCP0612",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-cross-usd-overdue-debt-cards-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0612",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0611",
        "jobExec": "pdco-pdco-cross-usd-overdue-debt-cards-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0577",
        "nextJobs": "PDCOCP0578",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-cross-detail-overdue-debt-cards-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0578",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0577",
        "jobExec": "pdco-pdco-cross-detail-overdue-debt-cards-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0601",
        "nextJobs": "PDCOCP0602",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-customerinformation-personal-account-overd-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0602",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0601",
        "jobExec": "pdco-pdco-customerinformation-personal-account-overd-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0605",
        "nextJobs": "PDCOCP0606",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-canceled-loans-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0606",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0605",
        "jobExec": "pdco-pdco-finance-canceled-loans-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0607",
        "nextJobs": "PDCOCP0608",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-finance-incidences-loans-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0608",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0607",
        "jobExec": "pdco-pdco-finance-incidences-loans-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0617",
        "nextJobs": "PDCOCP0618",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-insurance-master-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0619",
        "nextJobs": "PDCOCP0620",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-detl-debt-setl-cards-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0618",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0617",
        "jobExec": "pdco-pdco-retailbusinessbanking-insurance-master-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0620",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0619",
        "jobExec": "pdco-pdco-retailbusinessbanking-detl-debt-setl-cards-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0613",
        "nextJobs": "PDCOCP0614",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-master-leasing-contracts-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0614",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0613",
        "jobExec": "pdco-pdco-retailbusinessbanking-master-leasing-contracts-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0615",
        "nextJobs": "PDCOCP0616",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pdco-retailbusinessbanking-income-installments-info-raw",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0616",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0615",
        "jobExec": "pdco-pdco-retailbusinessbanking-income-installments-info-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0020",
        "nextJobs": "PDCOCP0296",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0024.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0296",
        "nextJobs": "PDCOCP0418",
        "prevJobs": "PDCOTP0020",
        "jobExec": "pdco-pdco-retailbusinessbanking-log-claim-mov-raw",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0418",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0296",
        "jobExec": "pdco-pdco-retailbusinessbanking-log-claim-mov-master",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0051",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0429",
        "jobExec": "TX_PDCOCD0003.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0052",
        "nextJobs": "PDCOCP0B24",
        "prevJobs": "PDCOCP0A24",
        "jobExec": "TX_PDCOCD0004.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0053",
        "nextJobs": "PDCOCP0B25",
        "prevJobs": "PDCOCP0A25",
        "jobExec": "TX_PDCOCD0005.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0621",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "pdco-pe-spk-inm-ingestvalidation-01",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0056",
        "nextJobs": "PDCOCP0631",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0020.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0631",
        "nextJobs": "PDCOCP0632",
        "prevJobs": "PDCOTP0056",
        "jobExec": "pdco-pdco-cross-branch-geo-influence-avro",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0632",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0631",
        "jobExec": "pdco-pdco-cross-branch-geo-influence-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0057",
        "nextJobs": "PDCOWP0002",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0111.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOWP0002",
        "nextJobs": "PDCOCP0634",
        "prevJobs": "PDCOTP0057",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0634",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOWP0002",
        "jobExec": "pdco-pdco-risk-employees-debt-level-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0058",
        "nextJobs": "PDCOWP0003",
        "prevJobs": "#N/A",
        "jobExec": "RX_PDCOCD0112.sh",
        "isBase": true,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOWP0003",
        "nextJobs": "PDCOCP0635",
        "prevJobs": "PDCOTP0058",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOCP0635",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOWP0003",
        "jobExec": "pdco-pdco-risk-employees-debt-level-parquet",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PDCOTP0059",
        "nextJobs": "#N/A",
        "prevJobs": "PDCOCP0004",
        "jobExec": "TX_PDCOCD0008.sh",
        "isBase": false,
        "path": "./xmls/Local/PDCO/CR-PEDCODIA-T02.xml"
      },
      {
        "job": "PLOGCP0001",
        "nextJobs": "PLOGCP0002",
        "prevJobs": "#N/A",
        "jobExec": "plog-pe-spk-qlt-logoperationsaexs-01",
        "isBase": true,
        "path": "./xmls/Local/PLOG/CR-PELOGDIA-T02.xml"
      },
      {
        "job": "PLOGCP0002",
        "nextJobs": "PLOGCP0003, PLOGCP0004",
        "prevJobs": "PLOGCP0001",
        "jobExec": "plog-pe-krb-inr-logoperationsaexp-01",
        "isBase": false,
        "path": "./xmls/Local/PLOG/CR-PELOGDIA-T02.xml"
      },
      {
        "job": "PLOGCP0003",
        "nextJobs": "#N/A",
        "prevJobs": "PLOGCP0002",
        "jobExec": "plog-pe-spk-qlt-logoperationsaexr-01",
        "isBase": false,
        "path": "./xmls/Local/PLOG/CR-PELOGDIA-T02.xml"
      },
      {
        "job": "PLOGCP0004",
        "nextJobs": "PLOGCP0005",
        "prevJobs": "PLOGCP0002",
        "jobExec": "plog-pe-krb-inm-logoperationsaexp-01",
        "isBase": false,
        "path": "./xmls/Local/PLOG/CR-PELOGDIA-T02.xml"
      },
      {
        "job": "PLOGCP0005",
        "nextJobs": "PLOGCP0006",
        "prevJobs": "PLOGCP0004",
        "jobExec": "plog-pe-spk-qlt-logoperationsaexm-01",
        "isBase": false,
        "path": "./xmls/Local/PLOG/CR-PELOGDIA-T02.xml"
      },
      {
        "job": "PLOGCP0006",
        "nextJobs": "#N/A",
        "prevJobs": "PLOGCP0005",
        "jobExec": "plog-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PLOG/CR-PELOGDIA-T02.xml"
      },
      {
        "job": "PSANCP4001",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-inm-lineincrease-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4H01",
        "nextJobs": "PSANCP4I01",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-migratedctrctinvtys-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4I01",
        "nextJobs": "PSANCP4H02, PSANCP4I02",
        "prevJobs": "PSANCP4H01",
        "jobExec": "psan-pe-krb-inr-migratedctrctinvtyp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4H02",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4I01",
        "jobExec": "psan-pe-spk-qlt-migratedctrctinvtyr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4I02",
        "nextJobs": "PSANCP4H03",
        "prevJobs": "PSANCP4I01",
        "jobExec": "psan-pe-krb-inm-migratedctrctinvtyp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4H03",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4I02",
        "jobExec": "psan-pe-spk-qlt-migratedctrctinvtym-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANTP4001",
        "nextJobs": "PSANCP4H04",
        "prevJobs": "#N/A",
        "jobExec": "RX_PSANCD0002.sh",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4H04",
        "nextJobs": "PSANCP4I03",
        "prevJobs": "PSANTP4001",
        "jobExec": "psan-pe-spk-qlt-mthlyslsfuvslrypmtctss-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4I03",
        "nextJobs": "PSANCP4H05, PSANCP4I04",
        "prevJobs": "PSANCP4H04",
        "jobExec": "psan-pe-krb-inr-mthlyslsfuvslrypmtctsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4H05",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4I03",
        "jobExec": "psan-pe-spk-qlt-mthlyslsfuvslrypmtctsr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4I04",
        "nextJobs": "PSANCP4H06",
        "prevJobs": "PSANCP4I03",
        "jobExec": "psan-pe-krb-inm-mthlyslsfuvslrypmtctsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4H06",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4I04",
        "jobExec": "psan-pe-spk-qlt-mthlyslsfuvslrypmtctsm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANTP4002",
        "nextJobs": "PSANCP4H07",
        "prevJobs": "#N/A",
        "jobExec": "RX_PSANCD0003.sh",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4H07",
        "nextJobs": "PSANCP4I05",
        "prevJobs": "PSANTP4002",
        "jobExec": "psan-pe-spk-qlt-chplcdsbcdfuvcnsmlyctrs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4I05",
        "nextJobs": "PSANCP4H08, PSANCP4I06",
        "prevJobs": "PSANCP4H07",
        "jobExec": "psan-pe-krb-inr-chplcdsbcdfuvcnsmlyctrp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4H08",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4I05",
        "jobExec": "psan-pe-spk-qlt-chplcdsbcdfuvcnsmlyctrr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4I06",
        "nextJobs": "PSANCP4H09",
        "prevJobs": "PSANCP4I05",
        "jobExec": "psan-pe-krb-inm-chplcdsbcdfuvcnsmlyctrp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4H09",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4I06",
        "jobExec": "psan-pe-spk-qlt-chplcdsbcdfuvcnsmlyctrm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4002",
        "nextJobs": "PSANCP4003",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-contractaveragebalancess-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4003",
        "nextJobs": "PSANCP4004, PSANCP4005",
        "prevJobs": "PSANCP4002",
        "jobExec": "psan-pe-krb-inr-contractaveragebalancesp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4004",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4003",
        "jobExec": "psan-pe-spk-qlt-contractaveragebalancesr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4005",
        "nextJobs": "PSANCP4006, PCDOCP4040",
        "prevJobs": "PSANCP4003",
        "jobExec": "psan-pe-krb-inm-contractaveragebalancesp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4006",
        "nextJobs": "PSANCP4007",
        "prevJobs": "PSANCP4005",
        "jobExec": "psan-pe-spk-qlt-contractaveragebalancesm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4007",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4006",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4008",
        "nextJobs": "PSANCP4009",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlysavingacctmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4009",
        "nextJobs": "PSANCP4010, PSANCP4011",
        "prevJobs": "PSANCP4008",
        "jobExec": "psan-pe-krb-inr-mlysavingacctmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4010",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4009",
        "jobExec": "psan-pe-spk-qlt-mlysavingacctmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4011",
        "nextJobs": "PSANCP4012, PSANCP4013",
        "prevJobs": "PSANCP4009",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4012",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4011",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4013",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4011",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4014",
        "nextJobs": "PSANCP4015",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlycrtosettlemiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4015",
        "nextJobs": "PSANCP4016, PSANCP4017",
        "prevJobs": "PSANCP4014",
        "jobExec": "psan-pe-krb-inr-mlycrtosettlemisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4016",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4015",
        "jobExec": "psan-pe-spk-qlt-mlycrtosettlemisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4017",
        "nextJobs": "PSANCP4018, PSANCP4019",
        "prevJobs": "PSANCP4015",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4018",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4017",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4019",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4017",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4020",
        "nextJobs": "PSANCP4021",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlyctgfrgntrdmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4021",
        "nextJobs": "PSANCP4022, PSANCP4023",
        "prevJobs": "PSANCP4020",
        "jobExec": "psan-pe-krb-inr-mlyctgfrgntrdmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4022",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4021",
        "jobExec": "psan-pe-spk-qlt-mlyctgfrgntrdmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4023",
        "nextJobs": "PSANCP4024, PSANCP4025",
        "prevJobs": "PSANCP4021",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4024",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4023",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4025",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4023",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4026",
        "nextJobs": "PSANCP4027",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlyctsmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4027",
        "nextJobs": "PSANCP4028, PSANCP4029",
        "prevJobs": "PSANCP4026",
        "jobExec": "psan-pe-krb-inr-mlyctsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4028",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4027",
        "jobExec": "psan-pe-spk-qlt-mlyctsmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4029",
        "nextJobs": "PSANCP4030, PSANCP4031",
        "prevJobs": "PSANCP4027",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4030",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4029",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4031",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4029",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4032",
        "nextJobs": "PSANCP4033",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlyguaranteemiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4033",
        "nextJobs": "PSANCP4034, PSANCP4035",
        "prevJobs": "PSANCP4032",
        "jobExec": "psan-pe-krb-inr-mlyguaranteemisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4034",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4033",
        "jobExec": "psan-pe-spk-qlt-mlyguaranteemisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4035",
        "nextJobs": "PSANCP4036, PSANCP4037",
        "prevJobs": "PSANCP4033",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4036",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4035",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4037",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4035",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4038",
        "nextJobs": "PSANCP4039",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlyfrgntrdfincgmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4039",
        "nextJobs": "PSANCP4040, PSANCP4041",
        "prevJobs": "PSANCP4038",
        "jobExec": "psan-pe-krb-inr-mlyfrgntrdfincgmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4040",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4039",
        "jobExec": "psan-pe-spk-qlt-mlyfrgntrdfincgmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4041",
        "nextJobs": "PSANCP4042, PSANCP4043",
        "prevJobs": "PSANCP4039",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4042",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4041",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4043",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4041",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4044",
        "nextJobs": "PSANCP4045",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlyinsurancemiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4045",
        "nextJobs": "PSANCP4046, PSANCP4047",
        "prevJobs": "PSANCP4044",
        "jobExec": "psan-pe-krb-inr-mlyinsurancemisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4046",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4045",
        "jobExec": "psan-pe-spk-qlt-mlyinsurancemisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4047",
        "nextJobs": "PSANCP4048, PSANCP4049",
        "prevJobs": "PSANCP4045",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4048",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4047",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4049",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4047",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4050",
        "nextJobs": "PSANCP4051",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlyleasingmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4051",
        "nextJobs": "PSANCP4052, PSANCP4053",
        "prevJobs": "PSANCP4050",
        "jobExec": "psan-pe-krb-inr-mlyleasingmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4052",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4051",
        "jobExec": "psan-pe-spk-qlt-mlyleasingmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4053",
        "nextJobs": "PSANCP4054, PSANCP4055",
        "prevJobs": "PSANCP4051",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4054",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4053",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4055",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4053",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4056",
        "nextJobs": "PSANCP4057",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlylegalmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4057",
        "nextJobs": "PSANCP4058, PSANCP4059",
        "prevJobs": "PSANCP4056",
        "jobExec": "psan-pe-krb-inr-mlylegalmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4058",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4057",
        "jobExec": "psan-pe-spk-qlt-mlylegalmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4059",
        "nextJobs": "PSANCP4060, PSANCP4061",
        "prevJobs": "PSANCP4057",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4060",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4059",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4061",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4059",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4062",
        "nextJobs": "PSANCP4063",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlyloansmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4063",
        "nextJobs": "PSANCP4064, PSANCP4065",
        "prevJobs": "PSANCP4062",
        "jobExec": "psan-pe-krb-inr-mlyloansmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4064",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4063",
        "jobExec": "psan-pe-spk-qlt-mlyloansmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4065",
        "nextJobs": "PSANCP4066, PSANCP4067",
        "prevJobs": "PSANCP4063",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4066",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4065",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4067",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4065",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4068",
        "nextJobs": "PSANCP4069",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlyloanpfoliomiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4069",
        "nextJobs": "PSANCP4070, PSANCP4071",
        "prevJobs": "PSANCP4068",
        "jobExec": "psan-pe-krb-inr-mlyloanpfoliomisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4070",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4069",
        "jobExec": "psan-pe-spk-qlt-mlyloanpfoliomisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4071",
        "nextJobs": "PSANCP4072, PSANCP4073",
        "prevJobs": "PSANCP4069",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4072",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4071",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4073",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4071",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4074",
        "nextJobs": "PSANCP4075",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlylocchkgacmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4075",
        "nextJobs": "PSANCP4076, PSANCP4077",
        "prevJobs": "PSANCP4074",
        "jobExec": "psan-pe-krb-inr-mlylocchkgacmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4076",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4075",
        "jobExec": "psan-pe-spk-qlt-mlylocchkgacmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4077",
        "nextJobs": "PSANCP4078, PSANCP4079",
        "prevJobs": "PSANCP4075",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4078",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4077",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4079",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4077",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4080",
        "nextJobs": "PSANCP4081",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlylocleasingmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4081",
        "nextJobs": "PSANCP4082, PSANCP4083",
        "prevJobs": "PSANCP4080",
        "jobExec": "psan-pe-krb-inr-mlylocleasingmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4082",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4081",
        "jobExec": "psan-pe-spk-qlt-mlylocleasingmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4083",
        "nextJobs": "PSANCP4084, PSANCP4085",
        "prevJobs": "PSANCP4081",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4084",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4083",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4085",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4083",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4086",
        "nextJobs": "PSANCP4087",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlyloanlocmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4087",
        "nextJobs": "PSANCP4088, PSANCP4089",
        "prevJobs": "PSANCP4086",
        "jobExec": "psan-pe-krb-inr-mlyloanlocmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4088",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4087",
        "jobExec": "psan-pe-spk-qlt-mlyloanlocmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4089",
        "nextJobs": "PSANCP4090, PSANCP4091",
        "prevJobs": "PSANCP4087",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4090",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4089",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4091",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4089",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4092",
        "nextJobs": "PSANCP4093",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlypmtmethlocmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4093",
        "nextJobs": "PSANCP4094, PSANCP4095",
        "prevJobs": "PSANCP4092",
        "jobExec": "psan-pe-krb-inr-mlypmtmethlocmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4094",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4093",
        "jobExec": "psan-pe-spk-qlt-mlypmtmethlocmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4095",
        "nextJobs": "PSANCP4096, PSANCP4097",
        "prevJobs": "PSANCP4093",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4096",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4095",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4097",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4095",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4098",
        "nextJobs": "PSANCP4099",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlymutualfundsmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4099",
        "nextJobs": "PSANCP4100, PSANCP4101",
        "prevJobs": "PSANCP4098",
        "jobExec": "psan-pe-krb-inr-mlymutualfundsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4100",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4099",
        "jobExec": "psan-pe-spk-qlt-mlymutualfundsmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4101",
        "nextJobs": "PSANCP4102, PSANCP4103",
        "prevJobs": "PSANCP4099",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4102",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4101",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4103",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4101",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4104",
        "nextJobs": "PSANCP4105",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlyeffpfoliomiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4105",
        "nextJobs": "PSANCP4106, PSANCP4107",
        "prevJobs": "PSANCP4104",
        "jobExec": "psan-pe-krb-inr-mlyeffpfoliomisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4106",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4105",
        "jobExec": "psan-pe-spk-qlt-mlyeffpfoliomisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4107",
        "nextJobs": "PSANCP4108, PSANCP4109",
        "prevJobs": "PSANCP4105",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4108",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4107",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4109",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4107",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4110",
        "nextJobs": "PSANCP4111",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlyriskcardsmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4111",
        "nextJobs": "PSANCP4112, PSANCP4113",
        "prevJobs": "PSANCP4110",
        "jobExec": "psan-pe-krb-inr-mlyriskcardsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4112",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4111",
        "jobExec": "psan-pe-spk-qlt-mlyriskcardsmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4113",
        "nextJobs": "PSANCP4114, PSANCP4115",
        "prevJobs": "PSANCP4111",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4114",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4113",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4115",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4113",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4116",
        "nextJobs": "PSANCP4117",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlysectycustdmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4117",
        "nextJobs": "PSANCP4118, PSANCP4119",
        "prevJobs": "PSANCP4116",
        "jobExec": "psan-pe-krb-inr-mlysectycustdmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4118",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4117",
        "jobExec": "psan-pe-spk-qlt-mlysectycustdmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4119",
        "nextJobs": "PSANCP4120, PSANCP4121",
        "prevJobs": "PSANCP4117",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4120",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4119",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4121",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4119",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4122",
        "nextJobs": "PSANCP4123",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mlytermacctmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4123",
        "nextJobs": "PSANCP4124, PSANCP4125",
        "prevJobs": "PSANCP4122",
        "jobExec": "psan-pe-krb-inr-mlytermacctmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4124",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4123",
        "jobExec": "psan-pe-spk-qlt-mlytermacctmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4125",
        "nextJobs": "PSANCP4126, PSANCP4127",
        "prevJobs": "PSANCP4123",
        "jobExec": "psan-pe-krb-inm-mlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4126",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4125",
        "jobExec": "psan-pe-spk-qlt-mlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP4127",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP4125",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANMEN-T02.xml"
      },
      {
        "job": "PSANCP0RUB",
        "nextJobs": "PSANCP0CON, PCOGCP0DF0, PCOGCP0SHI",
        "prevJobs": "#N/A",
        "jobExec": "#N/A",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0CO2",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0CON",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0EML",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0CON",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0CON",
        "nextJobs": "PSANCP0CO2, PSANCP0EML, PSANCP0MET, PSANCP0CHA, PSANCP0ACC, PSANCP0SHI",
        "prevJobs": "PSANCP0RUB",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0MET",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0CON",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0CHA",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0CON",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0ACC",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0CON",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0SHI",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0CON",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANWP0F01",
        "nextJobs": "PSANCP0A01",
        "prevJobs": "#N/A",
        "jobExec": "#N/A",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0A01",
        "nextJobs": "PSANCP0P01",
        "prevJobs": "PSANWP0F01",
        "jobExec": "psan-pe-krb-inr-directdebitsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0P01",
        "nextJobs": "PSANCP0B01, PCTDCP0P02",
        "prevJobs": "PSANCP0A01",
        "jobExec": "psan-pe-krb-inm-directdebitsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0B01",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0P01",
        "jobExec": "hdfsdelete",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I07",
        "nextJobs": "PSANCP0I08, PSANCP0H02",
        "prevJobs": "PSANCP0H01",
        "jobExec": "psan-pe-krb-inr-managersandchannelsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I08",
        "nextJobs": "PSANCP0H03, PBILCP0015",
        "prevJobs": "PSANCP0I07",
        "jobExec": "psan-pe-krb-inm-managersandchannelsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H01",
        "nextJobs": "PSANCP0I07",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-managersandchannelss-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H02",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I07",
        "jobExec": "psan-pe-spk-qlt-managersandchannelsr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H03",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I08",
        "jobExec": "psan-pe-spk-qlt-managersandchannelsm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H04",
        "nextJobs": "PSANCP0I09",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-frgntrdtblappauxinfos-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I09",
        "nextJobs": "PSANCP0H05, PSANCP0I10",
        "prevJobs": "PSANCP0H04",
        "jobExec": "psan-pe-krb-inr-frgntrdtblappauxinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H05",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I09",
        "jobExec": "psan-pe-spk-qlt-frgntrdtblappauxinfor-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I10",
        "nextJobs": "PSANCP0H06",
        "prevJobs": "PSANCP0I09",
        "jobExec": "psan-pe-krb-inm-frgntrdtblappauxinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H06",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I10",
        "jobExec": "psan-pe-spk-qlt-frgntrdtblappauxinfom-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANTP0001",
        "nextJobs": "PSANCP0H07",
        "prevJobs": "#N/A",
        "jobExec": "RX_PSANCD0001.sh",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H07",
        "nextJobs": "PSANWP0F02",
        "prevJobs": "PSANTP0001",
        "jobExec": "psan-pe-spk-qlt-dlyslsfuvslrypmtctss-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANWP0F02",
        "nextJobs": "PSANCP0I11",
        "prevJobs": "PSANCP0H07",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I11",
        "nextJobs": "PSANCP0H08, PSANCP0I12",
        "prevJobs": "PSANWP0F02",
        "jobExec": "psan-pe-krb-inr-dlyslsfuvslrypmtctsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H08",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I11",
        "jobExec": "psan-pe-spk-qlt-dlyslsfuvslrypmtctsr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I12",
        "nextJobs": "PSANCP0H09",
        "prevJobs": "PSANCP0I11",
        "jobExec": "psan-pe-krb-inm-dlyslsfuvslrypmtctsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H09",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I12",
        "jobExec": "psan-pe-spk-qlt-dlyslsfuvslrypmtctsm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H10",
        "nextJobs": "PSANCP0I13",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-toccontractbases-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I13",
        "nextJobs": "PSANCP0H11, PSANCP0I14",
        "prevJobs": "PSANCP0H10",
        "jobExec": "psan-pe-krb-inr-toccontractbasep-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H11",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I13",
        "jobExec": "psan-pe-spk-qlt-toccontractbaser-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I14",
        "nextJobs": "PSANCP0H12, PBILCP0019",
        "prevJobs": "PSANCP0I13",
        "jobExec": "psan-pe-krb-inm-toccontractbasep-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H12",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I14",
        "jobExec": "psan-pe-spk-qlt-toccontractbasem-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H13",
        "nextJobs": "PSANCP0I15",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-parallellinescontracts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I15",
        "nextJobs": "PSANCP0H14, PSANCP0H15",
        "prevJobs": "PSANCP0H13",
        "jobExec": "psan-pe-krb-inr-parallellinescontractp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I17",
        "nextJobs": "PSANCP0H17, PBILCP0013, PKMOLCP0P02",
        "prevJobs": "PSANCP0I16",
        "jobExec": "psan-pe-krb-inm-cardcontractmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H17",
        "nextJobs": "PKSANCP0P01",
        "prevJobs": "PSANCP0I17",
        "jobExec": "psan-pe-spk-qlt-cardcontractmasterm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H14",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I15",
        "jobExec": "psan-pe-spk-qlt-parallellinescontractr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H15",
        "nextJobs": "PSANCP0I16",
        "prevJobs": "PSANCP0I15",
        "jobExec": "psan-pe-spk-qlt-cardcontractmasters-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I16",
        "nextJobs": "PSANCP0H16, PSANCP0I17",
        "prevJobs": "PSANCP0H15",
        "jobExec": "psan-pe-krb-inr-cardcontractmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H16",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I16",
        "jobExec": "psan-pe-spk-qlt-cardcontractmasterr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H18",
        "nextJobs": "PSANCP0I18",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-loccontractdetails-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I18",
        "nextJobs": "PSANCP0H19, PSANCP0I19",
        "prevJobs": "PSANCP0H18",
        "jobExec": "psan-pe-krb-inr-loccontractdetailp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H19",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I18",
        "jobExec": "psan-pe-spk-qlt-loccontractdetailr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I19",
        "nextJobs": "PSANCP0H20",
        "prevJobs": "PSANCP0I18",
        "jobExec": "psan-pe-krb-inm-loccontractdetailp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H20",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I19",
        "jobExec": "psan-pe-spk-qlt-loccontractdetailm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H21",
        "nextJobs": "PSANCP0I20",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-loccontractmasters-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I20",
        "nextJobs": "PSANCP0H22, PSANCP0I21",
        "prevJobs": "PSANCP0H21",
        "jobExec": "psan-pe-krb-inr-loccontractmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H22",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I20",
        "jobExec": "psan-pe-spk-qlt-loccontractmasterr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I21",
        "nextJobs": "PSANCP0H23",
        "prevJobs": "PSANCP0I20",
        "jobExec": "psan-pe-krb-inm-loccontractmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H23",
        "nextJobs": "PSANCP0H24",
        "prevJobs": "PSANCP0I21",
        "jobExec": "psan-pe-spk-qlt-loccontractmasterm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H24",
        "nextJobs": "PSANCP0H25",
        "prevJobs": "PSANCP0H23",
        "jobExec": "psan-pe-spk-qlt-loccontractmasterm-02",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H25",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0H24",
        "jobExec": "psan-pe-spk-qlt-loccontractmasterm-03",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANTP0I01",
        "nextJobs": "PSANCP0H26",
        "prevJobs": "#N/A",
        "jobExec": "RX_PSANCD0004.sh",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H26",
        "nextJobs": "PSANWP0F03",
        "prevJobs": "PSANTP0I01",
        "jobExec": "psan-pe-spk-qlt-cotizactrctregisquotns-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANWP0F03",
        "nextJobs": "PSANCP0I22",
        "prevJobs": "PSANCP0H26",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I22",
        "nextJobs": "PSANCP0H27, PSANCP0I23",
        "prevJobs": "PSANWP0F03",
        "jobExec": "psan-pe-krb-inr-cotizactrctregisquotnp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H27",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I22",
        "jobExec": "psan-pe-spk-qlt-cotizactrctregisquotnr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I23",
        "nextJobs": "PSANCP0H28",
        "prevJobs": "PSANCP0I22",
        "jobExec": "psan-pe-krb-inm-cotizactrctregisquotnp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H28",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I23",
        "jobExec": "psan-pe-spk-qlt-cotizactrctregisquotnm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H33",
        "nextJobs": "PSANCP0I26",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-agreedloaninstallmentss-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I26",
        "nextJobs": "PSANCP0H34, PSANCP0I27",
        "prevJobs": "PSANCP0H33",
        "jobExec": "psan-pe-krb-inr-agreedloaninstallmentsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H34",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I26",
        "jobExec": "psan-pe-spk-qlt-agreedloaninstallmentsr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I27",
        "nextJobs": "PSANCP0H35",
        "prevJobs": "PSANCP0I26",
        "jobExec": "psan-pe-krb-inm-agreedloaninstallmentsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H35",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I27",
        "jobExec": "psan-pe-spk-qlt-agreedloaninstallmentsm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H36",
        "nextJobs": "PSANCP0I28",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-impositionsmasters-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I28",
        "nextJobs": "PSANCP0H37, PSANCP0I29",
        "prevJobs": "PSANCP0H36",
        "jobExec": "psan-pe-krb-inr-impositionsmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H37",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I28",
        "jobExec": "psan-pe-spk-qlt-impositionsmasterr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I29",
        "nextJobs": "PSANCP0H38",
        "prevJobs": "PSANCP0I28",
        "jobExec": "psan-pe-krb-inm-impositionsmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H38",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I29",
        "jobExec": "psan-pe-spk-qlt-impositionsmasterm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H39",
        "nextJobs": "PSANCP0I30",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dailyloanmasters-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I30",
        "nextJobs": "PSANCP0H40, PSANCP0I31",
        "prevJobs": "PSANCP0H39",
        "jobExec": "psan-pe-krb-inr-dailyloanmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H40",
        "nextJobs": "PKMOLCP0P09",
        "prevJobs": "PSANCP0I30",
        "jobExec": "psan-pe-spk-qlt-dailyloanmasterr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I31",
        "nextJobs": "PSANCP0H41, PDEOCP0H09",
        "prevJobs": "PSANCP0I30",
        "jobExec": "psan-pe-krb-inm-dailyloanmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H41",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I31",
        "jobExec": "psan-pe-spk-qlt-dailyloanmasterm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H42",
        "nextJobs": "PSANCP0I32",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-penoverdueinstallmentss-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I32",
        "nextJobs": "PSANCP0H43, PSANCP0I33",
        "prevJobs": "PSANCP0H42",
        "jobExec": "psan-pe-krb-inr-penoverdueinstallmentsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H43",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I32",
        "jobExec": "psan-pe-spk-qlt-penoverdueinstallmentsr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I33",
        "nextJobs": "PSANCP0H44",
        "prevJobs": "PSANCP0I32",
        "jobExec": "psan-pe-krb-inm-penoverdueinstallmentsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H44",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I33",
        "jobExec": "psan-pe-spk-qlt-penoverdueinstallmentsm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H45",
        "nextJobs": "PSANCP0I34",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-usdoverdueinstallmentss-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I34",
        "nextJobs": "PSANCP0H46, PSANCP0I35",
        "prevJobs": "PSANCP0H45",
        "jobExec": "psan-pe-krb-inr-usdoverdueinstallmentsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H46",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I34",
        "jobExec": "psan-pe-spk-qlt-usdoverdueinstallmentsr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I35",
        "nextJobs": "PSANCP0H47",
        "prevJobs": "PSANCP0I34",
        "jobExec": "psan-pe-krb-inm-usdoverdueinstallmentsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H47",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I35",
        "jobExec": "psan-pe-spk-qlt-usdoverdueinstallmentsm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H48",
        "nextJobs": "PSANCP0I36",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-leasingcontractsmasters-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I36",
        "nextJobs": "PSANCP0H49, PSANCP0I37",
        "prevJobs": "PSANCP0H48",
        "jobExec": "psan-pe-krb-inr-leasingcontractsmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H49",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I36",
        "jobExec": "psan-pe-spk-qlt-leasingcontractsmasterr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I37",
        "nextJobs": "PSANCP0H50, PSANCP0011",
        "prevJobs": "PSANCP0I36",
        "jobExec": "psan-pe-krb-inm-leasingcontractsmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H50",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I37",
        "jobExec": "psan-pe-spk-qlt-leasingcontractsmasterm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H51",
        "nextJobs": "PSANCP0I38",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-incomeinstallmentinfos-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I38",
        "nextJobs": "PSANCP0H52, PSANCP0I39",
        "prevJobs": "PSANCP0H51",
        "jobExec": "psan-pe-krb-inr-incomeinstallmentinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H52",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I38",
        "jobExec": "psan-pe-spk-qlt-incomeinstallmentinfor-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0I39",
        "nextJobs": "PSANCP0H53",
        "prevJobs": "PSANCP0I38",
        "jobExec": "psan-pe-krb-inm-incomeinstallmentinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0H53",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0I39",
        "jobExec": "psan-pe-spk-qlt-incomeinstallmentinfom-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0019",
        "nextJobs": "PSANCP0020",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-collectionagreementss-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0020",
        "nextJobs": "PSANCP0021",
        "prevJobs": "PSANCP0019",
        "jobExec": "psan-pe-krb-inr-collectionagreementsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0021",
        "nextJobs": "PSANCP0022",
        "prevJobs": "PSANCP0020",
        "jobExec": "psan-pe-spk-qlt-collectionagreementsr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0022",
        "nextJobs": "PSANCP0023",
        "prevJobs": "PSANCP0021",
        "jobExec": "psan-pe-krb-inm-collectionagreementsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0023",
        "nextJobs": "PSANCP0024",
        "prevJobs": "PSANCP0022",
        "jobExec": "psan-pe-spk-qlt-collectionagreementsm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0024",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0023",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0025",
        "nextJobs": "PSANCP0026",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-creditcardinstlmnts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0026",
        "nextJobs": "PSANCP0027",
        "prevJobs": "PSANCP0025",
        "jobExec": "psan-pe-krb-inr-creditcardinstlmntp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0027",
        "nextJobs": "PSANCP0028",
        "prevJobs": "PSANCP0026",
        "jobExec": "psan-pe-spk-qlt-creditcardinstlmntr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0028",
        "nextJobs": "PSANCP0029",
        "prevJobs": "PSANCP0027",
        "jobExec": "psan-pe-krb-inm-creditcardinstlmntp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0029",
        "nextJobs": "PSANCP0030",
        "prevJobs": "PSANCP0028",
        "jobExec": "psan-pe-spk-qlt-creditcardinstlmntm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0030",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0029",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0031",
        "nextJobs": "PSANCP0032",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-frgntrdcontractmasters-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0032",
        "nextJobs": "PSANCP0033",
        "prevJobs": "PSANCP0031",
        "jobExec": "psan-pe-krb-inr-frgntrdcontractmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0033",
        "nextJobs": "PSANCP0034",
        "prevJobs": "PSANCP0032",
        "jobExec": "psan-pe-spk-qlt-frgntrdcontractmasterr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0034",
        "nextJobs": "PSANCP0035",
        "prevJobs": "PSANCP0033",
        "jobExec": "psan-pe-krb-inm-frgntrdcontractmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0035",
        "nextJobs": "PSANCP0036",
        "prevJobs": "PSANCP0034",
        "jobExec": "psan-pe-spk-qlt-frgntrdcontractmasterm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0036",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0035",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0037",
        "nextJobs": "PSANCP0038",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-confirmingcontractmstrs-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0038",
        "nextJobs": "PSANCP0039",
        "prevJobs": "PSANCP0037",
        "jobExec": "psan-pe-krb-inr-confirmingcontractmstrp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0039",
        "nextJobs": "PSANCP0040",
        "prevJobs": "PSANCP0038",
        "jobExec": "psan-pe-spk-qlt-confirmingcontractmstrr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0040",
        "nextJobs": "PSANCP0041",
        "prevJobs": "PSANCP0039",
        "jobExec": "psan-pe-krb-inm-confirmingcontractmstrp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0041",
        "nextJobs": "PSANCP0042",
        "prevJobs": "PSANCP0040",
        "jobExec": "psan-pe-spk-qlt-confirmingcontractmstrm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0042",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0041",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0043",
        "nextJobs": "PSANCP0044",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-mstrletrsuretyguartrs-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0044",
        "nextJobs": "PSANCP0045",
        "prevJobs": "PSANCP0043",
        "jobExec": "psan-pe-krb-inr-mstrletrsuretyguartrp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0045",
        "nextJobs": "PSANCP0046",
        "prevJobs": "PSANCP0044",
        "jobExec": "psan-pe-spk-qlt-mstrletrsuretyguartrr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0046",
        "nextJobs": "PSANCP0047",
        "prevJobs": "PSANCP0045",
        "jobExec": "psan-pe-krb-inm-mstrletrsuretyguartrp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0047",
        "nextJobs": "PSANCP0048",
        "prevJobs": "PSANCP0046",
        "jobExec": "psan-pe-spk-qlt-mstrletrsuretyguartrm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0048",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0047",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0001",
        "nextJobs": "PSANCP0002",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-supplierleasingassetss-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0002",
        "nextJobs": "PSANCP0003",
        "prevJobs": "PSANCP0001",
        "jobExec": "psan-pe-krb-inr-supplierleasingassetsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0003",
        "nextJobs": "PSANCP0004",
        "prevJobs": "PSANCP0002",
        "jobExec": "psan-pe-spk-qlt-supplierleasingassetsr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0004",
        "nextJobs": "PSANCP0005",
        "prevJobs": "PSANCP0003",
        "jobExec": "psan-pe-krb-inm-supplierleasingassetsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0005",
        "nextJobs": "PSANCP0006",
        "prevJobs": "PSANCP0004",
        "jobExec": "psan-pe-spk-qlt-supplierleasingassetsm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0006",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0005",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0007",
        "nextJobs": "PSANCP0008",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-sgntractvtleasingliness-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0008",
        "nextJobs": "PSANCP0009",
        "prevJobs": "PSANCP0007",
        "jobExec": "psan-pe-krb-inr-sgntractvtleasinglinesp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0009",
        "nextJobs": "PSANCP0010",
        "prevJobs": "PSANCP0008",
        "jobExec": "psan-pe-spk-qlt-sgntractvtleasinglinesr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0010",
        "nextJobs": "PSANCP0011",
        "prevJobs": "PSANCP0009",
        "jobExec": "psan-pe-krb-inm-sgntractvtleasinglinesp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0011",
        "nextJobs": "PSANCP0012",
        "prevJobs": "PSANCP0I37, PSANCP0010",
        "jobExec": "psan-pe-spk-qlt-sgntractvtleasinglinesm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0012",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0011",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0013",
        "nextJobs": "PSANCP0014",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-supplierleasingpayments-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0014",
        "nextJobs": "PSANCP0015",
        "prevJobs": "PSANCP0013",
        "jobExec": "psan-pe-krb-inr-supplierleasingpaymentp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0015",
        "nextJobs": "PSANCP0016",
        "prevJobs": "PSANCP0014",
        "jobExec": "psan-pe-spk-qlt-supplierleasingpaymentr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0016",
        "nextJobs": "PSANCP0017",
        "prevJobs": "PSANCP0015",
        "jobExec": "psan-pe-krb-inm-supplierleasingpaymentp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0017",
        "nextJobs": "PSANCP0018",
        "prevJobs": "PSANCP0016",
        "jobExec": "psan-pe-spk-qlt-supplierleasingpaymentm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0018",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0017",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0049",
        "nextJobs": "PSANCP0050",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-accountcardrelationships-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0050",
        "nextJobs": "PSANCP0051",
        "prevJobs": "PSANCP0049",
        "jobExec": "psan-pe-krb-inr-accountcardrelationshipp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0051",
        "nextJobs": "PSANCP0052",
        "prevJobs": "PSANCP0050",
        "jobExec": "psan-pe-spk-qlt-accountcardrelationshipr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0052",
        "nextJobs": "PSANCP0053",
        "prevJobs": "PSANCP0051",
        "jobExec": "psan-pe-krb-inm-accountcardrelationshipp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0053",
        "nextJobs": "PSANCP0054",
        "prevJobs": "PSANCP0052",
        "jobExec": "psan-pe-spk-qlt-accountcardrelationshipm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0054",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0053",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0055",
        "nextJobs": "PSANCP0056",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-creditlinesinfos-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0056",
        "nextJobs": "PSANCP0057, PSANCP0058",
        "prevJobs": "PSANCP0055",
        "jobExec": "psan-pe-krb-inr-creditlinesinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0057",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0056",
        "jobExec": "psan-pe-spk-qlt-creditlinesinfor-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0058",
        "nextJobs": "PSANCP0059",
        "prevJobs": "PSANCP0056",
        "jobExec": "psan-pe-krb-inm-creditlinesinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0059",
        "nextJobs": "PSANCP0060",
        "prevJobs": "PSANCP0058",
        "jobExec": "psan-pe-spk-qlt-creditlinesinfom-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0060",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0059",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0061",
        "nextJobs": "PSANCP0062",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-accountpersonals-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0062",
        "nextJobs": "PSANCP0063, PSANCP0067",
        "prevJobs": "PSANCP0061",
        "jobExec": "psan-pe-krb-inr-accountpersonalp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0063",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0062",
        "jobExec": "psan-pe-spk-qlt-accountpersonalr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0064",
        "nextJobs": "PSANCP0065",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-cmpltryprslacctmasters-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0065",
        "nextJobs": "PSANCP0066, PSANCP0067",
        "prevJobs": "PSANCP0064",
        "jobExec": "psan-pe-krb-inr-cmpltryprslacctmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0066",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0065",
        "jobExec": "psan-pe-spk-qlt-cmpltryprslacctmasterr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0067",
        "nextJobs": "PSANCP0068, PCDOCP4040",
        "prevJobs": "PSANCP0062, PSANCP0065",
        "jobExec": "psan-pe-krb-inm-accountpersonalp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0068",
        "nextJobs": "PSANCP0070, PSANCP0069",
        "prevJobs": "PSANCP0067",
        "jobExec": "psan-pe-spk-qlt-accountpersonalm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0069",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0068",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0070",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0068",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0071",
        "nextJobs": "PSANCP0072",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-productloandailys-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0072",
        "nextJobs": "PSANCP0073, PSANCP0074",
        "prevJobs": "PSANCP0071",
        "jobExec": "psan-pe-krb-inr-productloandailyp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0073",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0072",
        "jobExec": "psan-pe-spk-qlt-productloandailyr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0074",
        "nextJobs": "PSANCP0075",
        "prevJobs": "PSANCP0072",
        "jobExec": "psan-pe-krb-inm-productloandailyp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0075",
        "nextJobs": "PSANCP0076",
        "prevJobs": "PSANCP0074",
        "jobExec": "psan-pe-spk-qlt-productloandailym-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0076",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0075",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0077",
        "nextJobs": "PSANCP0078",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-portfoliocontractss-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0078",
        "nextJobs": "PSANCP0079, PSANCP0080",
        "prevJobs": "PSANCP0077",
        "jobExec": "psan-pe-krb-inr-portfoliocontractsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0079",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0078",
        "jobExec": "psan-pe-spk-qlt-portfoliocontractsr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0080",
        "nextJobs": "PSANCP0081",
        "prevJobs": "PSANCP0078",
        "jobExec": "psan-pe-krb-inm-portfoliocontractsp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0081",
        "nextJobs": "PSANCP0082",
        "prevJobs": "PSANCP0080",
        "jobExec": "psan-pe-spk-qlt-portfoliocontractsm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0082",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0081",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0083",
        "nextJobs": "PSANCP0084",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlyctgfrgntrdmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0084",
        "nextJobs": "PSANCP0085, PSANCP0086",
        "prevJobs": "PSANCP0083",
        "jobExec": "psan-pe-krb-inr-dlyctgfrgntrdmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0085",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0084",
        "jobExec": "psan-pe-spk-qlt-dlyctgfrgntrdmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0086",
        "nextJobs": "PSANCP0087, PSANCP0088",
        "prevJobs": "PSANCP0084",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0087",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0086",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0088",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0086",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0089",
        "nextJobs": "PSANCP0090",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlyctsmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0090",
        "nextJobs": "PSANCP0091, PSANCP0092",
        "prevJobs": "PSANCP0089",
        "jobExec": "psan-pe-krb-inr-dlyctsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0091",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0090",
        "jobExec": "psan-pe-spk-qlt-dlyctsmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0092",
        "nextJobs": "PSANCP0093, PSANCP0094",
        "prevJobs": "PSANCP0090",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0093",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0092",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0094",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0092",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0095",
        "nextJobs": "PSANCP0096",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlyfrgntrdfincgmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0096",
        "nextJobs": "PSANCP0097, PSANCP0098",
        "prevJobs": "PSANCP0095",
        "jobExec": "psan-pe-krb-inr-dlyfrgntrdfincgmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0097",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0096",
        "jobExec": "psan-pe-spk-qlt-dlyfrgntrdfincgmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0098",
        "nextJobs": "PSANCP0099, PSANCP0100",
        "prevJobs": "PSANCP0096",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0099",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0098",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0100",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0098",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0101",
        "nextJobs": "PSANCP0102",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlyguaranteemiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0102",
        "nextJobs": "PSANCP0103, PSANCP0104",
        "prevJobs": "PSANCP0101",
        "jobExec": "psan-pe-krb-inr-dlyguaranteemisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0103",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0102",
        "jobExec": "psan-pe-spk-qlt-dlyguaranteemisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0104",
        "nextJobs": "PSANCP0105, PSANCP0106",
        "prevJobs": "PSANCP0102",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0105",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0104",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0106",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0104",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0107",
        "nextJobs": "PSANCP0108",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlyinsurancemiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0108",
        "nextJobs": "PSANCP0109, PSANCP0110",
        "prevJobs": "PSANCP0107",
        "jobExec": "psan-pe-krb-inr-dlyinsurancemisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0109",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0108",
        "jobExec": "psan-pe-spk-qlt-dlyinsurancemisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0110",
        "nextJobs": "PSANCP0111, PSANCP0112",
        "prevJobs": "PSANCP0108",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0111",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0110",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0112",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0110",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0113",
        "nextJobs": "PSANCP0114",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlyleasingmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0114",
        "nextJobs": "PSANCP0115, PSANCP0116",
        "prevJobs": "PSANCP0113",
        "jobExec": "psan-pe-krb-inr-dlyleasingmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0115",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0114",
        "jobExec": "psan-pe-spk-qlt-dlyleasingmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0116",
        "nextJobs": "PSANCP0117, PSANCP0118",
        "prevJobs": "PSANCP0114",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0117",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0116",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0118",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0116",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0119",
        "nextJobs": "PSANCP0120",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlylegalmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0120",
        "nextJobs": "PSANCP0121, PSANCP0122",
        "prevJobs": "PSANCP0119",
        "jobExec": "psan-pe-krb-inr-dlylegalmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0121",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0120",
        "jobExec": "psan-pe-spk-qlt-dlylegalmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0122",
        "nextJobs": "PSANCP0123, PSANCP0124",
        "prevJobs": "PSANCP0120",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0123",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0122",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0124",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0122",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0125",
        "nextJobs": "PSANCP0126",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlyloansmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0126",
        "nextJobs": "PSANCP0127, PSANCP0128",
        "prevJobs": "PSANCP0125",
        "jobExec": "psan-pe-krb-inr-dlyloansmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0127",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0126",
        "jobExec": "psan-pe-spk-qlt-dlyloansmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0128",
        "nextJobs": "PSANCP0129, PSANCP0130",
        "prevJobs": "PSANCP0126",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0129",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0128",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0130",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0128",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0131",
        "nextJobs": "PSANCP0132",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlylocchkgacmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0132",
        "nextJobs": "PSANCP0133, PSANCP0134",
        "prevJobs": "PSANCP0131",
        "jobExec": "psan-pe-krb-inr-dlylocchkgacmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0133",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0132",
        "jobExec": "psan-pe-spk-qlt-dlylocchkgacmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0134",
        "nextJobs": "PSANCP0135, PSANCP0136",
        "prevJobs": "PSANCP0132",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0135",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0134",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0136",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0134",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0137",
        "nextJobs": "PSANCP0138",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlylocleasingmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0138",
        "nextJobs": "PSANCP0139, PSANCP0140",
        "prevJobs": "PSANCP0137",
        "jobExec": "psan-pe-krb-inr-dlylocleasingmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0139",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0138",
        "jobExec": "psan-pe-spk-qlt-dlylocleasingmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0140",
        "nextJobs": "PSANCP0141, PSANCP0142",
        "prevJobs": "PSANCP0138",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0141",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0140",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0142",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0140",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0143",
        "nextJobs": "PSANCP0144",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlypmtmethlocmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0144",
        "nextJobs": "PSANCP0145, PSANCP0146",
        "prevJobs": "PSANCP0143",
        "jobExec": "psan-pe-krb-inr-dlypmtmethlocmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0145",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0144",
        "jobExec": "psan-pe-spk-qlt-dlypmtmethlocmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0146",
        "nextJobs": "PSANCP0147, PSANCP0148",
        "prevJobs": "PSANCP0144",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0147",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0146",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0148",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0146",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0149",
        "nextJobs": "PSANCP0150",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlymutualfundsmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0150",
        "nextJobs": "PSANCP0151, PSANCP0152",
        "prevJobs": "PSANCP0149",
        "jobExec": "psan-pe-krb-inr-dlymutualfundsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0151",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0150",
        "jobExec": "psan-pe-spk-qlt-dlymutualfundsmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0152",
        "nextJobs": "PSANCP0153, PSANCP0154",
        "prevJobs": "PSANCP0150",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0153",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0152",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0154",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0152",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0155",
        "nextJobs": "PSANCP0156",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlyeffpfoliomiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0156",
        "nextJobs": "PSANCP0157, PSANCP0158",
        "prevJobs": "PSANCP0155",
        "jobExec": "psan-pe-krb-inr-dlyeffpfoliomisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0157",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0156",
        "jobExec": "psan-pe-spk-qlt-dlyeffpfoliomisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0158",
        "nextJobs": "PSANCP0159, PSANCP0160",
        "prevJobs": "PSANCP0156",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0159",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0158",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0160",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0158",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0161",
        "nextJobs": "PSANCP0162",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlyloanpfoliomiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0162",
        "nextJobs": "PSANCP0163, PSANCP0164",
        "prevJobs": "PSANCP0161",
        "jobExec": "psan-pe-krb-inr-dlyloanpfoliomisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0163",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0162",
        "jobExec": "psan-pe-spk-qlt-dlyloanpfoliomisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0164",
        "nextJobs": "PSANCP0165, PSANCP0166",
        "prevJobs": "PSANCP0162",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0165",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0164",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0166",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0164",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0167",
        "nextJobs": "PSANCP0168",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlyriskcardsmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0168",
        "nextJobs": "PSANCP0169, PSANCP0170",
        "prevJobs": "PSANCP0167",
        "jobExec": "psan-pe-krb-inr-dlyriskcardsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0169",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0168",
        "jobExec": "psan-pe-spk-qlt-dlyriskcardsmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0170",
        "nextJobs": "PSANCP0171, PSANCP0172",
        "prevJobs": "PSANCP0168",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0171",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0170",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0172",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0170",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0173",
        "nextJobs": "PSANCP0174",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlysectycustdmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0174",
        "nextJobs": "PSANCP0175, PSANCP0176",
        "prevJobs": "PSANCP0173",
        "jobExec": "psan-pe-krb-inr-dlysectycustdmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0175",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0174",
        "jobExec": "psan-pe-spk-qlt-dlysectycustdmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0176",
        "nextJobs": "PSANCP0177, PSANCP0178",
        "prevJobs": "PSANCP0174",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0177",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0176",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0178",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0176",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0179",
        "nextJobs": "PSANCP0180",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlytermacctmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0180",
        "nextJobs": "PSANCP0181, PSANCP0182",
        "prevJobs": "PSANCP0179",
        "jobExec": "psan-pe-krb-inr-dlytermacctmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0181",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0180",
        "jobExec": "psan-pe-spk-qlt-dlytermacctmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0182",
        "nextJobs": "PSANCP0183, PSANCP0184",
        "prevJobs": "PSANCP0180",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0183",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0182",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0184",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0182",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0185",
        "nextJobs": "PSANCP0186",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlyloanlocmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0186",
        "nextJobs": "PSANCP0187, PSANCP0188",
        "prevJobs": "PSANCP0185",
        "jobExec": "psan-pe-krb-inr-dlyloanlocmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0187",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0186",
        "jobExec": "psan-pe-spk-qlt-dlyloanlocmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0188",
        "nextJobs": "PSANCP0189, PSANCP0190",
        "prevJobs": "PSANCP0186",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0189",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0188",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0190",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0188",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0191",
        "nextJobs": "PSANCP0192",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlysavingacctmiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0192",
        "nextJobs": "PSANCP0193, PSANCP0194",
        "prevJobs": "PSANCP0191",
        "jobExec": "psan-pe-krb-inr-dlysavingacctmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0193",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0192",
        "jobExec": "psan-pe-spk-qlt-dlysavingacctmisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0194",
        "nextJobs": "PSANCP0195, PSANCP0196",
        "prevJobs": "PSANCP0192",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0195",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0194",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0196",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0194",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0197",
        "nextJobs": "PSANCP0198",
        "prevJobs": "#N/A",
        "jobExec": "psan-pe-spk-qlt-dlycrtosettlemiscts-01",
        "isBase": true,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0198",
        "nextJobs": "PSANCP0199, PSANCP0200",
        "prevJobs": "PSANCP0197",
        "jobExec": "psan-pe-krb-inr-dlycrtosettlemisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0199",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0198",
        "jobExec": "psan-pe-spk-qlt-dlycrtosettlemisctr-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0200",
        "nextJobs": "PSANCP0201, PSANCP0202",
        "prevJobs": "PSANCP0198",
        "jobExec": "psan-pe-krb-inm-dlyinvtyproductsmisctp-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0201",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0200",
        "jobExec": "psan-pe-spk-qlt-dlyinvtyproductsmisctm-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PSANCP0202",
        "nextJobs": "#N/A",
        "prevJobs": "PSANCP0200",
        "jobExec": "psan-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PSAN/CR-PESANDIA-T02.xml"
      },
      {
        "job": "PCTKCP0001",
        "nextJobs": "PCTKCP0002",
        "prevJobs": "#N/A",
        "jobExec": "pctk-pe-spk-qlt-monthlytransactionalrcds-01",
        "isBase": true,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0002",
        "nextJobs": "PCTKCP0003",
        "prevJobs": "PCTKCP0001",
        "jobExec": "pctk-pe-krb-inr-monthlytransactionalrcdp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0003",
        "nextJobs": "PCTKCP0004",
        "prevJobs": "PCTKCP0002",
        "jobExec": "pctk-pe-spk-qlt-monthlytransactionalrcdr-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0004",
        "nextJobs": "PCTKCP0005",
        "prevJobs": "PCTKCP0003",
        "jobExec": "pctk-pe-krb-inm-monthlytransactionalrcdp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0009",
        "nextJobs": "PCTKCP0011",
        "prevJobs": "PCTKCP0007",
        "jobExec": "pctk-pe-krb-inr-mthlydebtbalprsntrcdp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0005",
        "nextJobs": "PCTKCP0006",
        "prevJobs": "PCTKCP0004",
        "jobExec": "pctk-pe-spk-qlt-monthlytransactionalrcdm-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0006",
        "nextJobs": "#N/A",
        "prevJobs": "PCTKCP0005",
        "jobExec": "pctk-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0007",
        "nextJobs": "PCTKCP0008, PCTKCP0009",
        "prevJobs": "#N/A",
        "jobExec": "pctk-pe-spk-qlt-monthlydebtprsntrcds-01",
        "isBase": true,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0008",
        "nextJobs": "PCTKCP0010",
        "prevJobs": "PCTKCP0007",
        "jobExec": "pctk-pe-krb-inr-monthlydebtprsntrcdp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0010",
        "nextJobs": "PCTKCP0012",
        "prevJobs": "PCTKCP0008",
        "jobExec": "pctk-pe-spk-qlt-monthlydebtprsntrcdr-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0011",
        "nextJobs": "PCTKCP0013",
        "prevJobs": "PCTKCP0009",
        "jobExec": "pctk-pe-spk-qlt-mthlydebtbalprsntrcdr-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0012",
        "nextJobs": "PCTKCP0014",
        "prevJobs": "PCTKCP0010",
        "jobExec": "pctk-pe-krb-inm-monthlydebtprsntrcdp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0013",
        "nextJobs": "PCTKCP0015",
        "prevJobs": "PCTKCP0011",
        "jobExec": "pctk-pe-krb-inm-mthlydebtbalprsntrcdp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0014",
        "nextJobs": "PCTKCP0016",
        "prevJobs": "PCTKCP0012",
        "jobExec": "pctk-pe-spk-qlt-monthlydebtprsntrcdm-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0015",
        "nextJobs": "PCTKCP0017",
        "prevJobs": "PCTKCP0013",
        "jobExec": "pctk-pe-spk-qlt-mthlydebtbalprsntrcdm-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0016",
        "nextJobs": "#N/A",
        "prevJobs": "PCTKCP0014",
        "jobExec": "pctk-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0017",
        "nextJobs": "#N/A",
        "prevJobs": "PCTKCP0015",
        "jobExec": "pctk-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0H01",
        "nextJobs": "PCTKCP0I01",
        "prevJobs": "#N/A",
        "jobExec": "pctk-pe-spk-qlt-classifiedaccountmasters-01",
        "isBase": true,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0I01",
        "nextJobs": "PCTKCP0H02, PCTKCP0I02",
        "prevJobs": "PCTKCP0H01",
        "jobExec": "pctk-pe-krb-inr-classifiedaccountmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0H02",
        "nextJobs": "#N/A",
        "prevJobs": "PCTKCP0I01",
        "jobExec": "pctk-pe-spk-qlt-classifiedaccountmasterr-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0I02",
        "nextJobs": "PCTKCP0H03",
        "prevJobs": "PCTKCP0I01",
        "jobExec": "pctk-pe-krb-inm-classifiedaccountmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0H03",
        "nextJobs": "#N/A",
        "prevJobs": "PCTKCP0I02",
        "jobExec": "pctk-pe-spk-qlt-classifiedaccountmasterm-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0H04",
        "nextJobs": "PCTKCP0I03",
        "prevJobs": "#N/A",
        "jobExec": "pctk-pe-spk-qlt-classifiedcustomermovs-01",
        "isBase": true,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0I03",
        "nextJobs": "PCTKCP0H05, PCTKCP0I04",
        "prevJobs": "PCTKCP0H04",
        "jobExec": "pctk-pe-krb-inr-classifiedcustomermovp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0H05",
        "nextJobs": "#N/A",
        "prevJobs": "PCTKCP0I03",
        "jobExec": "pctk-pe-spk-qlt-classifiedcustomermovr-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0I04",
        "nextJobs": "PCTKCP0H06",
        "prevJobs": "PCTKCP0I03",
        "jobExec": "pctk-pe-krb-inm-classifiedcustomermovp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP0H06",
        "nextJobs": "#N/A",
        "prevJobs": "PCTKCP0I04",
        "jobExec": "pctk-pe-spk-qlt-classifiedcustomermovm-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKDIA-T02.xml"
      },
      {
        "job": "PCTKCP4H01",
        "nextJobs": "PCTKCP4I01",
        "prevJobs": "#N/A",
        "jobExec": "pctk-pe-spk-qlt-protesteddocumentss-01",
        "isBase": true,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTKCP4I01",
        "nextJobs": "PCTKCP4H02, PCTKCP4I02",
        "prevJobs": "PCTKCP4H01",
        "jobExec": "pctk-pe-krb-inr-protesteddocumentsp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTKCP4H02",
        "nextJobs": "#N/A",
        "prevJobs": "PCTKCP4I01",
        "jobExec": "pctk-pe-spk-qlt-protesteddocumentsr-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTKCP4I02",
        "nextJobs": "PCTKCP4H03",
        "prevJobs": "PCTKCP4I01",
        "jobExec": "pctk-pe-krb-inm-protesteddocumentsp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTKCP4H03",
        "nextJobs": "#N/A",
        "prevJobs": "PCTKCP4I02",
        "jobExec": "pctk-pe-spk-qlt-protesteddocumentsm-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTKCP4H04",
        "nextJobs": "PCTKCP4I03",
        "prevJobs": "#N/A",
        "jobExec": "pctk-pe-spk-qlt-monthlyclsfyacctmstrs-01",
        "isBase": true,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTKCP4I03",
        "nextJobs": "PCTKCP4H05, PCTKCP4I04",
        "prevJobs": "PCTKCP4H04",
        "jobExec": "pctk-pe-krb-inr-monthlyclsfyacctmstrp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTKCP4H05",
        "nextJobs": "#N/A",
        "prevJobs": "PCTKCP4I03",
        "jobExec": "pctk-pe-spk-qlt-monthlyclsfyacctmstrr-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTKCP4I04",
        "nextJobs": "PCTKCP4H06",
        "prevJobs": "PCTKCP4I03",
        "jobExec": "pctk-pe-krb-inm-monthlyclsfyacctmstrp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTKCP4H06",
        "nextJobs": "#N/A",
        "prevJobs": "PCTKCP4I04",
        "jobExec": "pctk-pe-spk-qlt-monthlyclsfyacctmstrm-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTKWP4001",
        "nextJobs": "PCTKCP4001, PCTKCP4002",
        "prevJobs": "#N/A",
        "jobExec": "#N/A",
        "isBase": true,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTKCP4001",
        "nextJobs": "PCTKCP4003",
        "prevJobs": "PCTKWP4001",
        "jobExec": "pctk-pe-spk-qlt-rccbalances-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTKCP4002",
        "nextJobs": "PCTKCP4003",
        "prevJobs": "PCTKWP4001",
        "jobExec": "pctk-pe-spk-qlt-rcccustomerss-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTKCP4003",
        "nextJobs": "PCTKCP4004, PCTKCP4005",
        "prevJobs": "PCTKCP4001, PCTKCP4002",
        "jobExec": "pctk-pe-spk-inr-separationrcc-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTKCP4004",
        "nextJobs": "PCTKCP4006",
        "prevJobs": "PCTKCP4003",
        "jobExec": "pctk-pe-krb-inm-rccbalancep-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTKCP4005",
        "nextJobs": "PCTKCP4007",
        "prevJobs": "PCTKCP4003",
        "jobExec": "pctk-pe-krb-inm-rcccustomersp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTKCP4006",
        "nextJobs": "PCTKCP4008",
        "prevJobs": "PCTKCP4004",
        "jobExec": "pctk-pe-spk-qlt-rccbalancem-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTKCP4007",
        "nextJobs": "PCTKCP4008",
        "prevJobs": "PCTKCP4005",
        "jobExec": "pctk-pe-spk-qlt-rcccustomersm-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTKCP4008",
        "nextJobs": "#N/A",
        "prevJobs": "PCTKCP4006, PCTKCP4007",
        "jobExec": "pctk-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCTK/CR-PECTKMEN-T02.xml"
      },
      {
        "job": "PCTDCP0A01",
        "nextJobs": "PCTDCP0P01",
        "prevJobs": "PCTDTP0001",
        "jobExec": "pctd-pe-krb-inr-parametercatalogdiyp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0P01",
        "nextJobs": "PCTDCP0P02",
        "prevJobs": "PCTDCP0A01",
        "jobExec": "pctd-pe-krb-inm-parametercatalogdiyp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDTP0001",
        "nextJobs": "PCTDCP0A01",
        "prevJobs": "#N/A",
        "jobExec": "RX_PCTDCD0001.sh",
        "isBase": true,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDTP0002",
        "nextJobs": "PCTDCP0H01",
        "prevJobs": "#N/A",
        "jobExec": "RX_PCTDCD0002.sh",
        "isBase": true,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H01",
        "nextJobs": "PCTDCP0I01",
        "prevJobs": "PCTDTP0002",
        "jobExec": "pctd-pe-spk-qlt-dchancrcdreqsttdetls-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0I01",
        "nextJobs": "PCTDCP0H02, PCTDCP0I02",
        "prevJobs": "PCTDCP0H01",
        "jobExec": "pctd-pe-krb-inr-dchancrcdreqsttdetlp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H02",
        "nextJobs": "#N/A",
        "prevJobs": "PCTDCP0I01",
        "jobExec": "pctd-pe-spk-qlt-dchancrcdreqsttdetlr-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0I02",
        "nextJobs": "PCTDCP0H03, PBILCP0013",
        "prevJobs": "PCTDCP0I01",
        "jobExec": "pctd-pe-krb-inm-dchancrcdreqsttdetlp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H03",
        "nextJobs": "#N/A",
        "prevJobs": "PCTDCP0I02",
        "jobExec": "pctd-pe-spk-qlt-dchancrcdreqsttdetlm-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDTP0003",
        "nextJobs": "PCTDCP0H04",
        "prevJobs": "#N/A",
        "jobExec": "RX_PCTDCD0003.sh",
        "isBase": true,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H04",
        "nextJobs": "PCTDCP0I03",
        "prevJobs": "PCTDTP0003",
        "jobExec": "pctd-pe-spk-qlt-addlcrcardcustinfos-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0I03",
        "nextJobs": "PCTDCP0H05, PCTDCP0I04, PBILCP0013",
        "prevJobs": "PCTDCP0H04",
        "jobExec": "pctd-pe-krb-inr-addlcrcardcustinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H05",
        "nextJobs": "#N/A",
        "prevJobs": "PCTDCP0I03",
        "jobExec": "pctd-pe-spk-qlt-addlcrcardcustinfor-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0I04",
        "nextJobs": "PCTDCP0H06, PBILCP0013",
        "prevJobs": "PCTDCP0I03",
        "jobExec": "pctd-pe-krb-inm-addlcrcardcustinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H06",
        "nextJobs": "#N/A",
        "prevJobs": "PCTDCP0I04",
        "jobExec": "pctd-pe-spk-qlt-addlcrcardcustinfom-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDTP0004",
        "nextJobs": "PCTDCP0H07",
        "prevJobs": "#N/A",
        "jobExec": "RX_PCTDCD0004.sh",
        "isBase": true,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H07",
        "nextJobs": "PCTDCP0I05",
        "prevJobs": "PCTDTP0004",
        "jobExec": "pctd-pe-spk-qlt-dchanaddltcrequestss-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0I05",
        "nextJobs": "PCTDCP0H08, PCTDCP0I06",
        "prevJobs": "PCTDCP0H07",
        "jobExec": "pctd-pe-krb-inr-dchanaddltcrequestsp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H08",
        "nextJobs": "#N/A",
        "prevJobs": "PCTDCP0I05",
        "jobExec": "pctd-pe-spk-qlt-dchanaddltcrequestsr-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0I06",
        "nextJobs": "PCTDCP0H09, PBILCP0013",
        "prevJobs": "PCTDCP0I05",
        "jobExec": "pctd-pe-krb-inm-dchanaddltcrequestsp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H09",
        "nextJobs": "#N/A",
        "prevJobs": "PCTDCP0I06",
        "jobExec": "pctd-pe-spk-qlt-dchanaddltcrequestsm-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0P02",
        "nextJobs": "#N/A",
        "prevJobs": "PCTDCP0P01",
        "jobExec": "pctd-pe-spk-inm-diycalculate-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0005",
        "nextJobs": "PCTDCP0006",
        "prevJobs": "#N/A",
        "jobExec": "pctd-pe-spk-qlt-netcashuserscontacts-01",
        "isBase": true,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0006",
        "nextJobs": "PCTDCP0007",
        "prevJobs": "PCTDCP0005",
        "jobExec": "pctd-pe-krb-inr-netcashuserscontactp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0007",
        "nextJobs": "PCTDCP0008",
        "prevJobs": "PCTDCP0006",
        "jobExec": "pctd-pe-spk-qlt-netcashuserscontactr-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0008",
        "nextJobs": "PCTDCP0009",
        "prevJobs": "PCTDCP0007",
        "jobExec": "pctd-pe-krb-inm-netcashuserscontactp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0009",
        "nextJobs": "PCTDCP0010",
        "prevJobs": "PCTDCP0008",
        "jobExec": "pctd-pe-spk-qlt-netcashuserscontactm-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0010",
        "nextJobs": "#N/A",
        "prevJobs": "PCTDCP0009",
        "jobExec": "pctd-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H11",
        "nextJobs": "PCTDCP0A11",
        "prevJobs": "#N/A",
        "jobExec": "pctd-pe-spk-qlt-availablechannels-01",
        "isBase": true,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0A11",
        "nextJobs": "PCTDCP0H12",
        "prevJobs": "PCTDCP0H11",
        "jobExec": "pctd-pe-krb-inr-availablechannelp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H12",
        "nextJobs": "PCTDCP0P11",
        "prevJobs": "PCTDCP0A11",
        "jobExec": "pctd-pe-spk-qlt-availablechannelr-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H14",
        "nextJobs": "PCTDCP0A12",
        "prevJobs": "#N/A",
        "jobExec": "pctd-pe-spk-qlt-channelaffils-01",
        "isBase": true,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H20",
        "nextJobs": "PCTDCP0A14",
        "prevJobs": "#N/A",
        "jobExec": "pctd-pe-spk-qlt-freqoperdetails-01",
        "isBase": true,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H23",
        "nextJobs": "PCTDCP0A15",
        "prevJobs": "#N/A",
        "jobExec": "pctd-pe-spk-qlt-freqopers-01",
        "isBase": true,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0A12",
        "nextJobs": "PCTDCP0H15",
        "prevJobs": "PCTDCP0H14",
        "jobExec": "pctd-pe-krb-inr-channelaffilp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0A13",
        "nextJobs": "PCTDCP0H18",
        "prevJobs": "PCTDCP0H17",
        "jobExec": "pctd-pe-krb-inr-freqoperauthchanp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0A14",
        "nextJobs": "PCTDCP0H21",
        "prevJobs": "PCTDCP0H20",
        "jobExec": "pctd-pe-krb-inr-freqoperdetailp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0A15",
        "nextJobs": "PCTDCP0H24",
        "prevJobs": "PCTDCP0H23",
        "jobExec": "pctd-pe-krb-inr-freqoperp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H15",
        "nextJobs": "PCTDCP0P12",
        "prevJobs": "PCTDCP0A12",
        "jobExec": "pctd-pe-spk-qlt-channelaffilr-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H18",
        "nextJobs": "PCTDCP0P13",
        "prevJobs": "PCTDCP0A13",
        "jobExec": "pctd-pe-spk-qlt-freqoperauthchanr-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H21",
        "nextJobs": "PCTDCP0P14",
        "prevJobs": "PCTDCP0A14",
        "jobExec": "pctd-pe-spk-qlt-freqoperdetailr-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H24",
        "nextJobs": "PCTDCP0P15",
        "prevJobs": "PCTDCP0A15",
        "jobExec": "pctd-pe-spk-qlt-freqoperr-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H17",
        "nextJobs": "PCTDCP0A13",
        "prevJobs": "#N/A",
        "jobExec": "pctd-pe-spk-qlt-freqoperauthchans-01",
        "isBase": true,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0P15",
        "nextJobs": "PCTDCP0H25",
        "prevJobs": "PCTDCP0H24",
        "jobExec": "pctd-pe-krb-inm-freqoperp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0P14",
        "nextJobs": "PCTDCP0H22",
        "prevJobs": "PCTDCP0H21",
        "jobExec": "pctd-pe-krb-inm-freqoperdetailp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0P13",
        "nextJobs": "PCTDCP0H19",
        "prevJobs": "PCTDCP0H18",
        "jobExec": "pctd-pe-krb-inm-freqoperauthchanp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0P12",
        "nextJobs": "PCTDCP0H16",
        "prevJobs": "PCTDCP0H15",
        "jobExec": "pctd-pe-krb-inm-channelaffilp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0P11",
        "nextJobs": "PCTDCP0H13",
        "prevJobs": "PCTDCP0H12",
        "jobExec": "pctd-pe-krb-inm-availablechannelp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H13",
        "nextJobs": "PCTDCP0B11",
        "prevJobs": "PCTDCP0P11",
        "jobExec": "pctd-pe-spk-qlt-availablechannelm-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H16",
        "nextJobs": "PCTDCP0B13",
        "prevJobs": "PCTDCP0P12",
        "jobExec": "pctd-pe-spk-qlt-channelaffilm-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H19",
        "nextJobs": "PCTDCP0B15",
        "prevJobs": "PCTDCP0P13",
        "jobExec": "pctd-pe-spk-qlt-freqoperauthchanm-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H22",
        "nextJobs": "PCTDCP0B17",
        "prevJobs": "PCTDCP0P14",
        "jobExec": "pctd-pe-spk-qlt-freqoperdetailm-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0H25",
        "nextJobs": "PCTDCP0B19",
        "prevJobs": "PCTDCP0P15",
        "jobExec": "pctd-pe-spk-qlt-freqoperm-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0B11",
        "nextJobs": "PCTDCP0B12",
        "prevJobs": "PCTDCP0H13",
        "jobExec": "pctd-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0B12",
        "nextJobs": "#N/A",
        "prevJobs": "PCTDCP0B11",
        "jobExec": "pctd-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0B13",
        "nextJobs": "PCTDCP0B14",
        "prevJobs": "PCTDCP0H16",
        "jobExec": "pctd-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0B14",
        "nextJobs": "#N/A",
        "prevJobs": "PCTDCP0B13",
        "jobExec": "pctd-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0B15",
        "nextJobs": "PCTDCP0B16",
        "prevJobs": "PCTDCP0H19",
        "jobExec": "pctd-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0B16",
        "nextJobs": "#N/A",
        "prevJobs": "PCTDCP0B15",
        "jobExec": "pctd-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0B17",
        "nextJobs": "PCTDCP0B18",
        "prevJobs": "PCTDCP0H22",
        "jobExec": "pctd-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0B18",
        "nextJobs": "#N/A",
        "prevJobs": "PCTDCP0B17",
        "jobExec": "pctd-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0B19",
        "nextJobs": "PCTDCP0B20",
        "prevJobs": "PCTDCP0H25",
        "jobExec": "pctd-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0B20",
        "nextJobs": "#N/A",
        "prevJobs": "PCTDCP0B19",
        "jobExec": "pctd-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0001",
        "nextJobs": "PCTDCP0002",
        "prevJobs": "#N/A",
        "jobExec": "pctd-pe-spk-qlt-custuseraltvchannels-01",
        "isBase": true,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0002",
        "nextJobs": "PCTDCP0003",
        "prevJobs": "PCTDCP0001",
        "jobExec": "pctd-pe-krb-inr-custuseraltvchannelp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0003",
        "nextJobs": "PCTDCP0004",
        "prevJobs": "PCTDCP0002",
        "jobExec": "pctd-pe-spk-qlt-custuseraltvchannelr-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0004",
        "nextJobs": "PCTDCP0011",
        "prevJobs": "PCTDCP0003",
        "jobExec": "pctd-pe-krb-inm-custuseraltvchannelp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0011",
        "nextJobs": "PCTDCP0012",
        "prevJobs": "PCTDCP0004",
        "jobExec": "pctd-pe-spk-qlt-custuseraltvchannelm-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0012",
        "nextJobs": "#N/A",
        "prevJobs": "PCTDCP0011",
        "jobExec": "pctd-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0013",
        "nextJobs": "PCTDCP0014",
        "prevJobs": "#N/A",
        "jobExec": "pctd-pe-spk-qlt-establishmentss-01",
        "isBase": true,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0014",
        "nextJobs": "PCTDCP0015",
        "prevJobs": "PCTDCP0013",
        "jobExec": "pctd-pe-krb-inr-establishmentsp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0015",
        "nextJobs": "PCTDCP0016",
        "prevJobs": "PCTDCP0014",
        "jobExec": "pctd-pe-spk-qlt-establishmentsr-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0016",
        "nextJobs": "PCTDCP0017",
        "prevJobs": "PCTDCP0015",
        "jobExec": "pctd-pe-krb-inm-establishmentsp-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0017",
        "nextJobs": "PCTDCP0018",
        "prevJobs": "PCTDCP0016",
        "jobExec": "pctd-pe-spk-qlt-establishmentsm-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PCTDCP0018",
        "nextJobs": "#N/A",
        "prevJobs": "PCTDCP0017",
        "jobExec": "pctd-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCTD/CR-PECTDDIA-T02.xml"
      },
      {
        "job": "PPADCP4001",
        "nextJobs": "PPADCP4002",
        "prevJobs": "#N/A",
        "jobExec": "ppad-pe-spk-qlt-cardlockcodecatalogues-01",
        "isBase": true,
        "path": "./xmls/Local/PPAD/CR-PEPADMEN-T02.xml"
      },
      {
        "job": "PPADCP4002",
        "nextJobs": "PPADCP4003",
        "prevJobs": "PPADCP4001",
        "jobExec": "ppad-pe-krb-inr-cardlockcodecataloguep-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADMEN-T02.xml"
      },
      {
        "job": "PPADCP4003",
        "nextJobs": "PPADCP4004",
        "prevJobs": "PPADCP4002",
        "jobExec": "ppad-pe-spk-qlt-cardlockcodecataloguer-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADMEN-T02.xml"
      },
      {
        "job": "PPADCP4004",
        "nextJobs": "PPADCP4005",
        "prevJobs": "PPADCP4003",
        "jobExec": "ppad-pe-krb-inm-cardlockcodecataloguep-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADMEN-T02.xml"
      },
      {
        "job": "PPADCP4005",
        "nextJobs": "PPADCP4006",
        "prevJobs": "PPADCP4004",
        "jobExec": "ppad-pe-spk-qlt-cardlockcodecataloguem-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADMEN-T02.xml"
      },
      {
        "job": "PPADCP4006",
        "nextJobs": "#N/A",
        "prevJobs": "PPADCP4005",
        "jobExec": "ppad-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADMEN-T02.xml"
      },
      {
        "job": "PPADCP0001",
        "nextJobs": "PPADCP0002",
        "prevJobs": "#N/A",
        "jobExec": "ppad-pe-spk-qlt-loanproductss-01",
        "isBase": true,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0002",
        "nextJobs": "PPADCP0003",
        "prevJobs": "PPADCP0001",
        "jobExec": "ppad-pe-krb-inr-loanproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0003",
        "nextJobs": "PPADCP0004",
        "prevJobs": "PPADCP0002",
        "jobExec": "ppad-pe-spk-qlt-loanproductsr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0004",
        "nextJobs": "PPADCP0005",
        "prevJobs": "PPADCP0003",
        "jobExec": "ppad-pe-krb-inm-loanproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0005",
        "nextJobs": "PPADCP0006",
        "prevJobs": "PPADCP0004",
        "jobExec": "ppad-pe-spk-qlt-loanproductsm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0006",
        "nextJobs": "#N/A",
        "prevJobs": "PPADCP0005",
        "jobExec": "ppad-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADTP0I03",
        "nextJobs": "PPADCP0H04",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPADCD0001.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0H04",
        "nextJobs": "PPADCP0I03",
        "prevJobs": "PPADTP0I03",
        "jobExec": "ppad-pe-spk-qlt-cotizacatalogsmasters-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0I03",
        "nextJobs": "PPADCP0I04, PPADCP0H05",
        "prevJobs": "PPADCP0H04",
        "jobExec": "ppad-pe-krb-inr-cotizacatalogsmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0H05",
        "nextJobs": "#N/A",
        "prevJobs": "PPADCP0I03",
        "jobExec": "ppad-pe-spk-qlt-cotizacatalogsmasterr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0I04",
        "nextJobs": "PPADCP0H06",
        "prevJobs": "PPADCP0I03",
        "jobExec": "ppad-pe-krb-inm-cotizacatalogsmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0H06",
        "nextJobs": "#N/A",
        "prevJobs": "PPADCP0I04",
        "jobExec": "ppad-pe-spk-qlt-cotizacatalogsmasterm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADTP0I04",
        "nextJobs": "PPADCP0H07",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPADCD0002.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0H07",
        "nextJobs": "PPADCP0I05",
        "prevJobs": "PPADTP0I04",
        "jobExec": "ppad-pe-spk-qlt-cotizacatlgdetlmstrs-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0I05",
        "nextJobs": "PPADCP0I06, PPADCP0H08",
        "prevJobs": "PPADCP0H07",
        "jobExec": "ppad-pe-krb-inr-cotizacatlgdetlmstrp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0H08",
        "nextJobs": "#N/A",
        "prevJobs": "PPADCP0I05",
        "jobExec": "ppad-pe-spk-qlt-cotizacatlgdetlmstrr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0I06",
        "nextJobs": "PPADCP0H09",
        "prevJobs": "PPADCP0I05",
        "jobExec": "ppad-pe-krb-inm-cotizacatlgdetlmstrp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0H09",
        "nextJobs": "#N/A",
        "prevJobs": "PPADCP0I06",
        "jobExec": "ppad-pe-spk-qlt-cotizacatlgdetlmstrm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADTP0I05",
        "nextJobs": "PPADCP0H10",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPADCD0003.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0H10",
        "nextJobs": "PPADCP0I07",
        "prevJobs": "PPADTP0I05",
        "jobExec": "ppad-pe-spk-qlt-cotizacatlgvalmasters-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0I07",
        "nextJobs": "PPADCP0I08, PPADCP0H11",
        "prevJobs": "PPADCP0H10",
        "jobExec": "ppad-pe-krb-inr-cotizacatlgvalmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0H11",
        "nextJobs": "#N/A",
        "prevJobs": "PPADCP0I07",
        "jobExec": "ppad-pe-spk-qlt-cotizacatlgdetlmstrr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0I08",
        "nextJobs": "PPADCP0H12",
        "prevJobs": "PPADCP0I07",
        "jobExec": "ppad-pe-krb-inm-cotizacatlgvalmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0H12",
        "nextJobs": "#N/A",
        "prevJobs": "PPADCP0I08",
        "jobExec": "ppad-pe-spk-qlt-cotizacatlgvalmasterm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0019",
        "nextJobs": "PPADCP0020",
        "prevJobs": "#N/A",
        "jobExec": "ppad-pe-spk-qlt-prdparametrizationcodess-01",
        "isBase": true,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0020",
        "nextJobs": "PPADCP0021",
        "prevJobs": "PPADCP0019",
        "jobExec": "ppad-pe-krb-inr-prdparametrizationcodesp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0021",
        "nextJobs": "PPADCP0022",
        "prevJobs": "PPADCP0020",
        "jobExec": "ppad-pe-spk-qlt-prdparametrizationcodesr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0022",
        "nextJobs": "PPADCP0023",
        "prevJobs": "PPADCP0021",
        "jobExec": "ppad-pe-krb-inm-prdparametrizationcodesp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0023",
        "nextJobs": "PPADCP0024",
        "prevJobs": "PPADCP0022",
        "jobExec": "ppad-pe-spk-qlt-prdparametrizationcodesm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0024",
        "nextJobs": "#N/A",
        "prevJobs": "PPADCP0023",
        "jobExec": "ppad-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0007",
        "nextJobs": "PPADCP0008",
        "prevJobs": "#N/A",
        "jobExec": "ppad-pe-spk-qlt-bintables-01",
        "isBase": true,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0008",
        "nextJobs": "PPADCP0009",
        "prevJobs": "PPADCP0007",
        "jobExec": "ppad-pe-krb-inr-bintablep-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0009",
        "nextJobs": "PPADCP0010",
        "prevJobs": "PPADCP0008",
        "jobExec": "ppad-pe-spk-qlt-bintabler-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0010",
        "nextJobs": "PPADCP0011",
        "prevJobs": "PPADCP0009",
        "jobExec": "ppad-pe-krb-inm-bintablep-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0011",
        "nextJobs": "PPADCP0012",
        "prevJobs": "PPADCP0010",
        "jobExec": "ppad-pe-spk-qlt-bintablem-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0012",
        "nextJobs": "#N/A",
        "prevJobs": "PPADCP0011",
        "jobExec": "ppad-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0013",
        "nextJobs": "PPADCP0014",
        "prevJobs": "#N/A",
        "jobExec": "ppad-pe-spk-qlt-tablecatalogacctprsls-01",
        "isBase": true,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0014",
        "nextJobs": "PPADCP0015",
        "prevJobs": "PPADCP0013",
        "jobExec": "ppad-pe-krb-inr-tablecatalogacctprslp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0015",
        "nextJobs": "PPADCP0016",
        "prevJobs": "PPADCP0014",
        "jobExec": "ppad-pe-spk-qlt-tablecatalogacctprslr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0016",
        "nextJobs": "PPADCP0017",
        "prevJobs": "PPADCP0015",
        "jobExec": "ppad-pe-krb-inm-tablecatalogacctprslp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0017",
        "nextJobs": "PPADCP0018",
        "prevJobs": "PPADCP0016",
        "jobExec": "ppad-pe-spk-qlt-tablecatalogacctprslm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PPADCP0018",
        "nextJobs": "#N/A",
        "prevJobs": "PPADCP0017",
        "jobExec": "ppad-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PPAD/CR-PEPADDIA-T02.xml"
      },
      {
        "job": "PAOMCP0A01",
        "nextJobs": "PAOMCP0H02",
        "prevJobs": "PAOMCP0H01",
        "jobExec": "paom-pe-krb-inr-peoplelogduplicatesp-01",
        "isBase": false,
        "path": "./xmls/Local/PAOM/CR-PEAOMDIA-T02.xml"
      },
      {
        "job": "PAOMCP0H01",
        "nextJobs": "PAOMCP0A01",
        "prevJobs": "#N/A",
        "jobExec": "paom-pe-spk-qlt-peoplelogduplicatess-01",
        "isBase": true,
        "path": "./xmls/Local/PAOM/CR-PEAOMDIA-T02.xml"
      },
      {
        "job": "PAOMCP0H02",
        "nextJobs": "PAOMCP0P01",
        "prevJobs": "PAOMCP0A01",
        "jobExec": "paom-pe-spk-qlt-peoplelogduplicatesr-01",
        "isBase": false,
        "path": "./xmls/Local/PAOM/CR-PEAOMDIA-T02.xml"
      },
      {
        "job": "PAOMCP0P01",
        "nextJobs": "PAOMCP0H03, PCTDCP0P02",
        "prevJobs": "PAOMCP0H02",
        "jobExec": "paom-pe-krb-inm-peoplelogduplicatesp-01",
        "isBase": false,
        "path": "./xmls/Local/PAOM/CR-PEAOMDIA-T02.xml"
      },
      {
        "job": "PAOMCP0H03",
        "nextJobs": "PAOMCP0B01",
        "prevJobs": "PAOMCP0P01",
        "jobExec": "paom-pe-spk-qlt-peoplelogduplicatesm-01",
        "isBase": false,
        "path": "./xmls/Local/PAOM/CR-PEAOMDIA-T02.xml"
      },
      {
        "job": "PAOMCP0B01",
        "nextJobs": "#N/A",
        "prevJobs": "PAOMCP0H03",
        "jobExec": "hdfsdelete",
        "isBase": false,
        "path": "./xmls/Local/PAOM/CR-PEAOMDIA-T02.xml"
      },
      {
        "job": "PCRTCP4001",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-inm-mdlsubrogationtc-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4002",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-inm-dispositioneffect-02",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4004",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-inm-subrogationpld-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4005",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-inm-mdlrenopld-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTTP4I01",
        "nextJobs": "PCRTWP4I01",
        "prevJobs": "#N/A",
        "jobExec": "RX_PCRTCD0001.sh",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTWP4I01",
        "nextJobs": "PCRTCP4H01",
        "prevJobs": "PCRTTP4I01",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4H01",
        "nextJobs": "PCRTCP4I01",
        "prevJobs": "PCRTWP4I01",
        "jobExec": "pcrt-pe-spk-qlt-cotizacustomerrates-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4I01",
        "nextJobs": "PCRTCP4H02, PCRTCP4I02",
        "prevJobs": "PCRTCP4H01",
        "jobExec": "pcrt-pe-krb-inr-cotizacustomerratep-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4H02",
        "nextJobs": "#N/A",
        "prevJobs": "PCRTCP4I01",
        "jobExec": "pcrt-pe-spk-qlt-cotizacustomerrater-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4I02",
        "nextJobs": "PCRTCP4H03",
        "prevJobs": "PCRTCP4I01",
        "jobExec": "pcrt-pe-krb-inm-cotizacustomerratep-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4H03",
        "nextJobs": "#N/A",
        "prevJobs": "PCRTCP4I02",
        "jobExec": "pcrt-pe-spk-qlt-cotizacustomerratem-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4003",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-inm-mdlacquisitionpld-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4007",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-inm-mdlvehinsurance-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4014",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-inm-mdlinsurancewelcome-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4006",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-inm-mdldigitalaffil-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4008",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-inm-mdlhlthinsrncacqn-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4009",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-inm-mdlhlthinsrncrtntn-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4012",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-inm-mdlmutlfundacqn-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4013",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-inm-mdlattritionn-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4018",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-inm-campaignproccreditcard-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4I03",
        "nextJobs": "PCRTPP4001",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-krb-out-varcampaignevaluationp-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTPP4001",
        "nextJobs": "PCRTTP4001",
        "prevJobs": "PCRTCP4I03",
        "jobExec": "pcrt-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTTP4001",
        "nextJobs": "PCRTPP4002",
        "prevJobs": "PCRTPP4001",
        "jobExec": "TX_PCRTCD0001.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTPP4002",
        "nextJobs": "#N/A",
        "prevJobs": "PCRTTP4001",
        "jobExec": "pcrt-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4I04",
        "nextJobs": "PCRTPP4003",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-out-apprvoffrasgnrtcotiza-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTPP4003",
        "nextJobs": "PCRTTP4002",
        "prevJobs": "PCRTCP4I04",
        "jobExec": "pcrt-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTTP4002",
        "nextJobs": "PCRTPP4004",
        "prevJobs": "PCRTPP4003",
        "jobExec": "TX_PCRTCD0002.sh",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTPP4004",
        "nextJobs": "#N/A",
        "prevJobs": "PCRTTP4002",
        "jobExec": "pcrt-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4019",
        "nextJobs": "#N/A",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-inm-mdlvalidator-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4020",
        "nextJobs": "PCRTCP4021",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-inm-approvedoffers-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4021",
        "nextJobs": "#N/A",
        "prevJobs": "PCRTCP4020",
        "jobExec": "pcrt-pe-spk-qlt-approvedoffersoutputm-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4022",
        "nextJobs": "PCRTCP4023",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-inm-commintelmatrixmodel-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTCP4023",
        "nextJobs": "#N/A",
        "prevJobs": "PCRTCP4022",
        "jobExec": "pcrt-pe-spk-qlt-commintelmatrixmodelm-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTMEN-T02.xml"
      },
      {
        "job": "PCRTPP0001",
        "nextJobs": "PCRTPP0002",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-qlt-affiliationsavingsgoalss-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0002",
        "nextJobs": "PCRTPP0003",
        "prevJobs": "PCRTPP0001",
        "jobExec": "pcrt-pe-krb-inr-affiliationsavingsgoalsp-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0003",
        "nextJobs": "PCRTPP0004",
        "prevJobs": "PCRTPP0002",
        "jobExec": "pcrt-pe-spk-qlt-affiliationsavingsgoalsr-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0004",
        "nextJobs": "PCRTPP0005",
        "prevJobs": "PCRTPP0003",
        "jobExec": "pcrt-pe-krb-inm-affiliationsavingsgoalsp-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0005",
        "nextJobs": "PCRTPP0006",
        "prevJobs": "PCRTPP0004",
        "jobExec": "pcrt-pe-spk-qlt-affiliationsavingsgoalsm-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0006",
        "nextJobs": "#N/A",
        "prevJobs": "PCRTPP0005",
        "jobExec": "pcrt-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0007",
        "nextJobs": "PCRTPP0008",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-qlt-movsavingsgoalss-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0008",
        "nextJobs": "PCRTPP0009",
        "prevJobs": "PCRTPP0007",
        "jobExec": "pcrt-pe-krb-inr-movsavingsgoalsp-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0009",
        "nextJobs": "PCRTPP0010",
        "prevJobs": "PCRTPP0008",
        "jobExec": "pcrt-pe-spk-qlt-movsavingsgoalsr-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0010",
        "nextJobs": "PCRTPP0011",
        "prevJobs": "PCRTPP0009",
        "jobExec": "pcrt-pe-krb-inm-movsavingsgoalsp-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0011",
        "nextJobs": "PCRTPP0012",
        "prevJobs": "PCRTPP0010",
        "jobExec": "pcrt-pe-spk-qlt-movsavingsgoalsm-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0012",
        "nextJobs": "#N/A",
        "prevJobs": "PCRTPP0011",
        "jobExec": "pcrt-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0013",
        "nextJobs": "PCRTPP0014",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-qlt-virtualpocketcampaigns-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0014",
        "nextJobs": "PCRTPP0015",
        "prevJobs": "PCRTPP0013",
        "jobExec": "pcrt-pe-krb-inr-virtualpocketcampaignp-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0015",
        "nextJobs": "PCRTPP0016",
        "prevJobs": "PCRTPP0014",
        "jobExec": "pcrt-pe-spk-qlt-virtualpocketcampaignr-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0016",
        "nextJobs": "PCRTPP0017",
        "prevJobs": "PCRTPP0015",
        "jobExec": "pcrt-pe-krb-inm-virtualpocketcampaignp-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0017",
        "nextJobs": "PCRTPP0018",
        "prevJobs": "PCRTPP0016",
        "jobExec": "pcrt-pe-spk-qlt-virtualpocketcampaignm-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0018",
        "nextJobs": "#N/A",
        "prevJobs": "PCRTPP0017",
        "jobExec": "pcrt-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0019",
        "nextJobs": "PCRTPP0020",
        "prevJobs": "#N/A",
        "jobExec": "pcrt-pe-spk-qlt-virtpocketcmpgnbonuss-01",
        "isBase": true,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0020",
        "nextJobs": "PCRTPP0021",
        "prevJobs": "PCRTPP0019",
        "jobExec": "pcrt-pe-krb-inr-virtpocketcmpgnbonusp-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0021",
        "nextJobs": "PCRTPP0022",
        "prevJobs": "PCRTPP0020",
        "jobExec": "pcrt-pe-spk-qlt-virtpocketcmpgnbonusr-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0022",
        "nextJobs": "PCRTPP0023",
        "prevJobs": "PCRTPP0021",
        "jobExec": "pcrt-pe-krb-inm-virtpocketcmpgnbonusp-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0023",
        "nextJobs": "PCRTPP0024",
        "prevJobs": "PCRTPP0022",
        "jobExec": "pcrt-pe-spk-qlt-virtpocketcmpgnbonusm-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PCRTPP0024",
        "nextJobs": "#N/A",
        "prevJobs": "PCRTPP0023",
        "jobExec": "pcrt-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PCRT/CR-PECRTDIA-T02.xml"
      },
      {
        "job": "PMIGCP0H01",
        "nextJobs": "PMIGCP0I01",
        "prevJobs": "#N/A",
        "jobExec": "pmig-pe-spk-qlt-fuvexmanagerbases-01",
        "isBase": true,
        "path": "./xmls/Local/PMIG/CR-PEMIGDIA-T02.xml"
      },
      {
        "job": "PMIGCP0I01",
        "nextJobs": "PMIGCP0H02, PMIGCP0I02",
        "prevJobs": "PMIGCP0H01",
        "jobExec": "pmig-pe-krb-inr-fuvexmanagerbasep-01",
        "isBase": false,
        "path": "./xmls/Local/PMIG/CR-PEMIGDIA-T02.xml"
      },
      {
        "job": "PMIGCP0H02",
        "nextJobs": "#N/A",
        "prevJobs": "PMIGCP0I01",
        "jobExec": "pmig-pe-spk-qlt-fuvexmanagerbaser-01",
        "isBase": false,
        "path": "./xmls/Local/PMIG/CR-PEMIGDIA-T02.xml"
      },
      {
        "job": "PMIGCP0I02",
        "nextJobs": "PMIGCP0H03",
        "prevJobs": "PMIGCP0I01",
        "jobExec": "pmig-pe-krb-inm-fuvexmanagerbasep-01",
        "isBase": false,
        "path": "./xmls/Local/PMIG/CR-PEMIGDIA-T02.xml"
      },
      {
        "job": "PMIGCP0H03",
        "nextJobs": "#N/A",
        "prevJobs": "PMIGCP0I02",
        "jobExec": "pmig-pe-spk-qlt-fuvexmanagerbasem-01",
        "isBase": false,
        "path": "./xmls/Local/PMIG/CR-PEMIGDIA-T02.xml"
      },
      {
        "job": "PMIGCP0001",
        "nextJobs": "PMIGCP0002",
        "prevJobs": "#N/A",
        "jobExec": "pmig-pe-spk-qlt-managersmasters-01",
        "isBase": true,
        "path": "./xmls/Local/PMIG/CR-PEMIGDIA-T02.xml"
      },
      {
        "job": "PMIGCP0002",
        "nextJobs": "PMIGCP0003, PMIGCP0004",
        "prevJobs": "PMIGCP0001",
        "jobExec": "pmig-pe-krb-inr-managersmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PMIG/CR-PEMIGDIA-T02.xml"
      },
      {
        "job": "PMIGCP0003",
        "nextJobs": "#N/A",
        "prevJobs": "PMIGCP0002",
        "jobExec": "pmig-pe-spk-qlt-managersmasterr-01",
        "isBase": false,
        "path": "./xmls/Local/PMIG/CR-PEMIGDIA-T02.xml"
      },
      {
        "job": "PMIGCP0004",
        "nextJobs": "PMIGCP0005",
        "prevJobs": "PMIGCP0002",
        "jobExec": "pmig-pe-krb-inm-managersmasterp-01",
        "isBase": false,
        "path": "./xmls/Local/PMIG/CR-PEMIGDIA-T02.xml"
      },
      {
        "job": "PMIGCP0005",
        "nextJobs": "PMIGCP0006",
        "prevJobs": "PMIGCP0004",
        "jobExec": "pmig-pe-spk-qlt-managersmasterm-01",
        "isBase": false,
        "path": "./xmls/Local/PMIG/CR-PEMIGDIA-T02.xml"
      },
      {
        "job": "PMIGCP0006",
        "nextJobs": "#N/A",
        "prevJobs": "PMIGCP0005",
        "jobExec": "pmig-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMIG/CR-PEMIGDIA-T02.xml"
      },
      {
        "job": "PFCMCP0001",
        "nextJobs": "PFCMCP0002",
        "prevJobs": "#N/A",
        "jobExec": "pfcm-pe-spk-qlt-feedbackdatazos-01",
        "isBase": true,
        "path": "./xmls/Local/PFCM/CR-PEFCMDIA-T02.xml"
      },
      {
        "job": "PFCMCP0002",
        "nextJobs": "PFCMCP0003",
        "prevJobs": "PFCMCP0001",
        "jobExec": "pfcm-pe-krb-inr-feedbackdatazop-01",
        "isBase": false,
        "path": "./xmls/Local/PFCM/CR-PEFCMDIA-T02.xml"
      },
      {
        "job": "PFCMCP0003",
        "nextJobs": "PFCMCP0004",
        "prevJobs": "PFCMCP0002",
        "jobExec": "pfcm-pe-spk-qlt-feedbackdatazor-01",
        "isBase": false,
        "path": "./xmls/Local/PFCM/CR-PEFCMDIA-T02.xml"
      },
      {
        "job": "PFCMCP0004",
        "nextJobs": "PFCMCP0005",
        "prevJobs": "PFCMCP0003",
        "jobExec": "pfcm-pe-krb-inm-feedbackdatazop-01",
        "isBase": false,
        "path": "./xmls/Local/PFCM/CR-PEFCMDIA-T02.xml"
      },
      {
        "job": "PFCMCP0005",
        "nextJobs": "PFCMCP0006",
        "prevJobs": "PFCMCP0004",
        "jobExec": "pfcm-pe-spk-qlt-feedbackdatazom-01",
        "isBase": false,
        "path": "./xmls/Local/PFCM/CR-PEFCMDIA-T02.xml"
      },
      {
        "job": "PFCMCP0006",
        "nextJobs": "#N/A",
        "prevJobs": "PFCMCP0005",
        "jobExec": "pfcm-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PFCM/CR-PEFCMDIA-T02.xml"
      },
      {
        "job": "PFCMTP0001",
        "nextJobs": "PFCMCP0007",
        "prevJobs": "#N/A",
        "jobExec": "RX_PFCMCD0001.sh",
        "isBase": true,
        "path": "./xmls/Local/PFCM/CR-PEFCMDIA-T02.xml"
      },
      {
        "job": "PFCMCP0007",
        "nextJobs": "PFCMCP0008",
        "prevJobs": "PFCMTP0001",
        "jobExec": "pfcm-pe-spk-qlt-dailyfeedbackfuvexs-01",
        "isBase": false,
        "path": "./xmls/Local/PFCM/CR-PEFCMDIA-T02.xml"
      },
      {
        "job": "PFCMCP0008",
        "nextJobs": "PFCMCP0009, PFCMCP0010",
        "prevJobs": "PFCMCP0007",
        "jobExec": "pfcm-pe-krb-inr-dailyfeedbackfuvexp-01",
        "isBase": false,
        "path": "./xmls/Local/PFCM/CR-PEFCMDIA-T02.xml"
      },
      {
        "job": "PFCMCP0009",
        "nextJobs": "#N/A",
        "prevJobs": "PFCMCP0008",
        "jobExec": "pfcm-pe-spk-qlt-dailyfeedbackfuvexr-01",
        "isBase": false,
        "path": "./xmls/Local/PFCM/CR-PEFCMDIA-T02.xml"
      },
      {
        "job": "PFCMCP0010",
        "nextJobs": "PFCMCP0011, PFCMCP0012",
        "prevJobs": "PFCMCP0008",
        "jobExec": "pfcm-pe-krb-inm-dailyfeedbackfuvexp-01",
        "isBase": false,
        "path": "./xmls/Local/PFCM/CR-PEFCMDIA-T02.xml"
      },
      {
        "job": "PFCMCP0011",
        "nextJobs": "#N/A",
        "prevJobs": "PFCMCP0010",
        "jobExec": "pfcm-pe-spk-qlt-dailyfeedbackfuvexm-01",
        "isBase": false,
        "path": "./xmls/Local/PFCM/CR-PEFCMDIA-T02.xml"
      },
      {
        "job": "PFCMCP0012",
        "nextJobs": "#N/A",
        "prevJobs": "PFCMCP0010",
        "jobExec": "pfcm-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PFCM/CR-PEFCMDIA-T02.xml"
      },
      {
        "job": "PMOLCP0001",
        "nextJobs": "PMOLCP0002",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pmol-personal-accounts-mov-raw",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0002",
        "nextJobs": "PMOLCP0031, PKMOLCP0P01, PCTDCP0P02",
        "prevJobs": "PMOLCP0001",
        "jobExec": "pmol-pmol-personal-accounts-mov-master",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0003",
        "nextJobs": "PMOLCP0006",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pmol-collections-det-others-raw",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0006",
        "nextJobs": "PMOLCP0021, PMOLCP0022, PMOLCP0023",
        "prevJobs": "PMOLCP0003, PMOLCP0004, PMOLCP0005",
        "jobExec": "pmol-pmol-collections-mov-master",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0007",
        "nextJobs": "PMOLCP0008",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pmol-insurance-det-descrip-raw",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0008",
        "nextJobs": "PMOLCP0024",
        "prevJobs": "PMOLCP0007",
        "jobExec": "pmol-pmol-insurance-det-descrip-master",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0009",
        "nextJobs": "PMOLCP0010",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pmol-insurance-literal-raw",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0010",
        "nextJobs": "PMOLCP0025, PKPFMCP0P08",
        "prevJobs": "PMOLCP0009",
        "jobExec": "pmol-pmol-insurance-literal-master",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0004",
        "nextJobs": "PMOLCP0006, PKMOLCP0P10",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pmol-collections-det-tel-raw",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0005",
        "nextJobs": "PMOLCP0006, PKMOLCP0P10",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pmol-collections-det-mov-raw",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0013",
        "nextJobs": "PMOLCP0014, PKMOLCP0P08, PKMOLCP0P09",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pmol-loan-mov-raw",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0015",
        "nextJobs": "PMOLCP0016",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pmol-loan-receipt-mov-raw",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0014",
        "nextJobs": "PMOLCP0027, PCTDCP0P02",
        "prevJobs": "PMOLCP0013",
        "jobExec": "pmol-pmol-loan-mov-master",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0017",
        "nextJobs": "PMOLCP0018",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pmol-operation-codes-raw",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0018",
        "nextJobs": "PMOLCP0029, PKMOLCP0P03",
        "prevJobs": "PMOLCP0017",
        "jobExec": "pmol-pmol-operation-codes-master",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0019",
        "nextJobs": "PMOLCP0020",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pmol-products-catalog-raw",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0020",
        "nextJobs": "PMOLCP0030, PKPFMCP0P08",
        "prevJobs": "PMOLCP0019",
        "jobExec": "pmol-pmol-products-catalog-master",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0031",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0002",
        "jobExec": "pmol-pmol-borrado-staging",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0021",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0006",
        "jobExec": "pmol-pmol-borrado-staging",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0022",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0006",
        "jobExec": "pmol-pmol-borrado-staging",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0023",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0006",
        "jobExec": "pmol-pmol-borrado-staging",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0024",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0008",
        "jobExec": "pmol-pmol-borrado-staging",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0025",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0010",
        "jobExec": "pmol-pmol-borrado-staging",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0027",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0014",
        "jobExec": "pmol-pmol-borrado-staging",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0028",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0016",
        "jobExec": "pmol-pmol-borrado-staging",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0029",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0018",
        "jobExec": "pmol-pmol-borrado-staging",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0030",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0020",
        "jobExec": "pmol-pmol-borrado-staging",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0016",
        "nextJobs": "PMOLCP0028",
        "prevJobs": "PMOLCP0015",
        "jobExec": "pmol-pmol-loan-receipt-mov-master",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0I07",
        "nextJobs": "PMOLCP0I08",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-krb-inr-frgntradeopercntlp-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0I08",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0I07",
        "jobExec": "pmol-pe-krb-inm-frgntradeopercntlp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H01",
        "nextJobs": "PMOLCP0I09",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-dailyaveragebalances-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0I09",
        "nextJobs": "PMOLCP0I10, PMOLCP0H02",
        "prevJobs": "PMOLCP0H01",
        "jobExec": "pmol-pe-krb-inr-dailyaveragebalancep-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0I10",
        "nextJobs": "PMOLCP0H03, PMOLCP0H04, PBILCP0014",
        "prevJobs": "PMOLCP0I09",
        "jobExec": "pmol-pe-krb-inm-dailyaveragebalancep-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H02",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0I09",
        "jobExec": "pmol-pe-spk-qlt-dailyaveragebalancer-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H03",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0I10",
        "jobExec": "pmol-pe-spk-qlt-dailyaveragebalancem-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H04",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0I10",
        "jobExec": "pmol-pe-spk-qlt-dailyaveragebalancem-02",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H05",
        "nextJobs": "PMOLCP0I11",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-foreignexchangeopers-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0I11",
        "nextJobs": "PMOLCP0H06, PMOLCP0I12",
        "prevJobs": "PMOLCP0H05",
        "jobExec": "pmol-pe-krb-inr-foreignexchangeoperp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H06",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0I11",
        "jobExec": "pmol-pe-spk-qlt-foreignexchangeoperr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0I12",
        "nextJobs": "PMOLCP0H07, PBILCP0028",
        "prevJobs": "PMOLCP0I11",
        "jobExec": "pmol-pe-krb-inm-foreignexchangeoperp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H07",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0I12",
        "jobExec": "pmol-pe-spk-qlt-foreignexchangeoperm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H08",
        "nextJobs": "PMOLCP0A01",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-accountdebitmovementss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0A01",
        "nextJobs": "PMOLCP0H09",
        "prevJobs": "PMOLCP0H08",
        "jobExec": "pmol-pe-krb-inr-accountdebitmovementsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H09",
        "nextJobs": "PMOLCP0P01",
        "prevJobs": "PMOLCP0A01",
        "jobExec": "pmol-pe-spk-qlt-accountdebitmovementsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0P01",
        "nextJobs": "PMOLCP0H10",
        "prevJobs": "PMOLCP0H09",
        "jobExec": "pmol-pe-krb-inm-accountdebitmovementsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H10",
        "nextJobs": "PMOLCP0B01, PKMOLCP0P05",
        "prevJobs": "PMOLCP0P01",
        "jobExec": "pmol-pe-spk-qlt-accountdebitmovementsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0B01",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0H10",
        "jobExec": "pmol-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H11",
        "nextJobs": "PMOLCP0I13",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-loanreceiptsclctmovs-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0I13",
        "nextJobs": "PMOLCP0H12, PMOLCP0I14",
        "prevJobs": "PMOLCP0H11",
        "jobExec": "pmol-pe-krb-inr-loanreceiptsclctmovp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H12",
        "nextJobs": "PKMOLCP0P08",
        "prevJobs": "PMOLCP0I13",
        "jobExec": "pmol-pe-spk-qlt-loanreceiptsclctmovr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0I14",
        "nextJobs": "PMOLCP0H13",
        "prevJobs": "PMOLCP0I13",
        "jobExec": "pmol-pe-krb-inm-loanreceiptsclctmovp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H13",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0I14",
        "jobExec": "pmol-pe-spk-qlt-loanreceiptsclctmovm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H14",
        "nextJobs": "PMOLCP0I15",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-insurancemovementss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0I15",
        "nextJobs": "PMOLCP0H15",
        "prevJobs": "PMOLCP0H14",
        "jobExec": "pmol-pe-krb-inr-insurancemovementsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H15",
        "nextJobs": "PMOLCP0I16",
        "prevJobs": "PMOLCP0I15",
        "jobExec": "pmol-pe-spk-qlt-insurancemovementsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0I16",
        "nextJobs": "PMOLCP0H16",
        "prevJobs": "PMOLCP0H15",
        "jobExec": "pmol-pe-krb-inm-insurancemovementsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H16",
        "nextJobs": "PMOLCP0B02, PKPFMCP0P08",
        "prevJobs": "PMOLCP0I16",
        "jobExec": "pmol-pe-spk-qlt-insurancemovementsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0B02",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0H16",
        "jobExec": "pmol-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H17",
        "nextJobs": "PMOLCP0H18",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-accountstatements-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H18",
        "nextJobs": "PMOLCP0I17",
        "prevJobs": "PMOLCP0H17",
        "jobExec": "pmol-pe-spk-qlt-accountstatements-02",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0I17",
        "nextJobs": "PMOLCP0H19, PMOLCP0I18",
        "prevJobs": "PMOLCP0H18",
        "jobExec": "pmol-pe-krb-inr-accountstatementp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H19",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0I17",
        "jobExec": "pmol-pe-spk-qlt-accountstatementr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0I18",
        "nextJobs": "PMOLCP0H20",
        "prevJobs": "PMOLCP0I17",
        "jobExec": "pmol-pe-krb-inm-accountstatementp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H20",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0I18",
        "jobExec": "pmol-pe-spk-qlt-accountstatementm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H21",
        "nextJobs": "PMOLCP0I19",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-guaranteemovementss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0I19",
        "nextJobs": "PMOLCP0H22, PMOLCP0I20",
        "prevJobs": "PMOLCP0H21",
        "jobExec": "pmol-pe-krb-inr-guaranteemovementsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H22",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0I19",
        "jobExec": "pmol-pe-spk-qlt-guaranteemovementsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0I20",
        "nextJobs": "PMOLCP0H23",
        "prevJobs": "PMOLCP0I19",
        "jobExec": "pmol-pe-krb-inm-guaranteemovementsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0H23",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0I20",
        "jobExec": "pmol-pe-spk-qlt-guaranteemovementsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0032",
        "nextJobs": "PMOLCP0033",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-detailraisemovementss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0033",
        "nextJobs": "PMOLCP0034",
        "prevJobs": "PMOLCP0032",
        "jobExec": "pmol-pe-krb-inr-detailraisemovementsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0034",
        "nextJobs": "PMOLCP0035",
        "prevJobs": "PMOLCP0033",
        "jobExec": "pmol-pe-spk-qlt-detailraisemovementsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0035",
        "nextJobs": "PMOLCP0036",
        "prevJobs": "PMOLCP0034",
        "jobExec": "pmol-pe-krb-inm-detailraisemovementsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0036",
        "nextJobs": "PMOLCP0037",
        "prevJobs": "PMOLCP0035",
        "jobExec": "pmol-pe-spk-qlt-detailraisemovementsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0037",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0036",
        "jobExec": "pmol-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0038",
        "nextJobs": "PMOLCP0039",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-leasingnovationss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0039",
        "nextJobs": "PMOLCP0040",
        "prevJobs": "PMOLCP0038",
        "jobExec": "pmol-pe-krb-inr-leasingnovationsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0040",
        "nextJobs": "PMOLCP0041",
        "prevJobs": "PMOLCP0039",
        "jobExec": "pmol-pe-spk-qlt-leasingnovationsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0041",
        "nextJobs": "PMOLCP0042",
        "prevJobs": "PMOLCP0040",
        "jobExec": "pmol-pe-krb-inm-leasingnovationsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0042",
        "nextJobs": "PMOLCP0043",
        "prevJobs": "PMOLCP0041",
        "jobExec": "pmol-pe-spk-qlt-leasingnovationsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0043",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0042",
        "jobExec": "pmol-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0044",
        "nextJobs": "PMOLCP0045",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-foreigntradepymtinfos-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0045",
        "nextJobs": "PMOLCP0046",
        "prevJobs": "PMOLCP0044",
        "jobExec": "pmol-pe-krb-inr-foreigntradepymtinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0046",
        "nextJobs": "PMOLCP0047",
        "prevJobs": "PMOLCP0045",
        "jobExec": "pmol-pe-spk-qlt-foreigntradepymtinfor-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0047",
        "nextJobs": "PMOLCP0048",
        "prevJobs": "PMOLCP0046",
        "jobExec": "pmol-pe-krb-inm-foreigntradepymtinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0048",
        "nextJobs": "PMOLCP0049",
        "prevJobs": "PMOLCP0047",
        "jobExec": "pmol-pe-spk-qlt-foreigntradepymtinfom-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0049",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0048",
        "jobExec": "pmol-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0050",
        "nextJobs": "PMOLCP0051",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-receiptscollectedguartes-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0051",
        "nextJobs": "PMOLCP0052",
        "prevJobs": "PMOLCP0050",
        "jobExec": "pmol-pe-krb-inr-receiptscollectedguartep-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0052",
        "nextJobs": "PMOLCP0053",
        "prevJobs": "PMOLCP0051",
        "jobExec": "pmol-pe-spk-qlt-receiptscollectedguarter-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0053",
        "nextJobs": "PMOLCP0054",
        "prevJobs": "PMOLCP0052",
        "jobExec": "pmol-pe-krb-inm-receiptscollectedguartep-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0054",
        "nextJobs": "PMOLCP0055",
        "prevJobs": "PMOLCP0053",
        "jobExec": "pmol-pe-spk-qlt-receiptscollectedguartem-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0055",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0054",
        "jobExec": "pmol-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0056",
        "nextJobs": "PMOLCP0057",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-clctmovementss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0057",
        "nextJobs": "PMOLCP0058",
        "prevJobs": "PMOLCP0056",
        "jobExec": "pmol-pe-krb-inr-clctmovementsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0058",
        "nextJobs": "PMOLCP0059",
        "prevJobs": "PMOLCP0057",
        "jobExec": "pmol-pe-spk-qlt-clctmovementsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0059",
        "nextJobs": "PMOLCP0060",
        "prevJobs": "PMOLCP0058",
        "jobExec": "pmol-pe-krb-inm-clctmovementsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0060",
        "nextJobs": "PMOLCP0061, PKMOLCP0P10",
        "prevJobs": "PMOLCP0059",
        "jobExec": "pmol-pe-spk-qlt-clctmovementsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0061",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0060",
        "jobExec": "pmol-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0062",
        "nextJobs": "PMOLCP0063",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-legalapplcustoblgmovs-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0063",
        "nextJobs": "PMOLCP0064, PMOLCP0065",
        "prevJobs": "PMOLCP0062",
        "jobExec": "pmol-pe-krb-inr-legalapplcustoblgmovp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0064",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0063",
        "jobExec": "pmol-pe-spk-qlt-legalapplcustoblgmovr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0065",
        "nextJobs": "PMOLCP0066",
        "prevJobs": "PMOLCP0063",
        "jobExec": "pmol-pe-krb-inm-legalapplcustoblgmovp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0066",
        "nextJobs": "PMOLCP0067",
        "prevJobs": "PMOLCP0065",
        "jobExec": "pmol-pe-spk-qlt-legalapplcustoblgmovm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0067",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0066",
        "jobExec": "pmol-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0068",
        "nextJobs": "PMOLCP0069",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-perslacctpenddebtss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0069",
        "nextJobs": "PMOLCP0070, PMOLCP0071",
        "prevJobs": "PMOLCP0068",
        "jobExec": "pmol-pe-krb-inr-perslacctpenddebtsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0070",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0069",
        "jobExec": "pmol-pe-spk-qlt-perslacctpenddebtsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0071",
        "nextJobs": "PMOLCP0072",
        "prevJobs": "PMOLCP0069",
        "jobExec": "pmol-pe-krb-inm-perslacctpenddebtsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0072",
        "nextJobs": "PMOLCP0073",
        "prevJobs": "PMOLCP0071",
        "jobExec": "pmol-pe-spk-qlt-perslacctpenddebtsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0073",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0072",
        "jobExec": "pmol-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0074",
        "nextJobs": "PMOLCP0075",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-debitcardmovementss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0075",
        "nextJobs": "PMOLCP0076, PMOLCP0077",
        "prevJobs": "PMOLCP0074",
        "jobExec": "pmol-pe-krb-inr-debitcardmovementsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0076",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0075",
        "jobExec": "pmol-pe-spk-qlt-debitcardmovementsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0077",
        "nextJobs": "PMOLCP0078",
        "prevJobs": "PMOLCP0075",
        "jobExec": "pmol-pe-krb-inm-debitcardmovementsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0078",
        "nextJobs": "PMOLCP0079, PKMOLCP0P05",
        "prevJobs": "PMOLCP0077",
        "jobExec": "pmol-pe-spk-qlt-debitcardmovementsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0079",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0078",
        "jobExec": "pmol-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0080",
        "nextJobs": "PMOLCP0081",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-creditcardmovementss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0081",
        "nextJobs": "PMOLCP0082, PMOLCP0083",
        "prevJobs": "PMOLCP0080",
        "jobExec": "pmol-pe-krb-inr-creditcardmovementsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0082",
        "nextJobs": "PKMOLCP0P10",
        "prevJobs": "PMOLCP0081",
        "jobExec": "pmol-pe-spk-qlt-creditcardmovementsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0083",
        "nextJobs": "PMOLCP0084",
        "prevJobs": "PMOLCP0081",
        "jobExec": "pmol-pe-krb-inm-creditcardmovementsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0084",
        "nextJobs": "PMOLCP0085, PKMOLCP0P02, PKPFMCP0P08, PKMOLCP0P10",
        "prevJobs": "PMOLCP0083",
        "jobExec": "pmol-pe-spk-qlt-creditcardmovementsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0085",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0084",
        "jobExec": "pmol-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0086",
        "nextJobs": "PMOLCP0087",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-portfolioctrctmovhists-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0087",
        "nextJobs": "PMOLCP0088, PMOLCP0089",
        "prevJobs": "PMOLCP0086",
        "jobExec": "pmol-pe-krb-inr-portfolioctrctmovhistp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0088",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0087",
        "jobExec": "pmol-pe-spk-qlt-portfolioctrctmovhistr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0089",
        "nextJobs": "PMOLCP0090",
        "prevJobs": "PMOLCP0087",
        "jobExec": "pmol-pe-krb-inm-portfolioctrctmovhistp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0090",
        "nextJobs": "PMOLCP0091",
        "prevJobs": "PMOLCP0089",
        "jobExec": "pmol-pe-spk-qlt-portfolioctrctmovhistm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0091",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0090",
        "jobExec": "pmol-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0092",
        "nextJobs": "PMOLCP0093",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-infointltransferopers-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0093",
        "nextJobs": "PMOLCP0094",
        "prevJobs": "PMOLCP0092",
        "jobExec": "pmol-pe-krb-inr-infointltransferoperp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0094",
        "nextJobs": "PMOLCP0095",
        "prevJobs": "PMOLCP0093",
        "jobExec": "pmol-pe-spk-qlt-infointltransferoperr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0095",
        "nextJobs": "PMOLCP0096",
        "prevJobs": "PMOLCP0094",
        "jobExec": "pmol-pe-krb-inm-infointltransferoperp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0096",
        "nextJobs": "PMOLCP0097",
        "prevJobs": "PMOLCP0095",
        "jobExec": "pmol-pe-spk-qlt-infointltransferoperm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0097",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0096",
        "jobExec": "pmol-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0098",
        "nextJobs": "PMOLCP0099",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-intltransfsettledopers-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0099",
        "nextJobs": "PMOLCP0100",
        "prevJobs": "PMOLCP0098",
        "jobExec": "pmol-pe-krb-inr-intltransfsettledoperp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0100",
        "nextJobs": "PMOLCP0101",
        "prevJobs": "PMOLCP0099",
        "jobExec": "pmol-pe-spk-qlt-intltransfsettledoperr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0101",
        "nextJobs": "PMOLCP0102",
        "prevJobs": "PMOLCP0100",
        "jobExec": "pmol-pe-krb-inm-intltransfsettledoperp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0102",
        "nextJobs": "PMOLCP0103",
        "prevJobs": "PMOLCP0101",
        "jobExec": "pmol-pe-spk-qlt-intltransfsettledoperm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0103",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0102",
        "jobExec": "pmol-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0104",
        "nextJobs": "PMOLCP0105",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-intrandetlsettledopers-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0105",
        "nextJobs": "PMOLCP0106",
        "prevJobs": "PMOLCP0104",
        "jobExec": "pmol-pe-krb-inr-intrandetlsettledoperp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0106",
        "nextJobs": "PMOLCP0107",
        "prevJobs": "PMOLCP0105",
        "jobExec": "pmol-pe-spk-qlt-intrandetlsettledoperr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0107",
        "nextJobs": "PMOLCP0108",
        "prevJobs": "PMOLCP0106",
        "jobExec": "pmol-pe-krb-inm-intrandetlsettledoperp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0108",
        "nextJobs": "PMOLCP0109",
        "prevJobs": "PMOLCP0107",
        "jobExec": "pmol-pe-spk-qlt-intrandetlsettledoperm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP0109",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP0108",
        "jobExec": "pmol-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLDIA-T02.xml"
      },
      {
        "job": "PMOLCP4H01",
        "nextJobs": "PMOLCP4I01",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I01",
        "nextJobs": "PMOLCP4H02, PMOLCP4I02",
        "prevJobs": "PMOLCP4H01",
        "jobExec": "pmol-pe-krb-inr-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H02",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I01",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I02",
        "nextJobs": "PMOLCP4H03",
        "prevJobs": "PMOLCP4I01",
        "jobExec": "pmol-pe-krb-inm-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H03",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I02",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H04",
        "nextJobs": "PMOLCP4I03",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I03",
        "nextJobs": "PMOLCP4H05, PMOLCP4I04",
        "prevJobs": "PMOLCP4H04",
        "jobExec": "pmol-pe-krb-inr-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H05",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I03",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I04",
        "nextJobs": "PMOLCP4H06",
        "prevJobs": "PMOLCP4I03",
        "jobExec": "pmol-pe-krb-inm-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H06",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I04",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H07",
        "nextJobs": "PMOLCP4I05",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I05",
        "nextJobs": "PMOLCP4H08, PMOLCP4I06",
        "prevJobs": "PMOLCP4H07",
        "jobExec": "pmol-pe-krb-inr-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H08",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I05",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I06",
        "nextJobs": "PMOLCP4H09",
        "prevJobs": "PMOLCP4I05",
        "jobExec": "pmol-pe-krb-inm-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H09",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I06",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H10",
        "nextJobs": "PMOLCP4I07",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I07",
        "nextJobs": "PMOLCP4H11, PMOLCP4I08",
        "prevJobs": "PMOLCP4H10",
        "jobExec": "pmol-pe-krb-inr-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H11",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I07",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I08",
        "nextJobs": "PMOLCP4H12",
        "prevJobs": "PMOLCP4I07",
        "jobExec": "pmol-pe-krb-inm-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H12",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I08",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H13",
        "nextJobs": "PMOLCP4I09",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I09",
        "nextJobs": "PMOLCP4H14, PMOLCP4I10",
        "prevJobs": "PMOLCP4H13",
        "jobExec": "pmol-pe-krb-inr-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H14",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I09",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I10",
        "nextJobs": "PMOLCP4H15",
        "prevJobs": "PMOLCP4I09",
        "jobExec": "pmol-pe-krb-inm-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H15",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I10",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H16",
        "nextJobs": "PMOLCP4I11",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I11",
        "nextJobs": "PMOLCP4H17, PMOLCP4I12",
        "prevJobs": "PMOLCP4H16",
        "jobExec": "pmol-pe-krb-inr-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H17",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I11",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I12",
        "nextJobs": "PMOLCP4H18",
        "prevJobs": "PMOLCP4I11",
        "jobExec": "pmol-pe-krb-inm-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H18",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I12",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H19",
        "nextJobs": "PMOLCP4I13",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I13",
        "nextJobs": "PMOLCP4H20, PMOLCP4I14",
        "prevJobs": "PMOLCP4H19",
        "jobExec": "pmol-pe-krb-inr-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H20",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I13",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I14",
        "nextJobs": "PMOLCP4H21",
        "prevJobs": "PMOLCP4I13",
        "jobExec": "pmol-pe-krb-inm-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H21",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I14",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H22",
        "nextJobs": "PMOLCP4I15",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I15",
        "nextJobs": "PMOLCP4H23, PMOLCP4I16",
        "prevJobs": "PMOLCP4H22",
        "jobExec": "pmol-pe-krb-inr-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H23",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I15",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I16",
        "nextJobs": "PMOLCP4H24",
        "prevJobs": "PMOLCP4I15",
        "jobExec": "pmol-pe-krb-inm-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H24",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I16",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H25",
        "nextJobs": "PMOLCP4I17",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I17",
        "nextJobs": "PMOLCP4H26, PMOLCP4I18",
        "prevJobs": "PMOLCP4H25",
        "jobExec": "pmol-pe-krb-inr-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H26",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I17",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I18",
        "nextJobs": "PMOLCP4H27",
        "prevJobs": "PMOLCP4I17",
        "jobExec": "pmol-pe-krb-inm-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H27",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I18",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H28",
        "nextJobs": "PMOLCP4I19",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I19",
        "nextJobs": "PMOLCP4H29, PMOLCP4I20",
        "prevJobs": "PMOLCP4H28",
        "jobExec": "pmol-pe-krb-inr-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H29",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I19",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I20",
        "nextJobs": "PMOLCP4H30",
        "prevJobs": "PMOLCP4I19",
        "jobExec": "pmol-pe-krb-inm-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H30",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I20",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H31",
        "nextJobs": "PMOLCP4I21",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I21",
        "nextJobs": "PMOLCP4H32, PMOLCP4I22",
        "prevJobs": "PMOLCP4H31",
        "jobExec": "pmol-pe-krb-inr-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H32",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I21",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I22",
        "nextJobs": "PMOLCP4H33",
        "prevJobs": "PMOLCP4I21",
        "jobExec": "pmol-pe-krb-inm-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H33",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I22",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H34",
        "nextJobs": "PMOLCP4I23",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductss-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I23",
        "nextJobs": "PMOLCP4H35, PMOLCP4I24",
        "prevJobs": "PMOLCP4H34",
        "jobExec": "pmol-pe-krb-inr-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H35",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I23",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I24",
        "nextJobs": "PMOLCP4H36",
        "prevJobs": "PMOLCP4I23",
        "jobExec": "pmol-pe-krb-inm-movvaryproductsp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H36",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I24",
        "jobExec": "pmol-pe-spk-qlt-movvaryproductsm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H37",
        "nextJobs": "PMOLCP4I25",
        "prevJobs": "#N/A",
        "jobExec": "pmol-pe-spk-qlt-foreignexchangeopers-01",
        "isBase": true,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I25",
        "nextJobs": "PMOLCP4H38, PMOLCP4I26",
        "prevJobs": "PMOLCP4H37",
        "jobExec": "pmol-pe-krb-inr-foreignexchangeoperp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H38",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I25",
        "jobExec": "pmol-pe-spk-qlt-foreignexchangeoperr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4I26",
        "nextJobs": "PMOLCP4H39",
        "prevJobs": "PMOLCP4I25",
        "jobExec": "pmol-pe-krb-inm-foreignexchangeoperp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PMOLCP4H39",
        "nextJobs": "#N/A",
        "prevJobs": "PMOLCP4I26",
        "jobExec": "pmol-pe-spk-qlt-foreignexchangeoperm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOL/CR-PEMOLMEN-T02.xml"
      },
      {
        "job": "PRDCTP0I01",
        "nextJobs": "PRDCCP0H01",
        "prevJobs": "#N/A",
        "jobExec": "RX_PRDCCD0001.sh",
        "isBase": true,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H01",
        "nextJobs": "PRDCCP0I01",
        "prevJobs": "PRDCTP0I01",
        "jobExec": "prdc-pe-spk-qlt-spectrummarketindexess-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I01",
        "nextJobs": "PRDCCP0H02, PRDCCP0I02",
        "prevJobs": "PRDCCP0H01",
        "jobExec": "prdc-pe-krb-inr-spectrummarketindexesp-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H02",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I01",
        "jobExec": "prdc-pe-spk-qlt-spectrummarketindexesr-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I02",
        "nextJobs": "PRDCCP0H03",
        "prevJobs": "PRDCCP0I01",
        "jobExec": "prdc-pe-krb-inm-spectrummarketindexesp-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H03",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I02",
        "jobExec": "prdc-pe-spk-qlt-spectrummarketindexesm-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H04",
        "nextJobs": "PRDCCP0I03",
        "prevJobs": "PRDCTP0I02",
        "jobExec": "prdc-pe-spk-qlt-spectrumgmoperevents-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I03",
        "nextJobs": "PRDCCP0H05, PRDCCP0I04",
        "prevJobs": "PRDCCP0H04",
        "jobExec": "prdc-pe-krb-inr-spectrumgmopereventp-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H05",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I03",
        "jobExec": "prdc-pe-spk-qlt-spectrumgmopereventr-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I04",
        "nextJobs": "PRDCCP0H06",
        "prevJobs": "PRDCCP0I03",
        "jobExec": "prdc-pe-krb-inm-spectrumgmopereventp-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H06",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I04",
        "jobExec": "prdc-pe-spk-qlt-spectrumgmopereventm-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCTP0I02",
        "nextJobs": "PRDCCP0H04",
        "prevJobs": "#N/A",
        "jobExec": "RX_PRDCCD0004.sh",
        "isBase": true,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H07",
        "nextJobs": "PRDCCP0I05",
        "prevJobs": "PRDCTP0I03",
        "jobExec": "prdc-pe-spk-qlt-spectrumsecurdetlinfos-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H08",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I05",
        "jobExec": "prdc-pe-spk-qlt-spectrumsecurdetlinfor-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I05",
        "nextJobs": "PRDCCP0H08, PRDCCP0I06",
        "prevJobs": "PRDCCP0H07",
        "jobExec": "prdc-pe-krb-inr-spectrumsecurdetlinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H09",
        "nextJobs": "PRDCCP0001",
        "prevJobs": "PRDCCP0I06",
        "jobExec": "prdc-pe-spk-qlt-spectrumsecurdetlinfom-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I06",
        "nextJobs": "PRDCCP0H09",
        "prevJobs": "PRDCCP0I05",
        "jobExec": "prdc-pe-krb-inm-spectrumsecurdetlinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCTP0I03",
        "nextJobs": "PRDCCP0H07",
        "prevJobs": "#N/A",
        "jobExec": "RX_PRDCCD0003.sh",
        "isBase": true,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I08",
        "nextJobs": "PRDCCP0H12",
        "prevJobs": "PRDCCP0I07",
        "jobExec": "prdc-pe-krb-inm-spectrumauxiliaryfieldsp-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H11",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I07",
        "jobExec": "prdc-pe-spk-qlt-spectrumauxiliaryfieldsr-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I07",
        "nextJobs": "PRDCCP0H11, PRDCCP0I08",
        "prevJobs": "PRDCCP0H10",
        "jobExec": "prdc-pe-krb-inr-spectrumauxiliaryfieldsp-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H10",
        "nextJobs": "PRDCCP0I07",
        "prevJobs": "PRDCTP0I04",
        "jobExec": "prdc-pe-spk-qlt-spectrumauxiliaryfieldss-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H12",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I08",
        "jobExec": "prdc-pe-spk-qlt-spectrumauxiliaryfieldsm-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCTP0I04",
        "nextJobs": "PRDCCP0H10",
        "prevJobs": "#N/A",
        "jobExec": "RX_PRDCCD0002.sh",
        "isBase": true,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCTP0I05",
        "nextJobs": "PRDCCP0H13",
        "prevJobs": "#N/A",
        "jobExec": "RX_PRDCCD0005.sh",
        "isBase": true,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H13",
        "nextJobs": "PRDCCP0I09",
        "prevJobs": "PRDCTP0I05",
        "jobExec": "prdc-pe-spk-qlt-spctrgmclsdoperinvtys-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I09",
        "nextJobs": "PRDCCP0H14, PRDCCP0I10",
        "prevJobs": "PRDCCP0H13",
        "jobExec": "prdc-pe-krb-inr-spctrgmclsdoperinvtyp-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H14",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I09",
        "jobExec": "prdc-pe-spk-qlt-spctrgmclsdoperinvtyr-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I10",
        "nextJobs": "PRDCCP0H15, PRDCCP0I12",
        "prevJobs": "PRDCCP0I09",
        "jobExec": "prdc-pe-krb-inm-spctrgmclsdoperinvtyp-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H15",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I10",
        "jobExec": "prdc-pe-spk-qlt-spctrgmclsdoperinvtym-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCTP0I06",
        "nextJobs": "PRDCCP0H16",
        "prevJobs": "#N/A",
        "jobExec": "RX_PRDCCD0006.sh",
        "isBase": true,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H16",
        "nextJobs": "PRDCCP0I11",
        "prevJobs": "PRDCTP0I06",
        "jobExec": "prdc-pe-spk-qlt-spectrumgmoperinvtys-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I11",
        "nextJobs": "PRDCCP0H17, PRDCCP0I12",
        "prevJobs": "PRDCCP0H16",
        "jobExec": "prdc-pe-krb-inr-spectrumgmoperinvtyp-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H17",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I11",
        "jobExec": "prdc-pe-spk-qlt-spectrumgmoperinvtyr-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I12",
        "nextJobs": "PRDCCP0H18",
        "prevJobs": "PRDCCP0I10, PRDCCP0I11",
        "jobExec": "prdc-pe-spk-inm-spectrumgmoperinvty-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H18",
        "nextJobs": "PRDCCP0002",
        "prevJobs": "PRDCCP0I12",
        "jobExec": "prdc-pe-spk-qlt-spectrumgmoperinvtym-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCTP0I07",
        "nextJobs": "PRDCCP0H19",
        "prevJobs": "#N/A",
        "jobExec": "RX_PRDCCD0007.sh",
        "isBase": true,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H19",
        "nextJobs": "PRDCCP0I13",
        "prevJobs": "PRDCTP0I07",
        "jobExec": "prdc-pe-spk-qlt-spctrcptanddateprices-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I13",
        "nextJobs": "PRDCCP0H20, PRDCCP0I14",
        "prevJobs": "PRDCCP0H19",
        "jobExec": "prdc-pe-krb-inr-spctrcptanddatepricep-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H20",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I13",
        "jobExec": "prdc-pe-spk-qlt-spctrcptanddatepricer-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I14",
        "nextJobs": "PRDCCP0H21",
        "prevJobs": "PRDCCP0I13",
        "jobExec": "prdc-pe-krb-inm-spctrcptanddatepricep-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H21",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I14",
        "jobExec": "prdc-pe-spk-qlt-spctrcptanddatepricem-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCTP0I08",
        "nextJobs": "PRDCCP0H22",
        "prevJobs": "#N/A",
        "jobExec": "RX_PRDCCD0008.sh",
        "isBase": true,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H22",
        "nextJobs": "PRDCCP0I15",
        "prevJobs": "PRDCTP0I08",
        "jobExec": "prdc-pe-spk-qlt-spctrconceptspricedates-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I15",
        "nextJobs": "PRDCCP0H23, PRDCCP0I16",
        "prevJobs": "PRDCCP0H22",
        "jobExec": "prdc-pe-krb-inr-spctrconceptspricedatep-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H23",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I15",
        "jobExec": "prdc-pe-spk-qlt-spctrconceptspricedater-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I16",
        "nextJobs": "PRDCCP0H24",
        "prevJobs": "PRDCCP0I15",
        "jobExec": "prdc-pe-krb-inm-spctrconceptspricedatep-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H24",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I16",
        "jobExec": "prdc-pe-spk-qlt-spctrconceptspricedatem-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCTP0I09",
        "nextJobs": "PRDCCP0H25",
        "prevJobs": "#N/A",
        "jobExec": "RX_PRDCCD0009.sh",
        "isBase": true,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H25",
        "nextJobs": "PRDCCP0I17",
        "prevJobs": "PRDCTP0I09",
        "jobExec": "prdc-pe-spk-qlt-spctrpriceconceptsdescs-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I17",
        "nextJobs": "PRDCCP0H26, PRDCCP0I18",
        "prevJobs": "PRDCCP0H25",
        "jobExec": "prdc-pe-krb-inr-spctrpriceconceptsdescp-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H26",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I17",
        "jobExec": "prdc-pe-spk-qlt-spctrpriceconceptsdescr-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I18",
        "nextJobs": "PRDCCP0H27",
        "prevJobs": "PRDCCP0I17",
        "jobExec": "prdc-pe-krb-inm-spctrpriceconceptsdescp-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H27",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I18",
        "jobExec": "prdc-pe-spk-qlt-spctrpriceconceptsdescm-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCTP0I10",
        "nextJobs": "PRDCCP0H28",
        "prevJobs": "#N/A",
        "jobExec": "RX_PRDCCD0010.sh",
        "isBase": true,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H28",
        "nextJobs": "PRDCCP0I19",
        "prevJobs": "PRDCTP0I10",
        "jobExec": "prdc-pe-spk-qlt-spectrumauxdatadefns-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I19",
        "nextJobs": "PRDCCP0H29, PRDCCP0I20",
        "prevJobs": "PRDCCP0H28",
        "jobExec": "prdc-pe-krb-inr-spectrumauxdatadefnp-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H29",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I19",
        "jobExec": "prdc-pe-spk-qlt-spectrumauxdatadefnr-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I20",
        "nextJobs": "PRDCCP0H30",
        "prevJobs": "PRDCCP0I19",
        "jobExec": "prdc-pe-krb-inm-spectrumauxdatadefnp-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H30",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I20",
        "jobExec": "prdc-pe-spk-qlt-spectrumauxdatadefnm-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCTP0I11",
        "nextJobs": "PRDCCP0H31",
        "prevJobs": "#N/A",
        "jobExec": "RX_PRDCCD0011.sh",
        "isBase": true,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H31",
        "nextJobs": "PRDCCP0I21",
        "prevJobs": "PRDCTP0I11",
        "jobExec": "prdc-pe-spk-qlt-spctrauxfieldinfoaddls-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I21",
        "nextJobs": "PRDCCP0H32, PRDCCP0I22",
        "prevJobs": "PRDCCP0H31",
        "jobExec": "prdc-pe-krb-inr-spctrauxfieldinfoaddlp-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H32",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I21",
        "jobExec": "prdc-pe-spk-qlt-spctrauxfieldinfoaddlr-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I22",
        "nextJobs": "PRDCCP0H33",
        "prevJobs": "PRDCCP0I21",
        "jobExec": "prdc-pe-spk-inm-loaddifferentialprocess-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H33",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I22",
        "jobExec": "prdc-pe-spk-qlt-spctrauxfieldinfoaddlm-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCTP0I12",
        "nextJobs": "PRDCCP0H34",
        "prevJobs": "#N/A",
        "jobExec": "RX_PRDCCD0012.sh",
        "isBase": true,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H34",
        "nextJobs": "PRDCCP0I23",
        "prevJobs": "PRDCTP0I12",
        "jobExec": "prdc-pe-spk-qlt-spectrummtmoperinfos-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I23",
        "nextJobs": "PRDCCP0H35, PRDCCP0I24",
        "prevJobs": "PRDCCP0H34",
        "jobExec": "prdc-pe-krb-inr-spectrummtmoperinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H35",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I23",
        "jobExec": "prdc-pe-spk-qlt-spectrummtmoperinfor-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I24",
        "nextJobs": "PRDCCP0H36",
        "prevJobs": "PRDCCP0I23",
        "jobExec": "prdc-pe-krb-inm-spectrummtmoperinfop-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H36",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I24",
        "jobExec": "prdc-pe-spk-qlt-spectrummtmoperinfom-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCTP0I13",
        "nextJobs": "PRDCCP0H37",
        "prevJobs": "#N/A",
        "jobExec": "RX_PRDCCD0013.sh",
        "isBase": true,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H37",
        "nextJobs": "PRDCCP0I25",
        "prevJobs": "PRDCTP0I13",
        "jobExec": "prdc-pe-spk-qlt-gmoperctptyptinsts-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I25",
        "nextJobs": "PRDCCP0H38, PRDCCP0I26",
        "prevJobs": "PRDCCP0H37",
        "jobExec": "prdc-pe-krb-inr-gmoperctptyptinstp-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H38",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I25",
        "jobExec": "prdc-pe-spk-qlt-gmoperctptyptinstr-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0I26",
        "nextJobs": "PRDCCP0H39",
        "prevJobs": "PRDCCP0I25",
        "jobExec": "prdc-pe-krb-inm-gmoperctptyptinstp-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0H39",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0I26",
        "jobExec": "prdc-pe-spk-qlt-gmoperctptyptinstm-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0001",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0H09",
        "jobExec": "prdc-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PRDCCP0002",
        "nextJobs": "#N/A",
        "prevJobs": "PRDCCP0H18",
        "jobExec": "prdc-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PRDC/CR-PERDCDIA-T02.xml"
      },
      {
        "job": "PMORTP0001",
        "nextJobs": "PMORWP0001",
        "prevJobs": "#N/A",
        "jobExec": "RX_PEXTCD0001.sh",
        "isBase": true,
        "path": "./xmls/Local/PMOR/CR-PEMORDIA-T02.xml"
      },
      {
        "job": "PMORTP0002",
        "nextJobs": "PMORWP0002",
        "prevJobs": "#N/A",
        "jobExec": "RX_PEXTCD0002.sh",
        "isBase": true,
        "path": "./xmls/Local/PMOR/CR-PEMORDIA-T02.xml"
      },
      {
        "job": "PMORWP0001",
        "nextJobs": "PMORCP0I01",
        "prevJobs": "PMORTP0001",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORDIA-T02.xml"
      },
      {
        "job": "PMORCP0I02",
        "nextJobs": "#N/A",
        "prevJobs": "PMORCP0I01",
        "jobExec": "pmor-pe-krb-inm-riskcapitalcontractp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORDIA-T02.xml"
      },
      {
        "job": "PMORCP0I01",
        "nextJobs": "PMORCP0I02",
        "prevJobs": "PMORWP0001",
        "jobExec": "pmor-pe-krb-inr-riskcapitalcontractp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORDIA-T02.xml"
      },
      {
        "job": "PMORCP0I03",
        "nextJobs": "PMORCP0I04",
        "prevJobs": "PMORWP0002",
        "jobExec": "pmor-pe-krb-inr-riskcapitalsequencep-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORDIA-T02.xml"
      },
      {
        "job": "PMORCP0I04",
        "nextJobs": "#N/A",
        "prevJobs": "PMORCP0I03",
        "jobExec": "pmor-pe-krb-inm-riskcapitalsequencep-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORDIA-T02.xml"
      },
      {
        "job": "PMORWP0002",
        "nextJobs": "PMORCP0I03",
        "prevJobs": "PMORTP0002",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORDIA-T02.xml"
      },
      {
        "job": "PMORCP4H01",
        "nextJobs": "PMORCP4I01",
        "prevJobs": "#N/A",
        "jobExec": "pmor-pe-spk-qlt-credittypecustclsfns-01",
        "isBase": true,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORCP4I01",
        "nextJobs": "PMORCP4H02, PMORCP4I02",
        "prevJobs": "PMORCP4H01",
        "jobExec": "pmor-pe-spk-inr-credittypecustclsfn-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORCP4H02",
        "nextJobs": "#N/A",
        "prevJobs": "PMORCP4I01",
        "jobExec": "pmor-pe-spk-qlt-credittypecustclsfnr-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORCP4I02",
        "nextJobs": "PMORCP4H03",
        "prevJobs": "PMORCP4I01",
        "jobExec": "pmor-pe-krb-inm-credittypecustclsfnp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORCP4H03",
        "nextJobs": "#N/A",
        "prevJobs": "PMORCP4I02",
        "jobExec": "pmor-pe-spk-qlt-credittypecustclsfnm-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORCP4I03",
        "nextJobs": "PMORPP4001",
        "prevJobs": "#N/A",
        "jobExec": "pmor-pe-krb-out-resltprbltyproactmodelp-01",
        "isBase": true,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORPP4001",
        "nextJobs": "PMORTP4001",
        "prevJobs": "PMORCP4I03",
        "jobExec": "pmor-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORTP4001",
        "nextJobs": "PMORPP4003",
        "prevJobs": "PMORPP4001",
        "jobExec": "TX_PMORCD0001.sh",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORPP4003",
        "nextJobs": "#N/A",
        "prevJobs": "PMORTP4001",
        "jobExec": "pmor-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORCP4I04",
        "nextJobs": "PMORPP4002",
        "prevJobs": "#N/A",
        "jobExec": "pmor-pe-krb-out-customerscreditsfeep-01",
        "isBase": true,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORPP4002",
        "nextJobs": "PMORTP4002",
        "prevJobs": "PMORCP4I04",
        "jobExec": "pmor-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORTP4002",
        "nextJobs": "PMORPP4004",
        "prevJobs": "PMORPP4002",
        "jobExec": "TX_PMORCD0002.sh",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORPP4004",
        "nextJobs": "#N/A",
        "prevJobs": "PMORTP4002",
        "jobExec": "pmor-pe-dfs-rmv-removefileshdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORCP4001",
        "nextJobs": "PMORCP4002",
        "prevJobs": "#N/A",
        "jobExec": "pmor-pe-spk-qlt-naturalpeoplebureaus-01",
        "isBase": true,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORCP4002",
        "nextJobs": "PMORCP4003",
        "prevJobs": "PMORCP4001",
        "jobExec": "pmor-pe-krb-inr-naturalpeoplebureaup-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORCP4003",
        "nextJobs": "PMORCP4004",
        "prevJobs": "PMORCP4002",
        "jobExec": "pmor-pe-spk-qlt-naturalpeoplebureaur-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORCP4004",
        "nextJobs": "PMORCP4005",
        "prevJobs": "PMORCP4003",
        "jobExec": "pmor-pe-krb-inm-naturalpeoplebureaup-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORCP4005",
        "nextJobs": "PMORCP4006",
        "prevJobs": "PMORCP4004",
        "jobExec": "pmor-pe-spk-qlt-naturalpeoplebureaum-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORCP4006",
        "nextJobs": "#N/A",
        "prevJobs": "PMORCP4005",
        "jobExec": "pmor-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORTP4003",
        "nextJobs": "PMORWP4001",
        "prevJobs": "#N/A",
        "jobExec": "RX_PEXTCD0001.sh",
        "isBase": true,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORWP4001",
        "nextJobs": "PMORCP4007",
        "prevJobs": "PMORTP4003",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORCP4007",
        "nextJobs": "PMORCP4008",
        "prevJobs": "PMORWP4001",
        "jobExec": "pmor-pe-krb-inr-riskcapitalcontractp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PMORCP4008",
        "nextJobs": "#N/A",
        "prevJobs": "PMORCP4007",
        "jobExec": "pmor-pe-krb-inm-riskcapitalcontractp-01",
        "isBase": false,
        "path": "./xmls/Local/PMOR/CR-PEMORMEN-T02.xml"
      },
      {
        "job": "PORKCP4H01",
        "nextJobs": "PORKCP4I01",
        "prevJobs": "#N/A",
        "jobExec": "pork-pe-spk-qlt-annex5provisionss-01",
        "isBase": true,
        "path": "./xmls/Local/PORK/CR-PEORKMEN-T02.xml"
      },
      {
        "job": "PORKCP4I01",
        "nextJobs": "PORKCP4H02, PORKCP4I02",
        "prevJobs": "PORKCP4H01",
        "jobExec": "pork-pe-krb-inr-annex5provisionsp-01",
        "isBase": false,
        "path": "./xmls/Local/PORK/CR-PEORKMEN-T02.xml"
      },
      {
        "job": "PORKCP4H02",
        "nextJobs": "#N/A",
        "prevJobs": "PORKCP4I01",
        "jobExec": "pork-pe-spk-qlt-annex5provisionsr-01",
        "isBase": false,
        "path": "./xmls/Local/PORK/CR-PEORKMEN-T02.xml"
      },
      {
        "job": "PORKCP4I02",
        "nextJobs": "PORKCP4H03",
        "prevJobs": "PORKCP4I01",
        "jobExec": "pork-pe-krb-inm-annex5provisionsp-01",
        "isBase": false,
        "path": "./xmls/Local/PORK/CR-PEORKMEN-T02.xml"
      },
      {
        "job": "PORKCP4H03",
        "nextJobs": "#N/A",
        "prevJobs": "PORKCP4I02",
        "jobExec": "pork-pe-spk-qlt-annex5provisionsm-01",
        "isBase": false,
        "path": "./xmls/Local/PORK/CR-PEORKMEN-T02.xml"
      },
      {
        "job": "PORKCP4001",
        "nextJobs": "PORKCP4002",
        "prevJobs": "#N/A",
        "jobExec": "pork-pe-spk-qlt-contractmasterifrs9s-01",
        "isBase": true,
        "path": "./xmls/Local/PORK/CR-PEORKMEN-T02.xml"
      },
      {
        "job": "PORKCP4002",
        "nextJobs": "PORKCP4003",
        "prevJobs": "PORKCP4001",
        "jobExec": "pork-pe-krb-inr-contractmasterifrs9p-01",
        "isBase": false,
        "path": "./xmls/Local/PORK/CR-PEORKMEN-T02.xml"
      },
      {
        "job": "PORKCP4003",
        "nextJobs": "PORKCP4004",
        "prevJobs": "PORKCP4002",
        "jobExec": "pork-pe-spk-qlt-contractmasterifrs9r-01",
        "isBase": false,
        "path": "./xmls/Local/PORK/CR-PEORKMEN-T02.xml"
      },
      {
        "job": "PORKCP4004",
        "nextJobs": "PORKCP4005",
        "prevJobs": "PORKCP4003",
        "jobExec": "pork-pe-krb-inm-contractmasterifrs9p-01",
        "isBase": false,
        "path": "./xmls/Local/PORK/CR-PEORKMEN-T02.xml"
      },
      {
        "job": "PORKCP4005",
        "nextJobs": "PORKCP4006",
        "prevJobs": "PORKCP4004",
        "jobExec": "pork-pe-spk-qlt-contractmasterifrs9m-01",
        "isBase": false,
        "path": "./xmls/Local/PORK/CR-PEORKMEN-T02.xml"
      },
      {
        "job": "PORKCP4006",
        "nextJobs": "#N/A",
        "prevJobs": "PORKCP4005",
        "jobExec": "pork-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PORK/CR-PEORKMEN-T02.xml"
      },
      {
        "job": "PORKCP0I01",
        "nextJobs": "PORKCP0I02, PORKCP0H02",
        "prevJobs": "PORKCP0H01",
        "jobExec": "pork-pe-krb-inr-annex5dailyprovisionsp-01",
        "isBase": false,
        "path": "./xmls/Local/PORK/CR-PEORKDIA-T02.xml"
      },
      {
        "job": "PORKCP0I02",
        "nextJobs": "PORKCP0H03",
        "prevJobs": "PORKCP0I01",
        "jobExec": "pork-pe-krb-inm-annex5dailyprovisionsp-01",
        "isBase": false,
        "path": "./xmls/Local/PORK/CR-PEORKDIA-T02.xml"
      },
      {
        "job": "PORKCP0H01",
        "nextJobs": "PORKCP0I01",
        "prevJobs": "#N/A",
        "jobExec": "pork-pe-spk-qlt-annex5dailyprovisionss-01",
        "isBase": true,
        "path": "./xmls/Local/PORK/CR-PEORKDIA-T02.xml"
      },
      {
        "job": "PORKCP0H02",
        "nextJobs": "#N/A",
        "prevJobs": "PORKCP0I01",
        "jobExec": "pork-pe-spk-qlt-annex5dailyprovisionsr-01",
        "isBase": false,
        "path": "./xmls/Local/PORK/CR-PEORKDIA-T02.xml"
      },
      {
        "job": "PORKCP0H03",
        "nextJobs": "#N/A",
        "prevJobs": "PORKCP0I02",
        "jobExec": "pork-pe-spk-qlt-annex5dailyprovisionsm-01",
        "isBase": false,
        "path": "./xmls/Local/PORK/CR-PEORKDIA-T02.xml"
      },
      {
        "job": "PORKCP0001",
        "nextJobs": "PORKCP0002",
        "prevJobs": "#N/A",
        "jobExec": "pork-pe-spk-qlt-provisioningparameterss-01",
        "isBase": true,
        "path": "./xmls/Local/PORK/CR-PEORKDIA-T02.xml"
      },
      {
        "job": "PORKCP0002",
        "nextJobs": "PORKCP0003, PORKCP0004",
        "prevJobs": "PORKCP0001",
        "jobExec": "pork-pe-krb-inr-provisioningparametersp-01",
        "isBase": false,
        "path": "./xmls/Local/PORK/CR-PEORKDIA-T02.xml"
      },
      {
        "job": "PORKCP0003",
        "nextJobs": "#N/A",
        "prevJobs": "PORKCP0002",
        "jobExec": "pork-pe-spk-qlt-provisioningparametersr-01",
        "isBase": false,
        "path": "./xmls/Local/PORK/CR-PEORKDIA-T02.xml"
      },
      {
        "job": "PORKCP0004",
        "nextJobs": "PORKCP0005, PORKCP0006",
        "prevJobs": "PORKCP0002",
        "jobExec": "pork-pe-krb-inm-provisioningparametersp-01",
        "isBase": false,
        "path": "./xmls/Local/PORK/CR-PEORKDIA-T02.xml"
      },
      {
        "job": "PORKCP0005",
        "nextJobs": "#N/A",
        "prevJobs": "PORKCP0004",
        "jobExec": "pork-pe-spk-qlt-provisioningparametersm-01",
        "isBase": false,
        "path": "./xmls/Local/PORK/CR-PEORKDIA-T02.xml"
      },
      {
        "job": "PORKCP0006",
        "nextJobs": "#N/A",
        "prevJobs": "PORKCP0004",
        "jobExec": "pork-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PORK/CR-PEORKDIA-T02.xml"
      },
      {
        "job": "PXPVTP4001",
        "nextJobs": "PXPVCP4002",
        "prevJobs": "#N/A",
        "jobExec": "RX_PXPVCD0001.sh",
        "isBase": true,
        "path": "./xmls/Local/PXPV/CR-PEXPVMEN-T02.xml"
      },
      {
        "job": "PXPVCP4002",
        "nextJobs": "PXPVCP4003",
        "prevJobs": "PXPVTP4001",
        "jobExec": "pxpv-pe-spk-qlt-rimacsoatpolicys-01",
        "isBase": false,
        "path": "./xmls/Local/PXPV/CR-PEXPVMEN-T02.xml"
      },
      {
        "job": "PXPVCP4003",
        "nextJobs": "PXPVCP4004",
        "prevJobs": "PXPVCP4002",
        "jobExec": "pxpv-pe-krb-inr-rimacsoatpolicyp-01",
        "isBase": false,
        "path": "./xmls/Local/PXPV/CR-PEXPVMEN-T02.xml"
      },
      {
        "job": "PXPVCP4004",
        "nextJobs": "PXPVCP4005",
        "prevJobs": "PXPVCP4003",
        "jobExec": "pxpv-pe-spk-qlt-rimacsoatpolicyr-01",
        "isBase": false,
        "path": "./xmls/Local/PXPV/CR-PEXPVMEN-T02.xml"
      },
      {
        "job": "PXPVCP4005",
        "nextJobs": "PXPVCP4006",
        "prevJobs": "PXPVCP4004",
        "jobExec": "pxpv-pe-krb-inm-rimacsoatpolicyp-01",
        "isBase": false,
        "path": "./xmls/Local/PXPV/CR-PEXPVMEN-T02.xml"
      },
      {
        "job": "PXPVCP4006",
        "nextJobs": "PXPVCP4007",
        "prevJobs": "PXPVCP4005",
        "jobExec": "pxpv-pe-spk-qlt-rimacsoatpolicym-01",
        "isBase": false,
        "path": "./xmls/Local/PXPV/CR-PEXPVMEN-T02.xml"
      },
      {
        "job": "PXPVCP4007",
        "nextJobs": "#N/A",
        "prevJobs": "PXPVCP4006",
        "jobExec": "pxpv-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PXPV/CR-PEXPVMEN-T02.xml"
      },
      {
        "job": "PXPVCP0001",
        "nextJobs": "PXPVCP0002",
        "prevJobs": "#N/A",
        "jobExec": "pxpv-pe-spk-qlt-brokerinsrncpoliciess-01",
        "isBase": true,
        "path": "./xmls/Local/PXPV/CR-PEXPVDIA-T02.xml"
      },
      {
        "job": "PXPVCP0002",
        "nextJobs": "PXPVCP0003",
        "prevJobs": "PXPVCP0001",
        "jobExec": "pxpv-pe-krb-inr-brokerinsrncpoliciesp-01",
        "isBase": false,
        "path": "./xmls/Local/PXPV/CR-PEXPVDIA-T02.xml"
      },
      {
        "job": "PXPVCP0003",
        "nextJobs": "PXPVCP0004",
        "prevJobs": "PXPVCP0002",
        "jobExec": "pxpv-pe-spk-qlt-brokerinsrncpoliciesr-01",
        "isBase": false,
        "path": "./xmls/Local/PXPV/CR-PEXPVDIA-T02.xml"
      },
      {
        "job": "PXPVCP0004",
        "nextJobs": "PXPVCP0005",
        "prevJobs": "PXPVCP0003",
        "jobExec": "pxpv-pe-krb-inm-brokerinsrncpoliciesp-01",
        "isBase": false,
        "path": "./xmls/Local/PXPV/CR-PEXPVDIA-T02.xml"
      },
      {
        "job": "PXPVCP0005",
        "nextJobs": "PXPVCP0006",
        "prevJobs": "PXPVCP0004",
        "jobExec": "pxpv-pe-spk-qlt-brokerinsrncpoliciesm-01",
        "isBase": false,
        "path": "./xmls/Local/PXPV/CR-PEXPVDIA-T02.xml"
      },
      {
        "job": "PXPVCP0006",
        "nextJobs": "PXPVCP0007",
        "prevJobs": "PXPVCP0005",
        "jobExec": "pxpv-pe-dfs-rmv-hdfs-01",
        "isBase": false,
        "path": "./xmls/Local/PXPV/CR-PEXPVDIA-T02.xml"
      },
      {
        "job": "PPANCP0A01",
        "nextJobs": "PPANCP0P01",
        "prevJobs": "PPANWP0F01",
        "jobExec": "ppan-pe-krb-inr-negosectyregisterp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0P01",
        "nextJobs": "PPANCP0B01, PCTDCP0P02",
        "prevJobs": "PPANCP0A01",
        "jobExec": "ppan-pe-krb-inm-negosectyregisterp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0B01",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0P01",
        "jobExec": "hdfsdelete",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANWP0F01",
        "nextJobs": "PPANCP0A01",
        "prevJobs": "#N/A",
        "jobExec": "#N/A",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANTP0006",
        "nextJobs": "PPANCP0H16",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPANCD0006.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H16",
        "nextJobs": "PPANWP0006",
        "prevJobs": "PPANTP0006",
        "jobExec": "ppan-pe-spk-qlt-dailyfuvexsacreports-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I11",
        "nextJobs": "PPANCP0H17, PPANCP0I12",
        "prevJobs": "PPANWP0006",
        "jobExec": "ppan-pe-krb-inr-dailyfuvexsacreportp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H17",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I11",
        "jobExec": "ppan-pe-spk-qlt-dailyfuvexsacreportr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I12",
        "nextJobs": "PPANCP0H19",
        "prevJobs": "PPANCP0I11",
        "jobExec": "ppan-pe-krb-inm-dailyfuvexsacreportp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H19",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I12",
        "jobExec": "ppan-pe-spk-qlt-dailyfuvexsacreportm-02",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANTP0007",
        "nextJobs": "PPANCP0H20",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPANCD0008.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H20",
        "nextJobs": "PPANWP0007",
        "prevJobs": "PPANTP0007",
        "jobExec": "ppan-pe-spk-qlt-dlysalesfuvexcardloans-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I13",
        "nextJobs": "PPANCP0H21, PPANCP0I14",
        "prevJobs": "PPANWP0007",
        "jobExec": "ppan-pe-krb-inr-dlysalesfuvexcardloanp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H21",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I13",
        "jobExec": "ppan-pe-spk-qlt-dlysalesfuvexcardloanr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I14",
        "nextJobs": "PPANCP0H22",
        "prevJobs": "PPANCP0I13",
        "jobExec": "ppan-pe-krb-inm-dlysalesfuvexcardloanp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H22",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I14",
        "jobExec": "ppan-pe-spk-qlt-dlysalesfuvexcardloanm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANTP0008",
        "nextJobs": "PPANCP0H23",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPANCD0010.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H23",
        "nextJobs": "PPANCP0I15",
        "prevJobs": "PPANTP0008",
        "jobExec": "ppan-pe-spk-qlt-dchanmtgeloansleads-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I15",
        "nextJobs": "PPANCP0H24, PPANCP0I16",
        "prevJobs": "PPANCP0H23",
        "jobExec": "ppan-pe-krb-inr-dchanmtgeloansleadp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H24",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I15",
        "jobExec": "ppan-pe-spk-qlt-dchanmtgeloansleadr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I16",
        "nextJobs": "PPANCP0H25, PBILCP0013",
        "prevJobs": "PPANCP0I15",
        "jobExec": "ppan-pe-krb-inm-dchanmtgeloansleadp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H25",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I16",
        "jobExec": "ppan-pe-spk-qlt-dchanmtgeloansleadm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANTP0009",
        "nextJobs": "PPANCP0H26",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPANCD0011.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H26",
        "nextJobs": "PPANCP0I17",
        "prevJobs": "PPANTP0009",
        "jobExec": "ppan-pe-spk-qlt-dchanlifeinsrncleads-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I17",
        "nextJobs": "PPANCP0H27, PPANCP0I18",
        "prevJobs": "PPANCP0H26",
        "jobExec": "ppan-pe-krb-inr-dchanlifeinsrncleadp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H27",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I17",
        "jobExec": "ppan-pe-spk-qlt-dchanlifeinsrncleadr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I18",
        "nextJobs": "PPANCP0H28, PBILCP0013",
        "prevJobs": "PPANCP0I17",
        "jobExec": "ppan-pe-krb-inm-dchanlifeinsrncleadp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H28",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I18",
        "jobExec": "ppan-pe-spk-qlt-dchanlifeinsrncleadm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANTP0010",
        "nextJobs": "PPANCP0H29",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPANCD0012.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H29",
        "nextJobs": "PPANCP0I19",
        "prevJobs": "PPANTP0010",
        "jobExec": "ppan-pe-spk-qlt-dchanvehicinsrncleads-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I19",
        "nextJobs": "PPANCP0H30, PPANCP0I20",
        "prevJobs": "PPANCP0H29",
        "jobExec": "ppan-pe-krb-inr-dchanvehicinsrncleadp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H30",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I19",
        "jobExec": "ppan-pe-spk-qlt-dchanvehicinsrncleadr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I20",
        "nextJobs": "PPANCP0H31, PBILCP0013",
        "prevJobs": "PPANCP0I19",
        "jobExec": "ppan-pe-krb-inm-dchanvehicinsrncleadp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H31",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I20",
        "jobExec": "ppan-pe-spk-qlt-dchanvehicinsrncleadm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANTP0I11",
        "nextJobs": "PPANCP0H32",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPANCD0013.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H32",
        "nextJobs": "PPANCP0I21",
        "prevJobs": "PPANTP0I11",
        "jobExec": "ppan-pe-spk-qlt-dchancrcardreqstatuss-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I21",
        "nextJobs": "PPANCP0H33, PPANCP0I22",
        "prevJobs": "PPANCP0H32",
        "jobExec": "ppan-pe-krb-inr-dchancrcardreqstatusp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H33",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I21",
        "jobExec": "ppan-pe-spk-qlt-dchancrcardreqstatusr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I22",
        "nextJobs": "PPANCP0H34",
        "prevJobs": "PPANCP0I21",
        "jobExec": "ppan-pe-krb-inm-dchancrcardreqstatusp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H34",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I22",
        "jobExec": "ppan-pe-spk-qlt-dchancrcardreqstatusm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANTP0I12",
        "nextJobs": "PPANCP0H35",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPANCD0014.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H35",
        "nextJobs": "PPANCP0I23",
        "prevJobs": "PPANTP0I12",
        "jobExec": "ppan-pe-spk-qlt-dchancrcdreqsttchngs-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I23",
        "nextJobs": "PPANCP0H36, PPANCP0I24",
        "prevJobs": "PPANCP0H35",
        "jobExec": "ppan-pe-krb-inr-dchancrcdreqsttchngp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H36",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I23",
        "jobExec": "ppan-pe-spk-qlt-dchancrcdreqsttchngr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I24",
        "nextJobs": "PPANCP0H37",
        "prevJobs": "PPANCP0I23",
        "jobExec": "ppan-pe-krb-inm-dchancrcdreqsttchngp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H37",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I24",
        "jobExec": "ppan-pe-spk-qlt-dchancrcdreqsttchngm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H38",
        "nextJobs": "PPANCP0I25",
        "prevJobs": "PPANTP0I13",
        "jobExec": "ppan-pe-spk-qlt-dchancrcardreqs-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I25",
        "nextJobs": "PPANCP0I26, PPANCP0H39",
        "prevJobs": "PPANCP0H38",
        "jobExec": "ppan-pe-krb-inr-dchancrcardreqp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I26",
        "nextJobs": "PPANCP0H40",
        "prevJobs": "PPANCP0I25",
        "jobExec": "ppan-pe-krb-inm-dchancrcardreqp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H40",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I26",
        "jobExec": "ppan-pe-spk-qlt-dchancrcardreqm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H39",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I25",
        "jobExec": "ppan-pe-spk-qlt-dchancrcardreqr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANTP0I13",
        "nextJobs": "PPANCP0H38",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPANCD0015.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANTP0I14",
        "nextJobs": "PPANCP0H41",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPANCD0016.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H41",
        "nextJobs": "PPANWP0008",
        "prevJobs": "PPANTP0I14",
        "jobExec": "ppan-pe-spk-qlt-cotizacontractquotns-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I27",
        "nextJobs": "PPANCP0I28, PPANCP0H42",
        "prevJobs": "PPANWP0008",
        "jobExec": "ppan-pe-krb-inr-cotizacontractquotnp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H42",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I27",
        "jobExec": "ppan-pe-spk-qlt-cotizacontractquotnr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I28",
        "nextJobs": "PPANCP0H43",
        "prevJobs": "PPANCP0I27",
        "jobExec": "ppan-pe-krb-inm-cotizacontractquotnp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H43",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I28",
        "jobExec": "ppan-pe-spk-qlt-cotizacontractquotnm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANWP0006",
        "nextJobs": "PPANCP0I11",
        "prevJobs": "PPANCP0H16",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANWP0007",
        "nextJobs": "PPANCP0I13",
        "prevJobs": "PPANCP0H20",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANWP0008",
        "nextJobs": "PPANCP0I27",
        "prevJobs": "PPANCP0H41",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANTP0I15",
        "nextJobs": "PPANCP0H44",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPANCD0017.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H44",
        "nextJobs": "PPANCP0I29",
        "prevJobs": "PPANTP0I15",
        "jobExec": "ppan-pe-spk-qlt-dchanloansleads-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I29",
        "nextJobs": "PPANCP0I30, PPANCP0H45",
        "prevJobs": "PPANCP0H44",
        "jobExec": "ppan-pe-krb-inr-dchanloansleadp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H45",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I29",
        "jobExec": "ppan-pe-spk-qlt-dchanloansleadr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I30",
        "nextJobs": "PPANCP0H46, PBILCP0013",
        "prevJobs": "PPANCP0I29",
        "jobExec": "ppan-pe-krb-inm-dchanloansleadp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H46",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I30",
        "jobExec": "ppan-pe-spk-qlt-dchanloansleadm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANTP0I16",
        "nextJobs": "PPANCP0H47",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPANCD0018.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H47",
        "nextJobs": "PPANCP0I31",
        "prevJobs": "PPANTP0I16",
        "jobExec": "ppan-pe-spk-qlt-dchancreditcardsleads-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I31",
        "nextJobs": "PPANCP0I32, PPANCP0H48",
        "prevJobs": "PPANCP0H47",
        "jobExec": "ppan-pe-krb-inr-dchancreditcardsleadp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H48",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I31",
        "jobExec": "ppan-pe-spk-qlt-dchancreditcardsleadr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I32",
        "nextJobs": "PPANCP0H49, PBILCP0013",
        "prevJobs": "PPANCP0I31",
        "jobExec": "ppan-pe-krb-inm-dchancreditcardsleadp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H49",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I32",
        "jobExec": "ppan-pe-spk-qlt-dchancreditcardsleadm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANTP0I17",
        "nextJobs": "PPANWP0001",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPANCD0019.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANWP0001",
        "nextJobs": "PPANCP0H50",
        "prevJobs": "PPANTP0I17",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H50",
        "nextJobs": "PPANCP0I33",
        "prevJobs": "PPANWP0001",
        "jobExec": "ppan-pe-spk-qlt-operationhistorys-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I33",
        "nextJobs": "PPANCP0I34, PPANCP0H51",
        "prevJobs": "PPANCP0H50",
        "jobExec": "ppan-pe-krb-inr-operationhistoryp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H51",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I33",
        "jobExec": "ppan-pe-spk-qlt-operationhistoryr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I34",
        "nextJobs": "PPANCP0H52",
        "prevJobs": "PPANCP0I33",
        "jobExec": "ppan-pe-krb-inm-operationhistoryp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H52",
        "nextJobs": "PPANCP0001",
        "prevJobs": "PPANCP0I34",
        "jobExec": "ppan-pe-spk-qlt-operationhistorym-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0001",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0H52",
        "jobExec": "hdfsdelete",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANTP0I18",
        "nextJobs": "PPANWP0002",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPANCD0020.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANWP0002",
        "nextJobs": "PPANCP0H53",
        "prevJobs": "PPANTP0I18",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H53",
        "nextJobs": "PPANCP0I35",
        "prevJobs": "PPANWP0002",
        "jobExec": "ppan-pe-spk-qlt-quotationrequesthists-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I35",
        "nextJobs": "PPANCP0I36, PPANCP0H54",
        "prevJobs": "PPANCP0H53",
        "jobExec": "ppan-pe-krb-inr-quotationrequesthistp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H54",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I35",
        "jobExec": "ppan-pe-spk-qlt-quotationrequesthistr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I36",
        "nextJobs": "PPANCP0H55",
        "prevJobs": "PPANCP0I35",
        "jobExec": "ppan-pe-krb-inm-quotationrequesthistp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H55",
        "nextJobs": "PPANCP0002",
        "prevJobs": "PPANCP0I36",
        "jobExec": "ppan-pe-spk-qlt-quotationrequesthistm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0002",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0H55",
        "jobExec": "hdfsdelete",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANTP0I19",
        "nextJobs": "PPANCP0H56",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPANCD0021.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H56",
        "nextJobs": "PPANCP0I37",
        "prevJobs": "PPANTP0I19",
        "jobExec": "ppan-pe-spk-qlt-usersautonomys-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I37",
        "nextJobs": "PPANCP0I38, PPANCP0H57",
        "prevJobs": "PPANCP0H56",
        "jobExec": "ppan-pe-krb-inr-usersautonomyp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H57",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I37",
        "jobExec": "ppan-pe-spk-qlt-usersautonomyr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I38",
        "nextJobs": "PPANCP0H58",
        "prevJobs": "PPANCP0I37",
        "jobExec": "ppan-pe-krb-inm-usersautonomyp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H58",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I38",
        "jobExec": "ppan-pe-spk-qlt-usersautonomym-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANTP0I20",
        "nextJobs": "PPANCP0H59",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPANCD0022.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H59",
        "nextJobs": "PPANCP0I39",
        "prevJobs": "PPANTP0I20",
        "jobExec": "ppan-pe-spk-qlt-varcalculationrates-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I39",
        "nextJobs": "PPANCP0I40, PPANCP0H60",
        "prevJobs": "PPANCP0H59",
        "jobExec": "ppan-pe-krb-inr-varcalculationratep-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H60",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I39",
        "jobExec": "ppan-pe-spk-qlt-varcalculationrater-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0I40",
        "nextJobs": "PPANCP0H61",
        "prevJobs": "PPANCP0I39",
        "jobExec": "ppan-pe-krb-inm-varcalculationratep-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANCP0H61",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP0I40",
        "jobExec": "ppan-pe-spk-qlt-varcalculationratem-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANDIA-T02.xml"
      },
      {
        "job": "PPANTP4001",
        "nextJobs": "PPANCP4H01",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPANCD0007.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PPANCP4H01",
        "nextJobs": "PPANCP4I01",
        "prevJobs": "PPANTP4001",
        "jobExec": "ppan-pe-spk-qlt-monthlyfuvexsacreports-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PPANCP4I01",
        "nextJobs": "PPANCP4H02, PPANCP4I02",
        "prevJobs": "PPANCP4H01",
        "jobExec": "ppan-pe-krb-inr-monthlyfuvexsacreportp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PPANCP4H02",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP4I01",
        "jobExec": "ppan-pe-spk-qlt-monthlyfuvexsacreportr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PPANCP4I02",
        "nextJobs": "PPANCP4H03, PPANCP4H04",
        "prevJobs": "PPANCP4I01",
        "jobExec": "ppan-pe-krb-inm-monthlyfuvexsacreportp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PPANCP4H03",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP4I02",
        "jobExec": "ppan-pe-spk-qlt-monthlyfuvexsacreportm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PPANCP4H04",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP4I02",
        "jobExec": "ppan-pe-spk-qlt-monthlyfuvexsacreportm-02",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PPANTP4002",
        "nextJobs": "PPANCP4H05",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPANCD0009.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PPANCP4H05",
        "nextJobs": "PPANCP4I03",
        "prevJobs": "PPANTP4002",
        "jobExec": "ppan-pe-spk-qlt-mthlysalesfuvcardloans-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PPANCP4I03",
        "nextJobs": "PPANCP4H06, PPANCP4I04",
        "prevJobs": "PPANCP4H05",
        "jobExec": "ppan-pe-krb-inr-mthlysalesfuvcardloanp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PPANCP4H06",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP4I03",
        "jobExec": "ppan-pe-spk-qlt-mthlysalesfuvcardloanr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PPANCP4I04",
        "nextJobs": "PPANCP4H07",
        "prevJobs": "PPANCP4I03",
        "jobExec": "ppan-pe-krb-inm-mthlysalesfuvcardloanp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PPANCP4H07",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP4I04",
        "jobExec": "ppan-pe-spk-qlt-mthlysalesfuvcardloanm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PPANTP4I01",
        "nextJobs": "PPANCP4H08",
        "prevJobs": "#N/A",
        "jobExec": "RX_PPANCD0016.sh",
        "isBase": true,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PPANCP4H08",
        "nextJobs": "PPANCP4I05",
        "prevJobs": "PPANTP4I01",
        "jobExec": "ppan-pe-spk-qlt-cotizacontractquotns-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PPANCP4I05",
        "nextJobs": "PPANCP4I06, PPANCP4H09",
        "prevJobs": "PPANCP4H08",
        "jobExec": "ppan-pe-krb-inr-cotizacontractquotnp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PPANCP4H09",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP4I05",
        "jobExec": "ppan-pe-spk-qlt-cotizacontractquotnr-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PPANCP4I06",
        "nextJobs": "PPANCP4H10",
        "prevJobs": "PPANCP4I05",
        "jobExec": "ppan-pe-krb-inm-cotizacontractquotnp-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PPANCP4H10",
        "nextJobs": "#N/A",
        "prevJobs": "PPANCP4I06",
        "jobExec": "ppan-pe-spk-qlt-cotizacontractquotnm-01",
        "isBase": false,
        "path": "./xmls/Local/PPAN/CR-PEPANMEN-T02.xml"
      },
      {
        "job": "PKCRTCP0001",
        "nextJobs": "PKCRTCP0002, PKCRTCP0003, PKCRTCP0004, PKCRTCP0005, PKCRTCP0006, PKCRTCP0007, PKCRTCP0008, PKCRTCP0009, PKCRTCP0010",
        "prevJobs": "#N/A",
        "jobExec": "kcrt-pe-spk-inm-sfmccommunicationresponse-01",
        "isBase": true,
        "path": "./xmls/Global/KCRT/CR-PEKCRTDIA-K02.xml"
      },
      {
        "job": "PKCRTCP0002",
        "nextJobs": "PKCRTCP0011",
        "prevJobs": "PKCRTCP0001",
        "jobExec": "kcrt-pe-krb-qlt-sfmccommrespbouncesmst-01",
        "isBase": false,
        "path": "./xmls/Global/KCRT/CR-PEKCRTDIA-K02.xml"
      },
      {
        "job": "PKCRTCP0003",
        "nextJobs": "PKCRTCP0011",
        "prevJobs": "PKCRTCP0001",
        "jobExec": "kcrt-pe-krb-qlt-sfmccommrespclicksmst-01",
        "isBase": false,
        "path": "./xmls/Global/KCRT/CR-PEKCRTDIA-K02.xml"
      },
      {
        "job": "PKCRTCP0004",
        "nextJobs": "PKCRTCP0011",
        "prevJobs": "PKCRTCP0001",
        "jobExec": "kcrt-pe-krb-qlt-sfmccommrespcomplaintsmst-01",
        "isBase": false,
        "path": "./xmls/Global/KCRT/CR-PEKCRTDIA-K02.xml"
      },
      {
        "job": "PKCRTCP0005",
        "nextJobs": "PKCRTCP0011",
        "prevJobs": "PKCRTCP0001",
        "jobExec": "kcrt-pe-krb-qlt-sfmccommrespnotsentmst-01",
        "isBase": false,
        "path": "./xmls/Global/KCRT/CR-PEKCRTDIA-K02.xml"
      },
      {
        "job": "PKCRTCP0006",
        "nextJobs": "PKCRTCP0011",
        "prevJobs": "PKCRTCP0001",
        "jobExec": "kcrt-pe-krb-qlt-sfmccommrespopenmst-01",
        "isBase": false,
        "path": "./xmls/Global/KCRT/CR-PEKCRTDIA-K02.xml"
      },
      {
        "job": "PKCRTCP0007",
        "nextJobs": "PKCRTCP0011",
        "prevJobs": "PKCRTCP0001",
        "jobExec": "kcrt-pe-krb-qlt-sfmccommresppushmst-01",
        "isBase": false,
        "path": "./xmls/Global/KCRT/CR-PEKCRTDIA-K02.xml"
      },
      {
        "job": "PKCRTCP0008",
        "nextJobs": "PKCRTCP0011",
        "prevJobs": "PKCRTCP0001",
        "jobExec": "kcrt-pe-krb-qlt-sfmccommrespsentmst-01",
        "isBase": false,
        "path": "./xmls/Global/KCRT/CR-PEKCRTDIA-K02.xml"
      },
      {
        "job": "PKCRTCP0009",
        "nextJobs": "PKCRTCP0011",
        "prevJobs": "PKCRTCP0001",
        "jobExec": "kcrt-pe-krb-qlt-sfmccommrespsmsmst-01",
        "isBase": false,
        "path": "./xmls/Global/KCRT/CR-PEKCRTDIA-K02.xml"
      },
      {
        "job": "PKCRTCP0010",
        "nextJobs": "PKCRTCP0011",
        "prevJobs": "PKCRTCP0001",
        "jobExec": "kcrt-pe-krb-qlt-sfmccommrespunsubscribesmst-01",
        "isBase": false,
        "path": "./xmls/Global/KCRT/CR-PEKCRTDIA-K02.xml"
      },
      {
        "job": "PKCRTCP0011",
        "nextJobs": "#N/A",
        "prevJobs": "PKCRTCP0002, PKCRTCP0003, PKCRTCP0004, PKCRTCP0005, PKCRTCP0006, PKCRTCP0007, PKCRTCP0008, PKCRTCP0009, PKCRTCP0010",
        "jobExec": "kcrt-pe-spk-inm-qualityorchestrator-01",
        "isBase": false,
        "path": "./xmls/Global/KCRT/CR-PEKCRTDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0001",
        "nextJobs": "PKEXCCP0002",
        "prevJobs": "#N/A",
        "jobExec": "kexc-pe-krb-qlt-sfmcbouncesstg-01",
        "isBase": true,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0010",
        "nextJobs": "PKEXCCP0011",
        "prevJobs": "#N/A",
        "jobExec": "kexc-pe-krb-qlt-sfmccomplaintsstg-01",
        "isBase": true,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0011",
        "nextJobs": "PKEXCCP0012",
        "prevJobs": "PKEXCCP0010",
        "jobExec": "kexc-pe-krb-inr-sfmccomplaints-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0012",
        "nextJobs": "PKEXCCP0037",
        "prevJobs": "PKEXCCP0011",
        "jobExec": "kexc-pe-krb-qlt-sfmccomplaintsraw-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0013",
        "nextJobs": "PKEXCCP0014",
        "prevJobs": "#N/A",
        "jobExec": "kexc-pe-krb-qlt-sfmcjobstg-01",
        "isBase": true,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0014",
        "nextJobs": "PKEXCCP0015",
        "prevJobs": "PKEXCCP0013",
        "jobExec": "kexc-pe-krb-inr-sfmcjob-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0015",
        "nextJobs": "PKEXCCP0037",
        "prevJobs": "PKEXCCP0014",
        "jobExec": "kexc-pe-krb-qlt-sfmcjobraw-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0016",
        "nextJobs": "PKEXCCP0017",
        "prevJobs": "#N/A",
        "jobExec": "kexc-pe-krb-qlt-sfmcjourneystg-01",
        "isBase": true,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0017",
        "nextJobs": "PKEXCCP0018",
        "prevJobs": "PKEXCCP0016",
        "jobExec": "kexc-pe-krb-inr-sfmcjourney-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0018",
        "nextJobs": "PKEXCCP0037",
        "prevJobs": "PKEXCCP0017",
        "jobExec": "kexc-pe-krb-qlt-sfmcjourneyraw-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0019",
        "nextJobs": "PKEXCCP0020",
        "prevJobs": "#N/A",
        "jobExec": "kexc-pe-krb-qlt-sfmcnotsentstg-01",
        "isBase": true,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0002",
        "nextJobs": "PKEXCCP0003",
        "prevJobs": "PKEXCCP0001",
        "jobExec": "kexc-pe-krb-inr-sfmcbounces-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0020",
        "nextJobs": "PKEXCCP0021",
        "prevJobs": "PKEXCCP0019",
        "jobExec": "kexc-pe-krb-inr-sfmcnotsent-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0021",
        "nextJobs": "PKEXCCP0037",
        "prevJobs": "PKEXCCP0020",
        "jobExec": "kexc-pe-krb-qlt-sfmcnotsentraw-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0022",
        "nextJobs": "PKEXCCP0023",
        "prevJobs": "#N/A",
        "jobExec": "kexc-pe-krb-qlt-sfmcopenstg-01",
        "isBase": true,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0023",
        "nextJobs": "PKEXCCP0024",
        "prevJobs": "PKEXCCP0022",
        "jobExec": "kexc-pe-krb-inr-sfmcopen-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0024",
        "nextJobs": "PKEXCCP0037",
        "prevJobs": "PKEXCCP0023",
        "jobExec": "kexc-pe-krb-qlt-sfmcopenraw-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0025",
        "nextJobs": "PKEXCCP0026",
        "prevJobs": "#N/A",
        "jobExec": "kexc-pe-krb-qlt-sfmcpushstg-01",
        "isBase": true,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0026",
        "nextJobs": "PKEXCCP0027",
        "prevJobs": "PKEXCCP0025",
        "jobExec": "kexc-pe-krb-inr-sfmcpush-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0027",
        "nextJobs": "PKEXCCP0037",
        "prevJobs": "PKEXCCP0026",
        "jobExec": "kexc-pe-krb-qlt-sfmcpushraw-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0028",
        "nextJobs": "PKEXCCP0029",
        "prevJobs": "#N/A",
        "jobExec": "kexc-pe-krb-qlt-sfmcsentstg-01",
        "isBase": true,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0029",
        "nextJobs": "PKEXCCP0030",
        "prevJobs": "PKEXCCP0028",
        "jobExec": "kexc-pe-krb-inr-sfmcsent-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0003",
        "nextJobs": "PKEXCCP0037",
        "prevJobs": "PKEXCCP0002",
        "jobExec": "kexc-pe-krb-qlt-sfmcbouncesraw-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0030",
        "nextJobs": "PKEXCCP0037",
        "prevJobs": "PKEXCCP0029",
        "jobExec": "kexc-pe-krb-qlt-sfmcsentraw-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0031",
        "nextJobs": "PKEXCCP0032",
        "prevJobs": "#N/A",
        "jobExec": "kexc-pe-krb-qlt-sfmcsmsstg-01",
        "isBase": true,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0032",
        "nextJobs": "PKEXCCP0033",
        "prevJobs": "PKEXCCP0031",
        "jobExec": "kexc-pe-krb-inr-sfmcsms-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0033",
        "nextJobs": "PKEXCCP0037",
        "prevJobs": "PKEXCCP0032",
        "jobExec": "kexc-pe-krb-qlt-sfmcsmsraw-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0034",
        "nextJobs": "PKEXCCP0035",
        "prevJobs": "#N/A",
        "jobExec": "kexc-pe-krb-qlt-sfmcunsubscribesstg-01",
        "isBase": true,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0035",
        "nextJobs": "PKEXCCP0036",
        "prevJobs": "PKEXCCP0034",
        "jobExec": "kexc-pe-krb-inr-sfmcunsubscribes-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0036",
        "nextJobs": "PKEXCCP0037",
        "prevJobs": "PKEXCCP0035",
        "jobExec": "kexc-pe-krb-qlt-sfmcunsubscribesraw-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0037",
        "nextJobs": "PKEXCCP0038",
        "prevJobs": "PKEXCCP0012, PKEXCCP0015, PKEXCCP0018, PKEXCCP0021, PKEXCCP0024, PKEXCCP0027, PKEXCCP0003, PKEXCCP0030, PKEXCCP0033, PKEXCCP0036, PKEXCCP0006, PKEXCCP0009",
        "jobExec": "kexc-pe-dfs-rmv-genericrmv-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0004",
        "nextJobs": "PKEXCCP0005",
        "prevJobs": "#N/A",
        "jobExec": "kexc-pe-krb-qlt-sfmccampaniasstg-01",
        "isBase": true,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0005",
        "nextJobs": "PKEXCCP0006",
        "prevJobs": "PKEXCCP0004",
        "jobExec": "kexc-pe-krb-inr-sfmccampanias-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0006",
        "nextJobs": "PKEXCCP0037",
        "prevJobs": "PKEXCCP0005",
        "jobExec": "kexc-pe-krb-qlt-sfmccampaniasraw-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0007",
        "nextJobs": "PKEXCCP0008",
        "prevJobs": "#N/A",
        "jobExec": "kexc-pe-krb-qlt-sfmcclicksstg-01",
        "isBase": true,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0008",
        "nextJobs": "PKEXCCP0009",
        "prevJobs": "PKEXCCP0007",
        "jobExec": "kexc-pe-krb-inr-sfmcclicks-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0009",
        "nextJobs": "PKEXCCP0037",
        "prevJobs": "PKEXCCP0008",
        "jobExec": "kexc-pe-krb-qlt-sfmcclicksraw-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKEXCCP0038",
        "nextJobs": "PKCRTCP0001",
        "prevJobs": "PKEXCCP0037",
        "jobExec": "kexc-pe-spk-inr-executionsummary-01",
        "isBase": false,
        "path": "./xmls/Global/KEXC/CR-PEKEXCDIA-K02.xml"
      },
      {
        "job": "PKPFMCP0P07",
        "nextJobs": "PKPFMCP0P01",
        "prevJobs": "#N/A",
        "jobExec": "kpfm-pe-spk-trn-receipt-01",
        "isBase": true,
        "path": "./xmls/Global/KPFM/CR-PEKPFMDIA-K02.xml"
      },
      {
        "job": "PKPFMCP0P01",
        "nextJobs": "PKPFMCP0P02, PKPFMCP0H01",
        "prevJobs": "PKPFMCP0P07, PKPFMCP0P08",
        "jobExec": "kpfm-gl-spk-trn-normalizer-01",
        "isBase": false,
        "path": "./xmls/Global/KPFM/CR-PEKPFMDIA-K02.xml"
      },
      {
        "job": "PKPFMCP0H01",
        "nextJobs": "#N/A",
        "prevJobs": "PKPFMCP0P01",
        "jobExec": "kpfm-gl-spk-qlt-normalizerval-01",
        "isBase": false,
        "path": "./xmls/Global/KPFM/CR-PEKPFMDIA-K02.xml"
      },
      {
        "job": "PKPFMCP0P02",
        "nextJobs": "PKPFMCP0P03, PKPFMCP0P04, PKPFMCP0H02",
        "prevJobs": "PKPFMCP0P01",
        "jobExec": "kpfm-gl-spk-trn-categorizer-01",
        "isBase": false,
        "path": "./xmls/Global/KPFM/CR-PEKPFMDIA-K02.xml"
      },
      {
        "job": "PKPFMCP0H02",
        "nextJobs": "#N/A",
        "prevJobs": "PKPFMCP0P02",
        "jobExec": "kpfm-gl-spk-qlt-categorizerval-01",
        "isBase": false,
        "path": "./xmls/Global/KPFM/CR-PEKPFMDIA-K02.xml"
      },
      {
        "job": "PKPFMCP0P03",
        "nextJobs": "PKPFMCP0H03",
        "prevJobs": "PKPFMCP0P02",
        "jobExec": "kpfm-gl-spk-trn-categorystore-01",
        "isBase": false,
        "path": "./xmls/Global/KPFM/CR-PEKPFMDIA-K02.xml"
      },
      {
        "job": "PKPFMCP0P04",
        "nextJobs": "#N/A",
        "prevJobs": "PKPFMCP0P02",
        "jobExec": "kpfm-gl-spk-trn-export-01",
        "isBase": false,
        "path": "./xmls/Global/KPFM/CR-PEKPFMDIA-K02.xml"
      },
      {
        "job": "PKPFMCP0H03",
        "nextJobs": "#N/A",
        "prevJobs": "PKPFMCP0P03",
        "jobExec": "kpfm-gl-spk-qlt-categorystoreval-01",
        "isBase": false,
        "path": "./xmls/Global/KPFM/CR-PEKPFMDIA-K02.xml"
      },
      {
        "job": "PKPFMCP0P08",
        "nextJobs": "PKPFMCP0P01",
        "prevJobs": "#N/A",
        "jobExec": "kpfm-pe-spk-inm-insurancedetails-01",
        "isBase": true,
        "path": "./xmls/Global/KPFM/CR-PEKPFMDIA-K02.xml"
      },
      {
        "job": "PKBTQCP0T05",
        "nextJobs": "PKBTQCP0005",
        "prevJobs": "PKBTQCP0CA5",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0T01",
        "nextJobs": "PKBTQCP0001",
        "prevJobs": "PKBTQCP0C01",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0T08",
        "nextJobs": "PKBTQCP0008",
        "prevJobs": "PKBTQCP0CA8",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0T07",
        "nextJobs": "PKBTQCP0007",
        "prevJobs": "PKBTQCP0C07",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0T21",
        "nextJobs": "PKBTQCP0021",
        "prevJobs": "PKBTQCP0C21",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0T04",
        "nextJobs": "PKBTQCP0004",
        "prevJobs": "PKBTQCP0C04",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0T06",
        "nextJobs": "PKBTQCP0006",
        "prevJobs": "PKBTQCP0C06",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0T09",
        "nextJobs": "PKBTQCP0009",
        "prevJobs": "PKBTQCP0C09",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0T10",
        "nextJobs": "PKBTQCP0010",
        "prevJobs": "PKBTQCP0C10",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0T11",
        "nextJobs": "PKBTQCP0011",
        "prevJobs": "PKBTQCP0C11",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0T12",
        "nextJobs": "PKBTQCP0012",
        "prevJobs": "PKBTQCP0C12",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0T13",
        "nextJobs": "PKBTQCP0013",
        "prevJobs": "PKBTQCP0C13",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0T14",
        "nextJobs": "PKBTQCP0014",
        "prevJobs": "PKBTQCP0C14",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0T15",
        "nextJobs": "PKBTQCP0015",
        "prevJobs": "PKBTQCP0C15",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0T16",
        "nextJobs": "PKBTQCP0016",
        "prevJobs": "PKBTQCP0C16",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0T17",
        "nextJobs": "PKBTQCP0017",
        "prevJobs": "PKBTQCP0C17",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0T20",
        "nextJobs": "PKBTQCP0020",
        "prevJobs": "PKBTQCP0C20",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0T19",
        "nextJobs": "PKBTQCP0019",
        "prevJobs": "PKBTQCP0C19",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0005",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0T05",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0001",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0T01",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0008",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0T08",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0007",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0T07",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0004",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0T04",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0006",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0T06",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0009",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0T09",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0010",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0T10",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0011",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0T11",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0012",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0T12",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0013",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0T13",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0014",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0T14",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0015",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0T15",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0016",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0T16",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0017",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0T17",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0019",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0T19",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0020",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0T20",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0021",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0T21",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0C01",
        "nextJobs": "PKBTQCP0T01, PKBTQCP0C03, PKBTQCP0C04, PKBTQCP0C11, PKBTQCP0C12, PKBTQCP0C13, PKBTQCP0C14, PKBTQCP0C15, PKBTQCP0C16, PKBTQCP0C17, PKBTQCP0C19, PKBTQCP0C20, PKBTQCP0C21",
        "prevJobs": "#N/A",
        "jobExec": "kbtq-pe-krb-out-addresstypedescripp-01",
        "isBase": true,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0C04",
        "nextJobs": "PKBTQCP0T04",
        "prevJobs": "PKBTQCP0C01",
        "jobExec": "kbtq-pe-krb-out-custeconactivityp-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0C12",
        "nextJobs": "PKBTQCP0T12",
        "prevJobs": "PKBTQCP0C01",
        "jobExec": "kbtq-pe-krb-out-genderp-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0C13",
        "nextJobs": "PKBTQCP0T13",
        "prevJobs": "PKBTQCP0C01",
        "jobExec": "kbtq-pe-krb-out-hobbyp-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0C14",
        "nextJobs": "PKBTQCP0T14",
        "prevJobs": "PKBTQCP0C01",
        "jobExec": "kbtq-pe-krb-out-jobclassp-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0C15",
        "nextJobs": "PKBTQCP0T15",
        "prevJobs": "PKBTQCP0C01",
        "jobExec": "kbtq-pe-krb-out-maritalstatusp-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0C16",
        "nextJobs": "PKBTQCP0T16",
        "prevJobs": "PKBTQCP0C01",
        "jobExec": "kbtq-pe-krb-out-positionp-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0C17",
        "nextJobs": "PKBTQCP0T17",
        "prevJobs": "PKBTQCP0C01",
        "jobExec": "kbtq-pe-krb-out-residencedescriptionp-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0C19",
        "nextJobs": "PKBTQCP0T19",
        "prevJobs": "PKBTQCP0C01",
        "jobExec": "kbtq-pe-krb-out-studylevelp-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0C20",
        "nextJobs": "PKBTQCP0T20",
        "prevJobs": "PKBTQCP0C01",
        "jobExec": "kbtq-pe-krb-out-titlep-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0C09",
        "nextJobs": "PKBTQCP0T09",
        "prevJobs": "PKBTQCP0C05",
        "jobExec": "kbtq-pe-spk-mov-customerhobbycsv-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0C06",
        "nextJobs": "PKBTQCP0T06",
        "prevJobs": "PKBTQCP0C05",
        "jobExec": "kbtq-pe-spk-mov-customercontactchancsv-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0C10",
        "nextJobs": "PKBTQCP0T10",
        "prevJobs": "PKBTQCP0C05",
        "jobExec": "kbtq-pe-krb-out-customermanagerp-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0C07",
        "nextJobs": "PKBTQCP0T07",
        "prevJobs": "PKBTQCP0C05",
        "jobExec": "kbtq-pe-krb-out-customerdocumentp-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0C05",
        "nextJobs": "PKBTQCP0C06, PKBTQCP0C07, PKBTQCP0C08, PKBTQCP0C09, PKBTQCP0C10, PKBTQCP0CA5",
        "prevJobs": "#N/A",
        "jobExec": "kbtq-pe-krb-out-customerp-01",
        "isBase": true,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0C21",
        "nextJobs": "PKBTQCP0T21",
        "prevJobs": "PKBTQCP0C01",
        "jobExec": "kbtq-pe-krb-out-typepersonalp-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0C08",
        "nextJobs": "PKBTQCP0CA8",
        "prevJobs": "PKBTQCP0C05",
        "jobExec": "kbtq-pe-krb-out-customereconomicinfop-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0C11",
        "nextJobs": "PKBTQCP0T11",
        "prevJobs": "PKBTQCP0C01",
        "jobExec": "kbtq-pe-krb-out-customerstatusp-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0CA5",
        "nextJobs": "PKBTQCP0T05",
        "prevJobs": "PKBTQCP0C05",
        "jobExec": "kbtq-gl-spk-inm-customerinfoouttac-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0CA8",
        "nextJobs": "PKBTQCP0T08",
        "prevJobs": "PKBTQCP0C08",
        "jobExec": "kbtq-gl-spk-inm-customereconomicinfoouttac-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0022",
        "nextJobs": "PKBTQCP0023",
        "prevJobs": "#N/A",
        "jobExec": "kbtq-pe-spk-inm-customerrecodinglocal-01",
        "isBase": true,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0023",
        "nextJobs": "PKBTQCP0024",
        "prevJobs": "PKBTQCP0022",
        "jobExec": "kbtq-gl-spk-qlt-customerrecodinglcl-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0024",
        "nextJobs": "PKBTQCP0025",
        "prevJobs": "PKBTQCP0023",
        "jobExec": "kbtq-gl-spk-inm-customerrecoding-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKBTQCP0025",
        "nextJobs": "#N/A",
        "prevJobs": "PKBTQCP0024",
        "jobExec": "kbtq-gl-spk-qlt-customerrecoding-01",
        "isBase": false,
        "path": "./xmls/Global/KBTQ/CR-PEKBTQDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0P01",
        "nextJobs": "PKMOLCP0H01",
        "prevJobs": "#N/A",
        "jobExec": "kmol-pe-spk-inm-lclaccountmovmaster-01",
        "isBase": true,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0H01",
        "nextJobs": "PKMOLCP0G01",
        "prevJobs": "PKMOLCP0P01",
        "jobExec": "kmol-pe-spk-qlt-kmollclaccountmovsm-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0G01",
        "nextJobs": "PKMOLCP0H08",
        "prevJobs": "PKMOLCP0H01",
        "jobExec": "kmol-gl-spk-inm-accountingestion-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0H08",
        "nextJobs": "PKPFMCP0P01",
        "prevJobs": "PKMOLCP0G01",
        "jobExec": "kmol-pe-spk-qlt-accountmovementsm-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0P02",
        "nextJobs": "PKMOLCP0P05",
        "prevJobs": "#N/A",
        "jobExec": "kmol-pe-spk-inm-lclcardmovmaster-01",
        "isBase": true,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0P05",
        "nextJobs": "PKMOLCP0H02",
        "prevJobs": "PKMOLCP0P02",
        "jobExec": "kmol-pe-spk-inm-lclcardmovmaster-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0H02",
        "nextJobs": "PKMOLCP0G03",
        "prevJobs": "PKMOLCP0P05",
        "jobExec": "kmol-pe-spk-qlt-kmollclcardmovsm-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0G03",
        "nextJobs": "PKMOLCP0H09",
        "prevJobs": "PKMOLCP0H02",
        "jobExec": "kmol-gl-spk-inm-cardingestion-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0H09",
        "nextJobs": "PKPFMCP0P01",
        "prevJobs": "PKMOLCP0G03",
        "jobExec": "kmol-pe-spk-qlt-cardmovementsm-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0P03",
        "nextJobs": "PKMOLCP0H03",
        "prevJobs": "#N/A",
        "jobExec": "kmol-pe-spk-inm-countryconceptmaster-01",
        "isBase": true,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0H03",
        "nextJobs": "PKMOLCP0C03",
        "prevJobs": "PKMOLCP0P03",
        "jobExec": "kmol-pe-spk-qlt-multilanguageconceptm-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0C03",
        "nextJobs": "#N/A",
        "prevJobs": "PKMOLCP0H03",
        "jobExec": "kmol-pe-spk-inm-multilanguageconceptcsv-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0P04",
        "nextJobs": "PKMOLCP0H04",
        "prevJobs": "#N/A",
        "jobExec": "kmol-pe-krb-trn-multilanguagebunchp-01",
        "isBase": true,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0H04",
        "nextJobs": "PKMOLCP0C04",
        "prevJobs": "PKMOLCP0P04",
        "jobExec": "kmol-pe-spk-qlt-multilanguagebunchkm-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0C04",
        "nextJobs": "#N/A",
        "prevJobs": "PKMOLCP0H04",
        "jobExec": "kmol-pe-spk-inm-multilanguagebunchcsv-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0P07",
        "nextJobs": "PKMOLCP0P06",
        "prevJobs": "#N/A",
        "jobExec": "kmol-pe-spk-inm-cardfeesmaster-01",
        "isBase": true,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0P06",
        "nextJobs": "PKMOLCP0H07",
        "prevJobs": "PKMOLCP0P07",
        "jobExec": "kmol-pe-spk-inm-cardfeesmaster-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0H07",
        "nextJobs": "PKMOLCP0G05",
        "prevJobs": "PKMOLCP0P06",
        "jobExec": "kmol-pe-spk-qlt-lclmovementsfeesm-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0G05",
        "nextJobs": "PKMOLCP0H10",
        "prevJobs": "PKMOLCP0H07",
        "jobExec": "kmol-gl-spk-inm-feeingestion-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0H10",
        "nextJobs": "PKMOLCP0G06",
        "prevJobs": "PKMOLCP0G05",
        "jobExec": "kmol-pe-spk-qlt-movementsfeesm-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0G06",
        "nextJobs": "#N/A",
        "prevJobs": "PKMOLCP0H10",
        "jobExec": "kmol-gl-spk-out-fee2elastic-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0P08",
        "nextJobs": "PKMOLCP0H11",
        "prevJobs": "#N/A",
        "jobExec": "kmol-pe-spk-inm-lclloandetailmove-01",
        "isBase": true,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0H11",
        "nextJobs": "PKMOLCP0G08",
        "prevJobs": "PKMOLCP0P08",
        "jobExec": "kmol-pe-spk-qlt-lclloandetailmovem-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0G08",
        "nextJobs": "PKMOLCP0H14, PKPFMCP0P01",
        "prevJobs": "PKMOLCP0H11",
        "jobExec": "kmol-gl-spk-inm-loandtlingestion-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0H14",
        "nextJobs": "PKPFMCP0P01",
        "prevJobs": "PKMOLCP0G08",
        "jobExec": "kmol-pe-spk-qlt-loandetailmovementsm-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0P09",
        "nextJobs": "PKMOLCP0H12",
        "prevJobs": "#N/A",
        "jobExec": "kmol-pe-spk-inm-lclloanmovements-01",
        "isBase": true,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0H12",
        "nextJobs": "PKMOLCP0G07",
        "prevJobs": "PKMOLCP0P09",
        "jobExec": "kmol-pe-spk-qlt-lclloanmovementsm-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0G07",
        "nextJobs": "PKMOLCP0H13, PKPFMCP0P01",
        "prevJobs": "PKMOLCP0H12",
        "jobExec": "kmol-gl-spk-inm-loaningestion-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0H13",
        "nextJobs": "PKPFMCP0P01",
        "prevJobs": "PKMOLCP0G07",
        "jobExec": "kmol-pe-spk-qlt-loanmovementsm-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0P10",
        "nextJobs": "PKMOLCP0H15",
        "prevJobs": "#N/A",
        "jobExec": "kmol-pe-spk-inm-lclreceiptmovements-01",
        "isBase": true,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0H15",
        "nextJobs": "PKMOLCP0G09",
        "prevJobs": "PKMOLCP0P10",
        "jobExec": "kmol-pe-spk-qlt-lclreceiptmovementsm-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0G09",
        "nextJobs": "PKMOLCP0H16, PKPFMCP0P01",
        "prevJobs": "PKMOLCP0H15",
        "jobExec": "kmol-gl-spk-inm-receiptingestion-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKMOLCP0H16",
        "nextJobs": "PKPFMCP0P01",
        "prevJobs": "PKMOLCP0G09",
        "jobExec": "kmol-pe-spk-qlt-receiptmovementsm-01",
        "isBase": false,
        "path": "./xmls/Global/KMOL/CR-PEKMOLDIA-T02.xml"
      },
      {
        "job": "PKSANCP0P01",
        "nextJobs": "PKSANCP0H01",
        "prevJobs": "#N/A",
        "jobExec": "ksan-pe-spk-inm-lclcontractgloblocal-01",
        "isBase": true,
        "path": "./xmls/Global/KSAN/CR-PEKSANDIA-K02.xml"
      },
      {
        "job": "PKSANCP0H01",
        "nextJobs": "PKSANCP0G01",
        "prevJobs": "PKSANCP0P01",
        "jobExec": "ksan-pe-spk-qlt-ksanlclcontractgloblocm-01",
        "isBase": false,
        "path": "./xmls/Global/KSAN/CR-PEKSANDIA-K02.xml"
      },
      {
        "job": "PKSANCP0G01",
        "nextJobs": "PKSANCP0H02, PKSANCP0H03",
        "prevJobs": "PKSANCP0H01",
        "jobExec": "ksan-pe-spk-inm-contractuuidgen-01",
        "isBase": false,
        "path": "./xmls/Global/KSAN/CR-PEKSANDIA-K02.xml"
      },
      {
        "job": "PKSANCP0H02",
        "nextJobs": "#N/A",
        "prevJobs": "PKSANCP0G01",
        "jobExec": "ksan-pe-spk-qlt-contractgloballocalm-01",
        "isBase": false,
        "path": "./xmls/Global/KSAN/CR-PEKSANDIA-K02.xml"
      },
      {
        "job": "PKSANCP0H03",
        "nextJobs": "#N/A",
        "prevJobs": "PKSANCP0G01",
        "jobExec": "ksan-pe-spk-qlt-contractgloballocalhism-01",
        "isBase": false,
        "path": "./xmls/Global/KSAN/CR-PEKSANDIA-K02.xml"
      },
      {
        "job": "PKCSNCP0C02",
        "nextJobs": "PKCSNCP0T02",
        "prevJobs": "#N/A",
        "jobExec": "kcsn-pe-krb-out-customerconsentp-01",
        "isBase": true,
        "path": "./xmls/Global/KCSN/CR-PEKCSNDIA-T02.xml"
      },
      {
        "job": "PKCSNCP0T02",
        "nextJobs": "PKCSNCP0002",
        "prevJobs": "PKCSNCP0C02",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCSN/CR-PEKCSNDIA-T02.xml"
      },
      {
        "job": "PKCSNCP0002",
        "nextJobs": "#N/A",
        "prevJobs": "PKCSNCP0T02",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KCSN/CR-PEKCSNDIA-T02.xml"
      },
      {
        "job": "PCDOCP0009",
        "nextJobs": "PCDOCP0015, PCDOCP0032, PCDOCP0049",
        "prevJobs": "#N/A",
        "jobExec": "kcdo-kcdo-expiry-projections-kcdo-master",
        "isBase": true,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0010",
        "nextJobs": "PCDOCP0016, PCDOCP0032",
        "prevJobs": "#N/A",
        "jobExec": "kcdo-pe-spk-inm-economicclientdaily-01",
        "isBase": true,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0011",
        "nextJobs": "PCDOCP0018, PCDOCP0032, PCDOCP0034",
        "prevJobs": "#N/A",
        "jobExec": "kcdo-kcdo-economic-product-daily-kcdo-master",
        "isBase": true,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0012",
        "nextJobs": "PCDOCP0020, PCDOCP0032",
        "prevJobs": "#N/A",
        "jobExec": "kcdo-kcdo-solution-kcdo-master",
        "isBase": true,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0013",
        "nextJobs": "PCDOCP0014, PCDOCP0019, PCDOCP0032, PCDOCP0049, PCDOCP4038, PCDOCP4040",
        "prevJobs": "PCDOCP0028, PCDOCP0030, PCDOCP0031",
        "jobExec": "kcdo-pe-spk-inm-participant-01",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0014",
        "nextJobs": "PCDOCP0015, PCDOCP0016, PCDOCP0021, PCDOCP0032, PCDOCP0038, PCDOCP0039, PCDOCP0043",
        "prevJobs": "PCDOCP0013, PCDOCP0029",
        "jobExec": "kcdo-pe-spk-inm-person-01",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0015",
        "nextJobs": "PCDOCP0001, PCDOCP0002, PCDOCP0003, PCDOCP4003, PCDOCP4004, PCDOCP4006",
        "prevJobs": "PCDOCP0009, PCDOCP0014",
        "jobExec": "kcdo-pe-spk-out-expiryprojections-01",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0016",
        "nextJobs": "PCDOCP0004",
        "prevJobs": "PCDOCP0010, PCDOCP0014",
        "jobExec": "kcdo-pe-spk-out-account-01",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0018",
        "nextJobs": "PCDOCP0006",
        "prevJobs": "PCDOCP0011",
        "jobExec": "kcdo-pe-spk-out-accountbbvainformation-01",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0019",
        "nextJobs": "PCDOCP0007, PCDOCP0025",
        "prevJobs": "PCDOCP0013",
        "jobExec": "kcdo-pe-spk-out-branch-01",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0020",
        "nextJobs": "PCDOCP0023",
        "prevJobs": "PCDOCP0012",
        "jobExec": "kcdo-pe-spk-out-accountproduct-01",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0021",
        "nextJobs": "PCDOCP0022",
        "prevJobs": "PCDOCP0014",
        "jobExec": "kcdo-kcdo-user-porfolio-kcdo-custom",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0001",
        "nextJobs": "PCDOCP0033, PDCMCP0SF8",
        "prevJobs": "PCDOCP0015",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0002",
        "nextJobs": "PCDOCP0033, PDCMCP0SF9",
        "prevJobs": "PCDOCP0015",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0003",
        "nextJobs": "PCDOCP0033, PDCMCP0SFA",
        "prevJobs": "PCDOCP0015",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0004",
        "nextJobs": "PCDOCP0033, PDCMCP0SF7",
        "prevJobs": "PCDOCP0016",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0006",
        "nextJobs": "PCDOCP0033, PDCMCP0SFD",
        "prevJobs": "PCDOCP0018",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0007",
        "nextJobs": "PCDOCP0033, PDCMCP0SF1",
        "prevJobs": "PCDOCP0019",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0023",
        "nextJobs": "PCDOCP0033, PDCMCP0SFB",
        "prevJobs": "PCDOCP0020",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0022",
        "nextJobs": "PCDOCP0033, PDCMCP0SF4",
        "prevJobs": "PCDOCP0021",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0025",
        "nextJobs": "PCDOCP0033, PDCMCP0SF2",
        "prevJobs": "PCDOCP0019",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0028",
        "nextJobs": "PCDOCP0013",
        "prevJobs": "#N/A",
        "jobExec": "kcdo-kcdo-office-hierarchy-management-kcdo-master",
        "isBase": true,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0029",
        "nextJobs": "PCDOCP0014",
        "prevJobs": "#N/A",
        "jobExec": "kcdo-kcdo-catalog-manager-kcdo-master",
        "isBase": true,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0030",
        "nextJobs": "PCDOCP0013",
        "prevJobs": "#N/A",
        "jobExec": "kcdo-kcdo-business-group-kcdo-master",
        "isBase": true,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0031",
        "nextJobs": "PCDOCP0013",
        "prevJobs": "#N/A",
        "jobExec": "kcdo-kcdo-client-information-kcdo-master",
        "isBase": true,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0032",
        "nextJobs": "#N/A",
        "prevJobs": "PCDOCP0009, PCDOCP0010, PCDOCP0011, PCDOCP0012, PCDOCP0013, PCDOCP0014, PCDOCP0038, PCDOCP0039",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0033",
        "nextJobs": "#N/A",
        "prevJobs": "PCDOCP0001, PCDOCP0002, PCDOCP0003, PCDOCP0004, PCDOCP0006, PCDOCP0007, PCDOCP0023, PCDOCP0022, PCDOCP0025, PCDOCP0035, PCDOCP0037, PCDOCP0044, PCDOCP0045, PCDOCP0047, PCDOCP0048, PCDOCP0050",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0034",
        "nextJobs": "PCDOCP0035",
        "prevJobs": "PCDOCP0011",
        "jobExec": "kcdo-pe-spk-out-profitabilitydaily-01",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0035",
        "nextJobs": "PCDOCP0033, PDCMCP0SFC",
        "prevJobs": "PCDOCP0034",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0038",
        "nextJobs": "PCDOCP0032, PCDOCP0040",
        "prevJobs": "PCDOCP0014",
        "jobExec": "kcdo-pe-spk-inm-rating-01",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0040",
        "nextJobs": "PCDOCP0037",
        "prevJobs": "PCDOCP0038",
        "jobExec": "kcdo-pe-spk-out-eeffrating-01",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0037",
        "nextJobs": "PCDOCP0033, PDCMCP0SFJ",
        "prevJobs": "PCDOCP0040",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0039",
        "nextJobs": "PCDOCP0041, PCDOCP0032, PCDOCP0042",
        "prevJobs": "PCDOCP0014",
        "jobExec": "kcdo-pe-spk-inm-financialstatement-01",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0041",
        "nextJobs": "PCDOCP0044",
        "prevJobs": "PCDOCP0039",
        "jobExec": "kcdo-pe-spk-out-eeffdetail-01",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0044",
        "nextJobs": "PCDOCP0033, PDCMCP0SFK",
        "prevJobs": "PCDOCP0041",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0042",
        "nextJobs": "PCDOCP0045",
        "prevJobs": "PCDOCP0039",
        "jobExec": "kcdo-pe-spk-out-ratios-01",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0045",
        "nextJobs": "PDCMCP0SFL, PCDOCP0033",
        "prevJobs": "PCDOCP0042",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0043",
        "nextJobs": "PCDOCP0047, PCDOCP0048",
        "prevJobs": "PCDOCP0014",
        "jobExec": "kcdo-pe-spk-out-guarantee-01",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0047",
        "nextJobs": "PDCMCP0SFM, PCDOCP0033",
        "prevJobs": "PCDOCP0043",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0048",
        "nextJobs": "PDCMCP0SFN, PCDOCP0033",
        "prevJobs": "PCDOCP0043",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0049",
        "nextJobs": "PCDOCP0050",
        "prevJobs": "PCDOCP0009, PCDOCP0013",
        "jobExec": "kcdo-pe-spk-out-contracts-01",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP0050",
        "nextJobs": "PDCMCP0SFO, PCDOCP0033",
        "prevJobs": "PCDOCP0049",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDODIA-T02.xml"
      },
      {
        "job": "PCDOCP4001",
        "nextJobs": "PCDOCP4019, PCDOCP4021, PCDOCP4022, PCDOCP4035, PCDOCP4007",
        "prevJobs": "#N/A",
        "jobExec": "kcdo-kcdo-economic-product-monthly-kcdo-master",
        "isBase": true,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4019",
        "nextJobs": "PCDOCP4029",
        "prevJobs": "PCDOCP4001",
        "jobExec": "kcdo-kcdo-account-banking-system-debt-kcdo-custom",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4022",
        "nextJobs": "PCDOCP4032",
        "prevJobs": "PCDOCP4001",
        "jobExec": "kcdo-kcdo-account-banking-system-debt-summary-kcdo-custom",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4029",
        "nextJobs": "PCDOCP4036",
        "prevJobs": "PCDOCP4019",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4002",
        "nextJobs": "PCDOCP4008, PCDOCP4009, PCDOCP4020, PCDOCP4035, PCDOCP4021, PCDOCP4007",
        "prevJobs": "#N/A",
        "jobExec": "kcdo-kcdo-economic-client-monthly-kcdo-master",
        "isBase": true,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4009",
        "nextJobs": "PCDOCP4027, PCDOCP4028, PCDOCP4033",
        "prevJobs": "PCDOCP4002",
        "jobExec": "kcdo-pe-spk-out-accountsbs-01",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4020",
        "nextJobs": "PCDOCP4030",
        "prevJobs": "PCDOCP4002",
        "jobExec": "kcdo-kcdo-pago-haberes-kcdo-custom",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4021",
        "nextJobs": "PCDOCP4031",
        "prevJobs": "PCDOCP4001, PCDOCP4002",
        "jobExec": "kcdo-kcdo-account-profitability-kcdo-custom",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4008",
        "nextJobs": "PCDOCP4034",
        "prevJobs": "PCDOCP4002",
        "jobExec": "kcdo-kcdo-clasificacion-bbva-kcdo-custom",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4032",
        "nextJobs": "PCDOCP4036",
        "prevJobs": "PCDOCP4022",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4033",
        "nextJobs": "PCDOCP4036",
        "prevJobs": "PCDOCP4009",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4031",
        "nextJobs": "PCDOCP4036",
        "prevJobs": "PCDOCP4021",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4030",
        "nextJobs": "PCDOCP4036",
        "prevJobs": "PCDOCP4020",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4028",
        "nextJobs": "PCDOCP4036",
        "prevJobs": "PCDOCP4009",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4027",
        "nextJobs": "PCDOCP4036",
        "prevJobs": "PCDOCP4009",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4034",
        "nextJobs": "PCDOCP4036",
        "prevJobs": "PCDOCP4008",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4036",
        "nextJobs": "PDCMCP4SF1",
        "prevJobs": "PCDOCP4029, PCDOCP4032, PCDOCP4033, PCDOCP4031, PCDOCP4030, PCDOCP4028, PCDOCP4027, PCDOCP4034, PCDOCP4037",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4035",
        "nextJobs": "#N/A",
        "prevJobs": "PCDOCP4001, PCDOCP4002",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4003",
        "nextJobs": "PCDOCP4005, PDCMCP4SF9",
        "prevJobs": "#N/A",
        "jobExec": "cpdatapx.sh",
        "isBase": true,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4004",
        "nextJobs": "PCDOCP4005, PDCMCP4SFA",
        "prevJobs": "#N/A",
        "jobExec": "cpdatapx.sh",
        "isBase": true,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4005",
        "nextJobs": "#N/A",
        "prevJobs": "PCDOCP4003, PCDOCP4004, PCDOCP4006",
        "jobExec": "#N/A",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4006",
        "nextJobs": "PDCMCP4SFB, PCDOCP4005",
        "prevJobs": "#N/A",
        "jobExec": "cpdatapx.sh",
        "isBase": true,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4007",
        "nextJobs": "PCDOCP4037",
        "prevJobs": "PCDOCP4001, PCDOCP4002",
        "jobExec": "kcdo-kcdo-account-variation-information-kcdo-custom",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4037",
        "nextJobs": "PCDOCP4036",
        "prevJobs": "PCDOCP4007",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4038",
        "nextJobs": "PCDOCP4039",
        "prevJobs": "#N/A",
        "jobExec": "kcdo-pe-spk-out-legalrepresentative-01",
        "isBase": true,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4039",
        "nextJobs": "PDCMCP4SFD",
        "prevJobs": "PCDOCP4038",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4040",
        "nextJobs": "PCDOCP4041",
        "prevJobs": "#N/A",
        "jobExec": "kcdo-pe-spk-out-accountincome-01",
        "isBase": true,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      },
      {
        "job": "PCDOCP4041",
        "nextJobs": "PDCMCP4SFE",
        "prevJobs": "PCDOCP4040",
        "jobExec": "cpdatapx.sh",
        "isBase": false,
        "path": "./xmls/Global/KCDO/CR-PECDOMEN-T02.xml"
      }
    ]
  }`