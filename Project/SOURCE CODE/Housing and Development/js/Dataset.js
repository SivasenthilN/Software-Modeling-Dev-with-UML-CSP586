class Dataset{
	constructor(){
		this.dataFrame = dfjs.DataFrame;
	}
	
	getDataFrame(){
		return this.dataFrame;
	}
	
	fetch(){

		var vals = document.getElementById("datasets");
		currentLoadedData = vals.options[vals.selectedIndex].value;
		this.dataFrame.fromCSV(currentLoadedData).then(df => 
		{
			var data = df.toJSON('HousingJSON.json');        
			export_data(data);
		});
	}


	export_data(dataset){
		var blob= new Blob([data],{ type:"text/ApplicationJson;charset:utf-8" });
			
		
		datasetToDisplay = dataset;
		makeTableFromJSON();
	}
}
