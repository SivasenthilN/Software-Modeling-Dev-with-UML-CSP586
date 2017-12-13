// used ECMA6 Scripts for the implementation 
let plotchartTool = document.getElementById("myChart");
let c = document.getElementById("newChart");
var datasetToDisplay = 0;
var arrayObj = [];
var currentLoadedData = "";
var column = [];
var verticalSelection = [];

//this is the function which i have listed in the html file for fetching the dataset using the dataframe.js library
function fetch(){
	let DataFrame = dfjs.DataFrame;
    var vals = document.getElementById("datasets");
    currentLoadedData = vals.options[vals.selectedIndex].value;
    DataFrame.fromCSV(currentLoadedData).then(df => 
    {
        data = df.toJSON('HousingJSON.json');  
		datasetToDisplay = data;		
		verticalSelection = df.toArray();
		column = df.listColumns();
		var div = document.getElementById('table');
		makeTableStyle(div);
	if(div)
	{
		div.innerHTML = "";
	}
	var displayTable = "<table id='dataTable' class='table table-striped table-bordered' align='left' style=' display:block; overflow: auto; overflow-x: visible;' cellspacing='0' width=100% height='500'><thead><tr>";
	for (var i =0; i < column.length; i++) {
		displayTable+= "<th>" +column[i]+ "</th>";
	}
	displayTable+= "</tr></thead>";
	displayTable+= "<tbody>";
	for (var i = 1; i < verticalSelection.length; i++) {
		displayTable+= "<tr>";
		for(var j=0;j<verticalSelection[i].length;j++){
		displayTable+= "<td>" +verticalSelection[i][j]+" </td>";
		}
		displayTable+="</tr>";
	}
	
	displayTable+="</table>";
	var Columns = makeColumnHeaderForTable(verticalSelection);
	makeFilterElements();
    makeObjects(column);
			
	div.innerHTML = displayTable;
	
			$('#dataTable').DataTable({
				"paging":   true,
				"ordering": true,
				"info":     false,
				"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
				
			});		
    });
}

//This function exports the dataset and show it in the dashboard by converting into json
function export_data(dataset)
{
    var blob= new Blob([data],{ type:"text/ApplicationJson;charset:utf-8" });
    
    datasetToDisplay = dataset;
    makeTableFromJSON();
}

// The column headers are being fixed with the index value in this function
function makeColumnHeaderForTable(column){
  var columnSet = {};
  var columns = [];
  columnSet.columns = columns;


  for(var i=0; i <column.length; i++)
  {
    var column = {
      "index": column[i],
        "title": column[i]
    }
    columnSet.columns.push(column);
  }

  return columnSet;
}

// this function parse the json value into the table. 
function makeTableFromJSON() {
	var div = document.getElementById('table');
	makeTableStyle(div);
	
	if(div)
	{
		div.innerHTML = "";
	}
	var displayTable = "<table id='dataTable' class='table table-striped table-bordered' cellspacing='0' width='100%'><thead><tr>";
	var data = JSON.parse(datasetToDisplay);
	var headers = [];
	for (var key in data[0]) {
		alert(key);
		displayTable+= "<th>" +key+ "</th>";
		headers.push(key);
	}
	displayTable+= "</tr></thead>";
	displayTable+= "<tbody>";
	
	
	for (var i = 1; i < data.length; i++) {
		displayTable+= "<tr>";
		for(var j=0;j<headers.length;j++){
		displayTable+= "<td>" +data[i].headers[j]+" </td>";
		}
		displayTable+="</tr>"
	}
	
	displayTable+="</table>";
	var Columns = makeColumnHeaderForTable(colData);
	makeFilterElements();
    makeObjects(colData);
			

	
	div.innerHTML = displayTable;
	
			$('#dataTable').DataTable({
				"paging":   true,
				"ordering": true,
				"info":     false,
				"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
				
			});
}


 //Function to make objects for the Number of records in the loaded dataset.
 
