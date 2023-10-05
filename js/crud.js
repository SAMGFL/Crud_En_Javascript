export class CRUD{
	#tableName = null;
    #data = null;
  
	constructor(tableName){
 		this.#setTableName(tableName);
      	this.#setData();
  	}

	#setTableName(tableName){
		this.#tableNameValidate(tableName);
        this.#tableName = tableName;
	}
    
    #setData(){
        let dataRepository = this.#Get(this.#tableName);
        this.#data = dataRepository === null ? [] : dataRepository;
	}
    
    #tableNameValidate(tableName){
		if(tableName == undefined) throw new Error("Table name required");
	}
    
    create(data){
        this.data.push(data);
        this.#save();
        return this.#data.length;
    }

	read(id){
        return this.#data[id];
    }
    readAll(id){
        return this.#data;
    }

	update(id, data){
        return this.#data[id]= data;
        return true;
    }

	delete(id){
        return this.#data.splice(id,1);
        this.#save();
        return true;
    }
    #save(){
        let DataToSave = JSON.stringify(this.data);
        sessionStorage.setItem(this.#tableName, DataToSave);
    }
    #Get(key){
        let data = sessionStorage.getItem(key);
        return JSON.parse(data);
    }
}