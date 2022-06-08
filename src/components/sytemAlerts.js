import react from reacts ;

const mockAlertsInfo={"data":[{"APP_NM":"FDC",
"SCTN_NM":"ALERTS",
"CHNG_DT":"2022-02-14T08:54:13.000Z",
"SCTN_DESC1":"<span style=\"font-family: Verdana;\"><strong style=\"background-color: #ffffff;\"><span style=\"color: #0070c0;\">2/14/22 Enhancement:</span></strong><span style=\"background-color: #ffffff;\">&nbsp;The&nbsp;</span><span style=\"font-size: 9pt;\">new <strong>Incentive Results</strong> tab is now available in the <strong>Quarter End Results</strong> section. The <strong>Completeness Results</strong> screen has also been updated to provide additional information for the <strong><em>Indemnity Incentive Program</em></strong>.</span></span>",
"SCTN_DESC2":null,
"EFF_DT":"2022-02-14T00:00:00.000Z",
"XPIR_DT":null,
"DSPLY_ORDR":0,
"USER_TYPE_CD":"A"}]};


const systemAlerts = () => {
    const user  = useSelector((state) => state.user);
    return (     
        <div>systemAlerts</div>   
    )
  }

export default  systemAlerts