function makeObjects(colHeaderValues){
	if(currentLoadedData == "austin.csv"){
		makeAustinObjects(colHeaderValues);
	} else if(currentLoadedData == "nyc.csv"){
		makeNewYorkObjects(colHeaderValues);
	} else if(currentLoadedData == "chicago.csv"){
		makeChicagoObjects(colHeaderValues);
	} else if(currentLoadedData == "conencticut.csv"){
		makeConnecticutObjects(colHeaderValues);
	} else if(currentLoadedData == "seattle.csv"){
		makeSeattleObjects(colHeaderValues);
	}
}

// the objects for the Austin dataset is been created as array objects
function makeAustinObjects(colHeaderValues){
	var json = fetchParsedJson();
	for(var i = 0 ; i < json.length; i++){
		var record = json[i];
		let austinObject = new Austin(record[colHeaderValues[0]],record[colHeaderValues[1]],record[colHeaderValues[2]],record[colHeaderValues[3]],record[colHeaderValues[4]],record[colHeaderValues[5]],record[colHeaderValues[6]],record[colHeaderValues[7]],record[colHeaderValues[8]],record[colHeaderValues[9]],record[colHeaderValues[10]],record[colHeaderValues[11]],record[colHeaderValues[12]]);
		
		arrayObj.push(austinObject);
	}
}
// the objects for the seattle dataset is been created as array objects
function makeSeattleObjects(colHeaderValues){
	var json = fetchParsedJson();
	for(var i = 0 ; i < json.length; i++){
		var record = json[i];
		let seattleObject = new Seattle(record[colHeaderValues[0]],record[colHeaderValues[1]],record[colHeaderValues[2]],record[colHeaderValues[3]],record[colHeaderValues[4]],record[colHeaderValues[5]],record[colHeaderValues[6]],record[colHeaderValues[7]],record[colHeaderValues[8]],record[colHeaderValues[9]],record[colHeaderValues[10]],record[colHeaderValues[11]],record[colHeaderValues[12]], record[colHeaderValues[13]], record[colHeaderValues[14]], record[colHeaderValues[15]], record[colHeaderValues[16]], record[colHeaderValues[17]], record[colHeaderValues[18]]);
		
		arrayObj.push(seattleObject);
	}
}
// the objects for the chicago dataset is been created as array objects
function makeChicagoObjects(colHeaderValues){
	var json = fetchParsedJson();
	for(var i = 0 ; i < json.length; i++){
		var record = json[i];
		let chicagoObject = new Chicago(record[colHeaderValues[0]],record[colHeaderValues[1]],record[colHeaderValues[2]],record[colHeaderValues[3]],record[colHeaderValues[4]],record[colHeaderValues[5]],record[colHeaderValues[6]],record[colHeaderValues[7]],record[colHeaderValues[8]],record[colHeaderValues[9]],record[colHeaderValues[10]],record[colHeaderValues[11]],record[colHeaderValues[12]]);
		
		arrayObj.push(chicagoObject);
	}
}
// the objects for the conencticut dataset is been created as array objects
function makeConnecticutObjects(colHeaderValues){
	var json = fetchParsedJson();
	for(var i = 0 ; i < json.length; i++){
		var record = json[i];
		let connecticutObject = new Connecticut(record[colHeaderValues[0]],record[colHeaderValues[1]],record[colHeaderValues[2]],record[colHeaderValues[3]],record[colHeaderValues[4]],record[colHeaderValues[5]],record[colHeaderValues[6]],record[colHeaderValues[7]],record[colHeaderValues[8]],record[colHeaderValues[9]],record[colHeaderValues[10]],record[colHeaderValues[11]],record[colHeaderValues[12]], record[colHeaderValues[13]], record[colHeaderValues[14]], record[colHeaderValues[15]], record[colHeaderValues[16]], record[colHeaderValues[17]]);
		
		arrayObj.push(connecticutObject);
	}
}
// the objects for the NewYork dataset is been created as array objects
function makeNewYorkObjects(colHeaderValues){
	var json = fetchParsedJson();
	for(var i = 0 ; i < json.length; i++){
		var record = json[i];
		let newyorkObject = new NewYork(record[colHeaderValues[0]],record[colHeaderValues[1]],record[colHeaderValues[2]],record[colHeaderValues[3]],record[colHeaderValues[4]],record[colHeaderValues[5]],record[colHeaderValues[6]],record[colHeaderValues[7]],record[colHeaderValues[8]],record[colHeaderValues[9]],record[colHeaderValues[10]],record[colHeaderValues[11]]);
		
		arrayObj.push(newyorkObject);
	}
}

