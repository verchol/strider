define({ "api": [  {    "type": "post",    "url": "/email",    "title": "Change Email",    "description": "<p>Changes the email address for the <em>active</em> user (the API user).</p>",    "name": "ChangeEmail",    "group": "Account",    "version": "1.0.0",    "parameter": {      "fields": {        "Request Body Parameters": [          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>The new email address. This must be a VALID email address.</p>"          }        ]      }    },    "filename": "lib/routes/api/account.js",    "groupTitle": "Account"  },  {    "type": "post",    "url": "/password",    "title": "Change Password",    "description": "<p>Changes the password for the <em>active</em> user (the API user).</p>",    "name": "ChangePassword",    "group": "Account",    "version": "1.0.0",    "parameter": {      "fields": {        "Request Body Parameters": [          {            "group": "RequestBody",            "type": "String",            "size": "6..",            "optional": false,            "field": "password",            "description": "<p>The new password, which must be at least 6 characters long.</p>"          }        ]      }    },    "filename": "lib/routes/api/account.js",    "groupTitle": "Account"  },  {    "type": "delete",    "url": "/:provider/:id",    "title": "Delete Provider Account",    "description": "<p>Deletes a provider account for the <em>active</em> user (the API user).</p>",    "name": "DeleteAccount",    "group": "Account",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "provider",            "description": "<p>Type of provider, e.g. github</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Unique provider identification</p>"          }        ]      }    },    "filename": "lib/routes/api/account.js",    "groupTitle": "Account"  },  {    "type": "put",    "url": "/:provider/:id",    "title": "Update Provider Account",    "description": "<p>Updates a provider account for the <em>active</em> user (the API user).</p>",    "name": "UpdateAccount",    "group": "Account",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "provider",            "description": "<p>Type of provider, e.g. github</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Unique provider identification</p>"          }        ]      }    },    "filename": "lib/routes/api/account.js",    "groupTitle": "Account"  },  {    "type": "get",    "url": "/admin/users",    "title": "Get All Users",    "permission": [      {        "name": "GlobalAdmin",        "title": "You must have admin privileges in Strider (globally) in order to use this endpoint.",        "description": ""      }    ],    "description": "<p>Retrieves a list of all Strider users.</p>",    "name": "GetUsers",    "group": "Admin",    "version": "1.0.0",    "examples": [      {        "title": "CURL Example:",        "content": "curl -X GET http://localhost/admin/users",        "type": "curl"      }    ],    "filename": "lib/routes/api/admin/index.js",    "groupTitle": "Admin"  },  {    "type": "post",    "url": "/invite/revoke",    "title": "Revoke Invite",    "permission": [      {        "name": "GlobalAdmin",        "title": "You must have admin privileges in Strider (globally) in order to use this endpoint.",        "description": ""      }    ],    "description": "<p>Revokes a previously sent Strider invitation.</p>",    "name": "RevokeInvite",    "group": "Admin",    "version": "1.0.0",    "examples": [      {        "title": "CURL Example:",        "content": "curl -X POST -d invite_code=xoxox http://localhost/invite/revoke",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Request Body Parameters": [          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "invite_code",            "description": "<p>The invite code/token of the invite being revoked.</p>"          }        ]      }    },    "filename": "lib/routes/api/admin/index.js",    "groupTitle": "Admin"  },  {    "type": "post",    "url": "/invite/new",    "title": "Send Invite",    "permission": [      {        "name": "GlobalAdmin",        "title": "You must have admin privileges in Strider (globally) in order to use this endpoint.",        "description": ""      }    ],    "description": "<p>Create &amp; email a new Strider invite.</p>",    "name": "SendInvite",    "group": "Admin",    "version": "1.0.0",    "examples": [      {        "title": "CURL Example:",        "content": "curl -X POST -d invite_code=xoxox -d email=new_guy@strider-cd.com http://localhost/invite/new",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Request Body Parameters": [          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "invite_code",            "description": "<p>The invite code/token to use in the invitation</p>"          },          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>The email address of the new user being invited</p>"          }        ]      }    },    "filename": "lib/routes/api/admin/index.js",    "groupTitle": "Admin"  },  {    "type": "post",    "url": "/:org/:repo/branches",    "title": "Add Branch",    "permission": [      {        "name": "ProjectAdmin",        "title": "You must have admin privileges on the corresponding RepoConfig to be able to use this endpoint.",        "description": ""      }    ],    "description": "<p>Add a new branch for a project.</p>",    "name": "AddBranch",    "group": "Branch",    "version": "1.0.0",    "examples": [      {        "title": "CURL Example:",        "content": "curl -X POST -d name=newbranch http://localhost/api/strider/strider-cd/branches",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Request Body Parameters": [          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>The name of the new branch</p>"          },          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "cloneName",            "description": "<p>The name of the cloned branch</p>"          }        ],        "Request URL Parameters": [          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "org",            "description": "<p>The organization name for the project.  This is usually a GitHub user or organization name (e.g. &quot;strider&quot; in &quot;strider/strider-cd&quot;) but may vary from one project provider to another. (as another example, in GitLab this refers to the repository's &quot;group&quot;).</p>"          },          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "repo",            "description": "<p>The project's repository name.</p>"          }        ]      }    },    "filename": "lib/routes/api/branches.js",    "groupTitle": "Branch"  },  {    "type": "delete",    "url": "/:org/:repo/branches",    "title": "Delete Branch",    "permission": [      {        "name": "ProjectAdmin",        "title": "You must have admin privileges on the corresponding RepoConfig to be able to use this endpoint.",        "description": ""      }    ],    "description": "<p>Deletes a branch from a project</p>",    "name": "DeleteBranch",    "group": "Branch",    "version": "1.0.0",    "examples": [      {        "title": "CURL Example:",        "content": "curl -X DELETE -d name=mybranch http://localhost/api/strider/strider-cd/branches",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Request Body Parameters": [          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>The name of the branch to delete</p>"          }        ],        "Request URL Parameters": [          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "org",            "description": "<p>The organization name for the project.  This is usually a GitHub user or organization name (e.g. &quot;strider&quot; in &quot;strider/strider-cd&quot;) but may vary from one project provider to another. (as another example, in GitLab this refers to the repository's &quot;group&quot;).</p>"          },          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "repo",            "description": "<p>The project's repository name.</p>"          }        ]      }    },    "filename": "lib/routes/api/branches.js",    "groupTitle": "Branch"  },  {    "type": "put",    "url": "/:org/:repo/branches",    "title": "Reorder Branches",    "permission": [      {        "name": "ProjectAdmin",        "title": "You must have admin privileges on the corresponding RepoConfig to be able to use this endpoint.",        "description": ""      }    ],    "description": "<p>Updates the branch order for a project.</p>",    "name": "ReorderBranches",    "group": "Branch",    "version": "1.0.0",    "examples": [      {        "title": "CURL Example:",        "content": "curl -X PUT -d branches=master,testing http://localhost/api/strider/strider-cd/branches",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Request Body Parameters": [          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "branches",            "description": "<p>The new branch order, comma delimited</p>"          }        ],        "Request URL Parameters": [          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "org",            "description": "<p>The organization name for the project.  This is usually a GitHub user or organization name (e.g. &quot;strider&quot; in &quot;strider/strider-cd&quot;) but may vary from one project provider to another. (as another example, in GitLab this refers to the repository's &quot;group&quot;).</p>"          },          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "repo",            "description": "<p>The project's repository name.</p>"          }        ]      }    },    "filename": "lib/routes/api/branches.js",    "groupTitle": "Branch"  },  {    "type": "post",    "url": "/:org/:repo/collaborators",    "title": "Add Collaborator",    "permission": [      {        "name": "ProjectAdmin",        "title": "You must have admin privileges on the corresponding RepoConfig to be able to use this endpoint.",        "description": ""      }    ],    "description": "<p>Add a new collaborator to a repository/project.</p>",    "name": "AddCollaborator",    "group": "Collaborators",    "version": "1.0.0",    "examples": [      {        "title": "CURL Example:",        "content": "curl -X GET http://localhost/api/strider/strider-cd/collaborators?email=new_guy@strider-cd.com&access_level=2",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Request Body Parameters": [          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Email address to add. If the user is not registered with Strider, we will send them an invite. If they are already registered, they will receive a notification of access.</p>"          },          {            "group": "RequestBody",            "type": "Number",            "optional": false,            "field": "access_level",            "defaultValue": "0",            "description": "<p>Access level to grant to the new collaborator.  This can be <code>0</code>, for read only access, or <code>2</code> for admin access.</p>"          }        ],        "Request URL Parameters": [          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "org",            "description": "<p>The organization name for the project.  This is usually a GitHub user or organization name (e.g. &quot;strider&quot; in &quot;strider/strider-cd&quot;) but may vary from one project provider to another. (as another example, in GitLab this refers to the repository's &quot;group&quot;).</p>"          },          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "repo",            "description": "<p>The project's repository name.</p>"          }        ]      }    },    "filename": "lib/routes/collaborators/index.js",    "groupTitle": "Collaborators"  },  {    "type": "delete",    "url": "/:org/:repo/collaborators",    "title": "Delete Collaborator",    "permission": [      {        "name": "ProjectAdmin",        "title": "You must have admin privileges on the corresponding RepoConfig to be able to use this endpoint.",        "description": ""      }    ],    "description": "<p>Remove a collaborator from a repository/project.</p>",    "name": "DeleteCollaborator",    "group": "Collaborators",    "version": "1.0.0",    "examples": [      {        "title": "CURL Example:",        "content": "curl -X DELETE -d email=old_guy@strider-cd.com http://localhost/api/strider/strider-cd/collaborators",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Request Body Parameters": [          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Email address to remove from the repo/project.</p>"          }        ],        "Request URL Parameters": [          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "org",            "description": "<p>The organization name for the project.  This is usually a GitHub user or organization name (e.g. &quot;strider&quot; in &quot;strider/strider-cd&quot;) but may vary from one project provider to another. (as another example, in GitLab this refers to the repository's &quot;group&quot;).</p>"          },          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "repo",            "description": "<p>The project's repository name.</p>"          }        ]      }    },    "filename": "lib/routes/collaborators/index.js",    "groupTitle": "Collaborators"  },  {    "type": "get",    "url": "/:org/:repo/collaborators",    "title": "Get Collaborators",    "description": "<p>Gets a list of collaborators for a project</p>",    "name": "GetCollaborators",    "group": "Collaborators",    "version": "1.0.0",    "examples": [      {        "title": "CURL Example:",        "content": "curl -X GET http://localhost/api/strider/strider-cd/collaborators",        "type": "curl"      }    ],    "filename": "lib/routes/collaborators/index.js",    "groupTitle": "Collaborators",    "parameter": {      "fields": {        "Request URL Parameters": [          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "org",            "description": "<p>The organization name for the project.  This is usually a GitHub user or organization name (e.g. &quot;strider&quot; in &quot;strider/strider-cd&quot;) but may vary from one project provider to another. (as another example, in GitLab this refers to the repository's &quot;group&quot;).</p>"          },          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "repo",            "description": "<p>The project's repository name.</p>"          }        ]      }    }  },  {    "type": "get",    "url": "/api/jobs",    "title": "Get Latest Jobs",    "description": "<p>Return JSON object containing the most recent build status for each configured repo This function is used to build the main dashboard status page. The result is separated into <code>{public: [], yours: []}</code>.</p> <p>Note: the private ones are just ones that the current user is a collaborator on and are not necessarily private</p>",    "name": "GetJobs",    "group": "Job",    "version": "1.0.0",    "examples": [      {        "title": "CURL Example:",        "content": "curl -X GET http://localhost/api/jobs",        "type": "curl"      }    ],    "filename": "lib/routes/api/jobs.js",    "groupTitle": "Job"  },  {    "type": "post",    "url": "/:org/:repo/start",    "title": "Start Job",    "description": "<p>Executes a strider test and, optionally, deployment.</p>",    "name": "StartJob",    "group": "Job",    "version": "1.0.0",    "examples": [      {        "title": "CURL Example:",        "content": "curl -X POST http://localhost/api/strider/strider-cd/start",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Request Body Parameters": [          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "type",            "defaultValue": "TEST_ONLY",            "description": "<p>Denotes the type of job to run. This can be &quot;TEST_ONLY&quot;, which indicates that only the test stages of the job should be executed or &quot;TEST_AND_DEPLOY&quot;, which indicates that all stages should be executed.</p>"          },          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "branch",            "defaultValue": "master",            "description": "<p>Indicates which branch configuration should be executed.</p>"          },          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "message",            "defaultValue": "Manually Retesting/Redeploying",            "description": "<p>An optional message to include as the title of the execution.</p>"          }        ],        "Request URL Parameters": [          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "org",            "description": "<p>The organization name for the project.  This is usually a GitHub user or organization name (e.g. &quot;strider&quot; in &quot;strider/strider-cd&quot;) but may vary from one project provider to another. (as another example, in GitLab this refers to the repository's &quot;group&quot;).</p>"          },          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "repo",            "description": "<p>The project's repository name.</p>"          }        ]      }    },    "filename": "lib/routes/api/jobs.js",    "groupTitle": "Job"  },  {    "type": "get",    "url": "/:org/:repo/provider",    "title": "Get Project Provider",    "description": "<p>Get the provider config for the specified project</p>",    "name": "GetProjectProvider",    "group": "ProjectProvider",    "version": "1.0.0",    "examples": [      {        "title": "CURL Example:",        "content": "curl -X GET http://localhost:3000/strider/strider-cd/provider",        "type": "curl"      }    ],    "filename": "lib/routes/provider.js",    "groupTitle": "ProjectProvider",    "parameter": {      "fields": {        "Request URL Parameters": [          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "org",            "description": "<p>The organization name for the project.  This is usually a GitHub user or organization name (e.g. &quot;strider&quot; in &quot;strider/strider-cd&quot;) but may vary from one project provider to another. (as another example, in GitLab this refers to the repository's &quot;group&quot;).</p>"          },          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "repo",            "description": "<p>The project's repository name.</p>"          }        ]      }    }  },  {    "type": "post",    "url": "/:org/:repo/provider",    "title": "Update Project Provider",    "description": "<p>Update a project's provider</p>",    "name": "UpdateProjectProvider",    "group": "ProjectProvider",    "version": "1.0.0",    "examples": [      {        "title": "CURL Example:",        "content": "curl -X POST http://localhost:3000/strider/strider-cd/provider",        "type": "curl"      }    ],    "filename": "lib/routes/provider.js",    "groupTitle": "ProjectProvider",    "parameter": {      "fields": {        "Request URL Parameters": [          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "org",            "description": "<p>The organization name for the project.  This is usually a GitHub user or organization name (e.g. &quot;strider&quot; in &quot;strider/strider-cd&quot;) but may vary from one project provider to another. (as another example, in GitLab this refers to the repository's &quot;group&quot;).</p>"          },          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "repo",            "description": "<p>The project's repository name.</p>"          }        ]      }    }  },  {    "type": "delete",    "url": "/:org/:repo/cache",    "title": "Clear Cache",    "permission": [      {        "name": "ProjectAdmin",        "title": "You must have admin privileges on the corresponding RepoConfig to be able to use this endpoint.",        "description": ""      }    ],    "description": "<p>Clears/invalidates the cache for a project.</p>",    "name": "ClearCache",    "group": "Repo",    "version": "1.0.0",    "examples": [      {        "title": "CURL Example:",        "content": "curl -X DELETE http://localhost/api/strider/strider-cd/cache",        "type": "curl"      }    ],    "filename": "lib/routes/api/repo.js",    "groupTitle": "Repo",    "parameter": {      "fields": {        "Request URL Parameters": [          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "org",            "description": "<p>The organization name for the project.  This is usually a GitHub user or organization name (e.g. &quot;strider&quot; in &quot;strider/strider-cd&quot;) but may vary from one project provider to another. (as another example, in GitLab this refers to the repository's &quot;group&quot;).</p>"          },          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "repo",            "description": "<p>The project's repository name.</p>"          }        ]      }    }  },  {    "type": "put",    "url": "/:org",    "title": "Create Repo",    "description": "<p>Create a new project for a repo.</p>",    "name": "CreateRepo",    "group": "Repo",    "version": "1.0.0",    "parameter": {      "fields": {        "Request Body Parameters": [          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>The name of the new branch</p>"          },          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "display_name",            "description": "<p>Human-readable project name</p>"          },          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "display_url",            "description": "<p>The URL for the repo (e.g. Github homepage)</p>"          },          {            "group": "RequestBody",            "type": "Boolean",            "optional": false,            "field": "public",            "defaultValue": "false",            "description": "<p>Whether this project is public or not.</p>"          },          {            "group": "RequestBody",            "type": "Boolean",            "optional": false,            "field": "prefetch_config",            "defaultValue": "true",            "description": "<p>Whether the strider.json should be fetched in advance.</p>"          },          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "account",            "description": "<p>The ID of provider account</p>"          },          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "repo_id",            "description": "<p>The ID of the repo</p>"          },          {            "group": "RequestBody",            "type": "Object",            "optional": false,            "field": "provider",            "description": "<p>A json object with 'id' and 'config' properties.</p>"          }        ]      }    },    "filename": "lib/routes/api/repo.js",    "groupTitle": "Repo"  },  {    "type": "delete",    "url": "/:org/:repo",    "title": "Delete Repo",    "permission": [      {        "name": "ProjectAdmin",        "title": "You must have admin privileges on the corresponding RepoConfig to be able to use this endpoint.",        "description": ""      }    ],    "description": "<p>Deletes a repository/project. Also archives all jobs (marks as archived in DB which makes them hidden).</p>",    "name": "DeleteRepo",    "group": "Repo",    "version": "1.0.0",    "examples": [      {        "title": "CURL Example:",        "content": "curl -X DELETE http://localhost/api/strider/strider-cd",        "type": "curl"      }    ],    "filename": "lib/routes/api/repo.js",    "groupTitle": "Repo",    "parameter": {      "fields": {        "Request URL Parameters": [          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "org",            "description": "<p>The organization name for the project.  This is usually a GitHub user or organization name (e.g. &quot;strider&quot; in &quot;strider/strider-cd&quot;) but may vary from one project provider to another. (as another example, in GitLab this refers to the repository's &quot;group&quot;).</p>"          },          {            "group": "RequestUrl",            "type": "String",            "optional": false,            "field": "repo",            "description": "<p>The project's repository name.</p>"          }        ]      }    }  },  {    "type": "post",    "url": "/api/session",    "title": "Create New Session",    "description": "<p>Creates a new user session after validating an email address and password pair.</p>",    "name": "CreateSession",    "group": "Session",    "version": "1.0.0",    "examples": [      {        "title": "CURL Example:",        "content": "curl -X POST -d email=me@me.com -d password=mypass http://localhost/api/session",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Request Body Parameters": [          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>The email address to login as (which is used as the username).</p>"          },          {            "group": "RequestBody",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>The user's password.</p>"          }        ]      }    },    "filename": "lib/routes/api/session.js",    "groupTitle": "Session"  },  {    "type": "get",    "url": "/api/session",    "title": "Get Session",    "description": "<p>Gets the current session information</p>",    "name": "GetSession",    "group": "Session",    "version": "1.0.0",    "examples": [      {        "title": "CURL Example:",        "content": "curl -X GET http://localhost/api/session",        "type": "curl"      }    ],    "filename": "lib/routes/api/session.js",    "groupTitle": "Session"  }] });
