const image={template:`
<div>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
 Add Image
</button>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            Image Id
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control m-2"
                v-model="ImageNameFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
                
                <button type="button" class="btn btn-light"
                @click="sortResult('ImageName',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('ImageName',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>

            </div>
            Image Name
        </th>
        <th>
            Description
        </th>
        <th>
            URL
        </th>
        <th>
            <div class="d-flex flex-row">
            <input class="form-control m-2"
                v-model="ImageFavFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">

                <button type="button" class="btn btn-light"
                @click="sortResult('ImageFav',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('ImageFav',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            Favorite
        </th>
        <th>
            Options
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="img in image">
        <td>{{img.ImageId}}</td>
        <td>{{img.ImageName}}</td>
        <td>{{img.ImageDescription}}</td>
        <td>{{img.ImageURL}}</td>
        <td>{{img.ImageFav}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(img)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(img.ImageId)"
            class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

        </td>
    </tr>
</tbody>
</thead>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>

    <div class="modal-body">

        <div class="input-group mb-3">
            <span class="input-group-text">Image Name</span>
            <input type="text" class="form-control" v-model="ImageName">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Image Description</span>
            <input type="text" class="form-control" v-model="ImageDescription">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Image URL</span>
            <input type="text" class="form-control" v-model="ImageURL">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Image Favorite</span>
            <input type="text" class="form-control" v-model="ImageFav">
        </div>

        <button type="button" @click="createClick()"
        v-if="ImageId==0" class="btn btn-primary">
        Create
        </button>
        <button type="button" @click="updateClick()"
        v-if="ImageId!=0" class="btn btn-primary">
        Update
        </button>

    </div>

</div>
</div>
</div>


</div>


`,

data(){
    return{
        image:[],
        modalTitle:"",
        ImageId:0,
        ImageName:"",
        ImageDescription:"",
        ImageURL:"",
        ImageFav:false,
        ImageNameFilter:"",
        ImageFavFilter:"",
        imageWithoutFilter:[]
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"imgur")
        .then((response)=>{
            this.image=response.data;
            this.imageWithoutFilter=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add Image";
        this.ImageId=0;
        this.ImageName="";
        this.ImageDescription="";
        this.ImageURL="";
        this.ImageFav=false;
    },
    editClick(img){
        this.modalTitle="Edit Image";
        this.ImageId=img.ImageId;
        this.ImageName=img.ImageName;
        this.ImageDescription=img.ImageDescription;
        this.ImageURL=img.ImageURL;
        this.ImageFav=img.ImageFav;
    },
    createClick(){
        axios.post(variables.API_URL+"imgur",{
            ImageId:this.ImageId,
            ImageName:this.ImageName,
            ImageDescription:this.ImageDescription,
            ImageURL:this.ImageURL,
            ImageFav:this.ImageFav
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL+"imgur",{
            ImageId:this.ImageId,
            ImageName:this.ImageName,
            ImageDescription:this.ImageDescription,
            ImageURL:this.ImageURL,
            ImageFav:this.ImageFav
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"imgur/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    },
    FilterFn(){
        var ImageFavFilter=this.ImageFavFilter;
        var ImageNameFilter=this.ImageNameFilter;

        this.image=this.imageWithoutFilter.filter(
            function(el){
                return el.ImageId.toString().toLowerCase().includes(
                    ImageFavFilter.toString().trim().toLowerCase()
                )&&
                el.ImageName.toString().toLowerCase().includes(
                    ImageNameFilter.toString().trim().toLowerCase()
                )
            });
    },
    sortResult(prop,asc){
        this.Image=this.imageWithoutFilter.sort(function(a,b){
            if(asc){
                return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
            }
            else{
                return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
            }
        })
    }

},
mounted:function(){
    this.refreshData();
}

}