//this function is used to make filter elements

function makeFilterElements() {
	var filter = document.createElement('div');
	filter.id = 'select-column';

	var divContainer = document.getElementById("filter");
    divContainer.innerHTML = "";
    divContainer.appendChild(filter);
	
	makeFilter();
}	

 //this function is used to to make filter functionality

function makeFilter() {
	var select_column_div = document.getElementById("select-column");	
	makeHeader(select_column_div,"You can select multiple columns here to filter");	
	var br = document.createElement('br');
	var filter = document.createElement('div');
	select_column_div.appendChild(br);
	var json = fetchParsedJson();	
	
	for(var i = 0 ; i < json.length; i++){
		for (var key in json[i]) {
			makeCheckBox(key,"select-column");
		}
		break;
	}
	
	makeFilterStyles(select_column_div);
	makeAddFilterButton(select_column_div);
}


//this function is used to make "Add Filter" for filter
 
function makeAddFilterButton(select_column_div) {
	var addFilterButton= document.createElement('input');
	addFilterButton.setAttribute('type','button');
	addFilterButton.setAttribute('id', 'addFilter');
	addFilterButton.setAttribute('name','addFilterButton');
	addFilterButton.setAttribute('value','Add Filter');
	addFilterButton.addEventListener('click', function(event){makeDivAnimation()});
	addFilterButton.addEventListener('click',function(event){makeRowFilters()});
	select_column_div.appendChild(document.createElement("br"));
	select_column_div.appendChild(addFilterButton);
}

 //this function is used to make checkbox for Column selection
 
function makeCheckBox(columnName, parentDivId) {
	var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.name = columnName;
	checkbox.value = "0"; 
	checkbox.id = columnName;
	
	// Styles for Checkbox
	makeCheckBoxStyles(checkbox);
	
	var label = document.createElement('label')
	label.htmlFor = "id";
	label.appendChild(document.createTextNode(columnName));
	
	var divContainer = document.getElementById(parentDivId);
	if(divContainer){
		divContainer.appendChild(label);
		divContainer.appendChild(checkbox);
	}	
}

//this function is used to the headers
function makeHeader(divId,headerLabel) {
	var heading = document.createElement('label');
	heading.style.fontWeight = 'bold';
	heading.innerHTML=headerLabel;
	divId.appendChild(heading);
	divId.appendChild(document.createElement('br'));
}

 //this function is used to Create Row Filters
function makeRowFilters() {
	
	//clear previous checkbox div
	var divContainer = document.getElementById('categorical-filter-checkbox');
	divContainer.innerHTML = "";
	//show filter div
	document.getElementById("filter-row").hidden=false;
	var checkedCategorisedColumnsSet = fetchCheckedCategorisedColumns();
	
	//for each categorical value in set build multiselect dropdown
	for (const value of checkedCategorisedColumnsSet) {		
		var selectDiv = document.createElement("div");
		selectDiv.style.marginTop = "14px";
		selectDiv.style.marginRight = "24px";
		
		var select = document.createElement("select");
		select.id = value;
		select.multiple = true;
		select.style.width = "180px";
		select.style.overflowX = "auto";		
		
		var selectLabel = document.createElement('label')
		selectLabel.htmlFor = "id";
		selectLabel.appendChild(document.createTextNode(value));
		
		var categoryValueSet = fetchAllValuesForCategory(value);
		for (const value of categoryValueSet) {
			var option = document.createElement("option");
			option.value = value;
			option.selected ="";
			option.innerHTML = value;
			select.add(option);
		}
		selectLabel.append(document.createElement("br"));
		selectLabel.append(select);
		selectDiv.appendChild(selectLabel);
		divContainer.append(selectDiv);				
	}
}

