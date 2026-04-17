import React from "react";

function HistoryPanel({ history, historyIdx, applyVersion }) {

  return (
    <div style={{flex:1,overflowY:"auto"}}>

      {history.map((entry,i)=>(
        <div
          key={i}
          onClick={()=>applyVersion(i)}
          style={{
            padding:"7px 12px",
            cursor:"pointer",
            fontSize:11,
            color:i===historyIdx?"#7dd3fc":"inherit"
          }}
        >
          {entry.label}
        </div>
      ))}

    </div>
  );
}

export default HistoryPanel;
