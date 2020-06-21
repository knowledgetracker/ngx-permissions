# NgxPermission

#### Install
```
npm i @nareshkumarh/ngx-permissions
```

#### Add Module
* PermissionsModule

#### Example
```
<button [ngxPermissionsOnly]="['USER','TRAINER']">Create Course</button>
<br/>
<br/>
<button ngxPermissionsOnly="USER">View Course</button>
```
