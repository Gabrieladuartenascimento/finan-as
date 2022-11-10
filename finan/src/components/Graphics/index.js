import React from 'react';
import {Chart} from "react-google-charts";

const Graphics = () => {

    const database = {
        months: ["7/2022", "9/2022", "10/2022", "11/2022"],
        income: [3500, 2500, 5000, 3000],
        expense: [8000, 6000, 4500, 300],
    };
    
    let arrIndice = Object.keys(database);
    let arrValues = Object.values(database);
    let data = [];
    
    for (let i = 0; i < arrValues[0].length; i++){
        data[i] = arrValues.map((item) =>{
            return item[i];
        })
    }
    
    data.unshift(arrIndice);
    
    console.log(data);
    
    const options = {
        title: "Receitas x Despesas",
        curveType: "function",
        legend: {position: "bottom"},
        hAxis: {format: "currency"},
        animation: {duration: 500, easing: "linear", startup: true},
    }
     

 return (
   <Chart
   chartType="ColumnChart"
   width="100%"
   height="400px"
   data={data}
   options={options}
   chartLanguage="pt-BR"
   />
  );
};

export default Graphics;

