class Austin{
	constructor(projectName,owner,developer,address,zip,councilDistrict,Kirwan_Opportunity_Index,Distance_to_Bus_Stop,totalUnits,totalAffordableUnits,unitType,program,HousingType){
		this.projectName = projectName;
		this.owner = owner;
		this.developer = developer;
		this.address = address;
		this.zip = zip;
		this.councilDistrict = councilDistrict;
		this.Kirwan_Opportunity_Index = Kirwan_Opportunity_Index;
		this.Distance_to_Bus_Stop = Distance_to_Bus_Stop;
		this.totalUnits = totalUnits;
		this.totalAffordableUnits = totalAffordableUnits;
		this.unitType = unitType;
		this.program = program;
		this.HousingType = HousingType;
	}
}

class Seattle{
	constructor(applicationNumber,permitType,address,description,category,actionType,workType,value,applicantName,applicantDate){
		this.applicationNumber = applicationNumber;
		this.permitType = permitType;
		this.address = address;
		this.description = description;
		this.category = category;
		this.actionType = actionType;
		this.workType = workType;
		this.value = value;
		this.applicantName = applicantName;
		this.applicantDate = applicantDate;
		}	      
}

class Chicago{
        constructor(CommunityAreaName,CommunityAreaNumber,PropertyType,PropertyName,Address,ZipCode,PhoneNumber,ManagementCompany,Units,Latitude,Longitude,Location,total){
                this.CommunityAreaName = CommunityAreaName;
                this.CommunityAreaNumber = CommunityAreaNumber;
                this.PropertyType = PropertyType;
                this.PropertyName = PropertyName;
                this.Address = Address;
                this.ZipCode = ZipCode;
                this.PhoneNumber = PhoneNumber;
                this.ManagementCompany = ManagementCompany;
                this.Units = Units;
                this.Latitude = Latitude;
                this.Longitude = Longitude;
                this.Location = Location;
                this.total = total;
        }
}

class NewYork{
	constructor(Bble,block,lot,owner,stories,fullval)
	{
		this.Bble = Bble;
		this.block = block;
		this.lot = lot;
		this.owner = owner;
		this.stories = stories;
		this.fullval = fullval;
	}

}

class Connecticut{
	constructor(
	applicationNumber, permitType, address, city, stateCode, actionType, menArrested, womenArrested, total, peopleArrestedUsingWeapons, peopleArrestedUsingDrugs, peopleArrestedUsingLiquor, suspensionsPer100StudentsYear1Pct, suspensionsPer100StudentsYear2Pct, suspensionsPer100StudentsAvgPct, misconductsToSuspensionsYear1Pct, misconductsToSuspensionsYear2Pct, misconductsToSuspensionsAvgPct)
	{
		this.applicationNumber = applicationNumber;
		this.permitType = permitType;
		this.address = address;
		this.city = city;
		this.stateCode = stateCode;
		this.actionType = actionType;
		this.menArrested = menArrested;
		this.womenArrested = womenArrested;
		this.total = total;
		this.peopleArrestedUsingWeapons = peopleArrestedUsingWeapons;
		this.peopleArrestedUsingDrugs = peopleArrestedUsingDrugs;
		this.peopleArrestedUsingLiquor = peopleArrestedUsingLiquor;
		this.suspensionsPer100StudentsYear1Pct = suspensionsPer100StudentsYear1Pct;
		this.suspensionsPer100StudentsYear2Pct = suspensionsPer100StudentsYear2Pct;
		this.suspensionsPer100StudentsAvgPct = suspensionsPer100StudentsAvgPct;
		this.misconductsToSuspensionsYear1Pct = misconductsToSuspensionsYear1Pct;
		this.misconductsToSuspensionsYear2Pct = misconductsToSuspensionsYear2Pct;
		this.misconductsToSuspensionsAvgPct = misconductsToSuspensionsAvgPct;
	}
}