//this function is used to fetch All values for particular category

function fetchAllValuesForCategory(categoryName) {
	let categoryValueSet = new Set();
	var json = fetchParsedJson();	
	for(var i = 0 ; i < json.length; i++){
		for (var key in json[i]) {
			var columnName = key;
			var columnValue = json[i][key];
			if(categoryName == columnName) {
				categoryValueSet.add(columnValue);
			}
		}
	}	
	return categoryValueSet;
}


//this function is used to fetch All Categorised Value based on selection of columns
 
function fetchAllCategorisedColumnSet() {
	let categorisedColumnsSet = new Set();
	var json = fetchParsedJson();
	for(var i = 0 ; i < json.length; i++){
		for (var key in json[i]) {
			var columnName = key;
			var columnValue = json[i][key];
			if((columnName != null && columnName != '') && isNaN(columnValue)){
				categorisedColumnsSet.add(columnName);
			} else if(categorisedColumnsSet.size == json[i].length){
				return categorisedColumnsSet;
			}
		}	
	}		
	return categorisedColumnsSet;
}

 //this function is used to check if Column is Selected
function isColumnSelected(columnName) {
	var isColumnSelected = false;
	var select_column_div = document.getElementById('select-column');
	for(var i = 0 ; i < select_column_div.children.length; i++ ){
		var childDiv = select_column_div.children[i];
		if(childDiv.type == 'checkbox' && childDiv.id == columnName && childDiv.checked) {
			isColumnSelected = true
			break;
		}
	}
	return isColumnSelected;
}

//this function is used to fetch parsed json value of current dataset
 
function fetchParsedJson() {
	return JSON.parse(datasetToDisplay);
}

 //this function is used to fetch all column names
function fetchAllColumns() {
	let columnSet = new Set();
	var json = fetchParsedJson();
	for (var key in json[0]) {
		columnSet.add(key);
	}
	return columnSet;
}

 //this function is used to fetch Checked Categorised Column name
function fetchCheckedCategorisedColumns() {
	let checkedCategorisedColumnSet = new Set();
	var categorisedColumnsSet = fetchAllCategorisedColumnSet();
	for (const value of categorisedColumnsSet) {		
		if(isColumnSelected(value)){
			checkedCategorisedColumnSet.add(value);
		}
	}	
	return checkedCategorisedColumnSet;
}


//this function is used to fetch All Numerical Columns
function fetchAllNumericalColumns() {
	var numericalFilterColumnsSet = new Set();
	var allColumns = fetchAllColumns();
	var categorisedColumnsSet = fetchAllCategorisedColumnSet();
	for (const value of allColumns) {	
		if(!categorisedColumnsSet.has(value)){
			numericalFilterColumnsSet.add(value);
		}
	}
	return numericalFilterColumnsSet;
}


 //this function is used to convert string To a Camel Case
function convertToCamelCase(string,seperator){
    var out = "";
	if(seperator != null){
    string.split(seperator).forEach(function (el, idx) {
        var add = el.toLowerCase();
        out += (idx === 0 ? add : add[0].toUpperCase() + add.slice(1));
    });
	}else {
		return string;
	}	
    return out;
}

 //this function is used to fetch all the Filtered Conditions
