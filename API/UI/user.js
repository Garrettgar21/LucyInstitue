const user={template:`<div>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
 Add User
</button>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            UserId
        </th>
        <th>
            Name
        </th>
        <th>
            Username
        </th>
        <th>
            Password
        </th>
        <th>
            Date of Joining
        </th>
        <th>
            Options
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="use in user">
        <td>{{use.UserId}}</td>
        <td>{{use.Username}}</td>
        <td>{{use.UserUsername}}</td>
        <td>{{use.UserPassword}}</td>
        <td>{{use.DateOfJoining}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(use)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(use.UserId)"
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
    <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 w-50 bd-highlight">
            <div class="input-group mb-3">
                <span class="input-group-text">Name</span>
                <input type="text" class="form-control" v-model="Username">
            </div>
                <div class="input-group mb-3">
                <span class="input-group-text">Username</span>
                <input type="text" class="form-control" v-model="UserUsername">
            </div>
                <div class="input-group mb-3">
                <span class="input-group-text">Password</span>
                <input type="text" class="form-control" v-model="UserPassword">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">ClientID</span>
                <input type="text" class="form-control" v-model="ClientID">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Client Secret</span>
                <input type="text" class="form-control" v-model="ClientSecret">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Refresh Token</span>
                <input type="text" class="form-control" v-model="RefreshToken">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">DOJ</span>
                <input type="date" class="form-control" v-model="DateOfJoining">
            </div>

        </div>

    </div>
        <button type="button" @click="createClick()"
        v-if="UserId==0" class="btn btn-primary">
        Create
        </button>
        <button type="button" @click="updateClick()"
        v-if="UserId!=0" class="btn btn-primary">
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
        user:[],
        modalTitle:"",
        UserId:0,
        Username:"",
        UserUsername:"",
        UserPassword:"",
        ClientID:"",
        ClientSecret:"",
        RefreshToken:"",
        DateOfJoining:""
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"user")
        .then((response)=>{
            this.user=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add User";
        this.UserId=0;
        this.Username="";
        this.UserUsername="";
        this.UserPassword="";
        this.ClientID="";
        this.ClientSecret="";
        this.RefreshToken="";
        this.DateOfJoining="";
    },
    editClick(use){
        this.modalTitle="Edit User";
        this.UserId=use.UserId;
        this.Username=use.Username;
        this.UserUsername=use.UserUsername;
        this.UserPassword=use.UserPassword;
        this.ClientID=use.ClientID;
        this.ClientSecret=use.ClientSecret;
        this.RefreshToken=use.RefreshToken;
        this.DateOfJoining=use.DateOfJoining
    },
    createClick(){
        axios.post(variables.API_URL+"user",{
            UserId:this.UserId,
            Username:this.Username,
            UserUsername:this.UserUsername,
            UserPassword:this.UserPassword,
            ClientID:this.ClientID,
            ClientSecret:this.ClientSecret,
            RefreshToken:this.RefreshToken,
            DateOfJoining:this.DateOfJoining
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL+"user",{
            UserId:this.UserId,
            Username:this.Username,
            UserUsername:this.UserUsername,
            UserPassword:this.UserPassword,
            ClientID:this.ClientID,
            ClientSecret:this.ClientSecret,
            RefreshToken:this.RefreshToken,
            DateOfJoining:this.DateOfJoining
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
        axios.delete(variables.API_URL+"user/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    }
},
mounted:function(){
    this.refreshData();
}

}