function fetchAllFilteredConditions() {
	let filteredItem = [];
	let selectedCatColumnValueMap = new Map();
	let selectedNumColumnValueMap = new Map();
	let numericalCheckBox = new Set();
	
	var filter = document.getElementById('categorical-filter-checkbox');
	for(var i = 0; i < filter.children.length ; i++){
		var childElement = filter.children[i].firstElementChild.childNodes;
		var columnName = convertToCamelCase(childElement[0].data,"_"); //label field
		var multiSelectDropDowns = childElement[2].options; // multi select dropdown field
		let selectedCatValueSet = new Set();
		for(var j = 0 ; j< multiSelectDropDowns.length; j++){
			if(multiSelectDropDowns[j].selected){
				selectedCatValueSet.add(multiSelectDropDowns[j].value);
			}
		}
		if(selectedCatValueSet.size > 0){
			selectedCatColumnValueMap.set(columnName,selectedCatValueSet);
		}	
	}
	filteredItem.push(selectedCatColumnValueMap); //push categorical value map to first element in array
	
	
	var numericalFilters = fetchAllNumericalColumns();
	for (const value of numericalFilters) {
		if(isColumnSelected(value)){
			numericalCheckBox.add(convertToCamelCase(value,"_"));
		}
	}
	if(numericalCheckBox.size > 0){
		selectedNumColumnValueMap.set('selectedNumericalValues',numericalCheckBox);
		selectedNumColumnValueMap.set('numericalFilterCondition',document.querySelector('input[name="numericalFilter"]:checked').value);
		selectedNumColumnValueMap.set('numericalFilterValue',document.getElementById('numericalFilter').value);
	}
	filteredItem.push(selectedNumColumnValueMap); //push numerical related values to second element in array;
	return filteredItem;
}

 //this function is used to reset the canvas element.
function resetSpace(){
	var bc = document.getElementById('barchartcanvas');
	var lc = document.getElementById('linechartcanvas');
	var dc = document.getElementById('doughnutchartcanvas');
	var pc = document.getElementById('piechartcanvas');
	if(bc != undefined){
		bc.remove();
	}
	if(lc != undefined){
		lc.remove();
	}
	if(dc != undefined){
		dc.remove();
	}
	if(pc != undefined){
		pc.remove();
	}
}

 //this function is used to make a canvas chart element and append to the parent div.
function makeCanvasElement(chartType){
	var canvas = document.createElement('canvas');
	canvas.id=chartType;
	canvas.class="chartCanvas";
	document.getElementById('childChart').appendChild(canvas);
}

//this function is used to apply chart which we have mentioned in the html file

function applyChart() {
	resetSpace();
	var filteredConditiontionsMap = fetchAllFilteredConditions();
	var map = BeforeProcessFiltering(filteredConditiontionsMap);
	var chartsSelected = fetchChartSelections();
	var labels = [];
	var vals = [];
	for (let label of map.keys()){
		labels.push(label);
		vals.push(map.get(label));
	}
	
	for(var i =0;i<chartsSelected.length;i++){
		document.getElementById('parentChart').style.display = "block";
		let cs = new ChartMain();
		var chart = null;
		let isBackgroundColorRequired = true;
		if(chartsSelected[i] == "Bar Chart"){
			makeCanvasElement("barchartcanvas");

			let barChartDecorator = new BarChartDecorator();
			chart = cs.orderChart("bar");
			chart.setLabelAndData(labels,vals);
			barChartDecorator.applyBackgroundColor(chart);
			barChartDecorator.applyBorderColor(chart);
		} else if(chartsSelected[i] == "Line Chart"){
			let lineChartDecorator = new LineChartDecorator();
			makeCanvasElement("linechartcanvas");

			chart = cs.orderChart("line");
			chart.setLabelAndData(labels,vals);
			lineChartDecorator.applyBorderColor(chart);

		} else if(chartsSelected[i] == "Pie Chart"){
			let pieChartDecorator = new PieChartDecorator();
			makeCanvasElement("piechartcanvas");
			chart = cs.orderChart("pie");
			chart.setLabelAndData(labels,vals); 
			pieChartDecorator.applyBackgroundColor(chart);
			pieChartDecorator.applyBorderColor(chart);			
		}else if(chartsSelected[i] == "Doughnut Chart"){
			let doughnutChartDecorator = new DoughnutChartDecorator();
			makeCanvasElement("doughnutchartcanvas");
			chart = cs.orderChart("doughnut");
			chart.setLabelAndData(labels,vals); 
			doughnutChartDecorator.applyBackgroundColor(chart);
			doughnutChartDecorator.applyBorderColor(chart);
		}
		
		 
		chart.plot();
	}
}

//this function is used to get the chart selections done by the user of the dashboard
function fetchChartSelections(){
	var chartsSelected = [];
	var select_column_div = document.getElementById('select-column');
	var parentEl = document.getElementById('plot-graph').children[0];
	for(var i = 0;i<parentEl.children.length;i++){
		var childEl = parentEl.children[i];
		if(childEl.type == 'checkbox' && childEl.checked){
			chartsSelected.push(childEl.value);
		}
	}
	return chartsSelected;
}
//this class is used for the identification of the categorical and numerical value of the columns in the dataset
class Filter{
	constructor(){}
	filterRow(dataSet, columnName, columnValue, operand, isCategorical, isNumerical){
		let result;
		
		for(var i=0;i<column.length;i++){
			if(columnName === convertToCamelCase(column[i],"_")){
				columnName = i;
				break;
			}
		}
		
		if(isCategorical){
			result = verticalSelection.filter(fil => fil[columnName] === columnValue );		
		}

		if(isNumerical){
			if(operand == '='){
				result = verticalSelection.filter(fil => fil[columnName] === Number.parseInt(columnValue) );
			}
			else if(operand == '>='){
				result = verticalSelection.filter(fil => fil[columnName] >= Number.parseInt(columnValue) );
			}
			else{
				result = verticalSelection.filter(fil => fil[columnName] <= Number.parseInt(columnValue) );
			}
		}
		return result.length;
    }
}

function BeforeProcessFiltering(filterCondition)
{
	let isCategorical = 0;
	let isNumerical = 0;
	let columnName;
	let categoryValues;
	let columnValue;
	let operand;
	let colNames = [];
	let resultDataMap = new Map();
	for (let categoryKey of filterCondition[0].keys()){
		isCategorical = 1;
		isNumerical = 0;
		columnName = categoryKey;
		categoryValues = filterCondition[0].get(categoryKey);
		for(let columnVal of categoryValues){
			let count = filterData(columnName, columnVal, isCategorical, isNumerical);
			resultDataMap.set(columnVal, count);
		}
	}

	for(let numericalKey of filterCondition[1].keys())
	{
		isNumerical = 1;
		isCategorical = 0;		
		if(numericalKey == "selectedNumericalValues"){
			let numericalVals = filterCondition[1].get(numericalKey);
			
			for(let val of numericalVals.keys())
			{
				colNames.push(val);
			}
		}
		else if(numericalKey == "numericalFilterCondition")
		{
			let operandName = filterCondition[1].get(numericalKey);
			if(operandName == "greaterThanEqualTo"){
				operand = ">=";
			}
			else if(operandName == "lessThanEqualTo"){
				operand = "<=";
			}
			else if(operandName == "equalTo"){
				operand = "=";
			}
		}
		else if(numericalKey == "numericalFilterValue"){
			columnValue = filterCondition[1].get(numericalKey);
		}
		
	}
	
	if(isNumerical){
		for(let column of colNames)
		{
			let count = filterData(column,columnValue, isCategorical, isNumerical, operand);
			resultDataMap.set(column, count);
		}
	}
	return resultDataMap;
}

function filterData(columnName,columnValue,isCategorical, isNumerical, operand)
{
	let filterdata = new Filter();
	let result = filterdata.filterRow(arrayObj, columnName, columnValue, operand, isCategorical, isNumerical);
	return result;
}

//UI Changes


function makeTableStyle(div1) {
	div1.style.width = "150%";
	div1.style.paddingBottom = "50px";
}


function makeFilterStyles(col_div) {
	var br = document.createElement('br');
	col_div.style.fontFamily = "Century Gothic";
	col_div.style.fontWeight = "bold";
	col_div.appendChild(br);
}

function makeDivAnimation() {
	var secondDivId = document.getElementById('filter-row');
	secondDivId.style.fontFamily = "Century Gothic";
	secondDivId.style.fontWeight = "bold";	
}


function makeCheckBoxStyles(chbk) {
	chbk.style.marginRight = "40px";
	chbk.style.marginLeft = "10px";
}
