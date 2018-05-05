# java-learning-space
basic java for nodejs and angularjs development

## installation
### nodejs install (download LTS version)
   
    http://nodejs.org
    
   *set path env in installtion path
   *check installation with node -v

### angular install (download with npm command)
    
    npm install -g @angularcli
    
   *check installation with npm -v

## how to install with npm module
### local type (goto project folder)

    npm install <npm_module_name>

   *npm_module_name is sub-folder of project folder

### global type 

    npm install -g <npm_module_name>

   *default in linux usr/local/bin/node_modules
   *default in window C:\Users\%username%\AppData\Roaming\npm\node_modules

### specify version of module
    
    npm install <npm_module_name>@4.13.10

   *4 <-major 13 <-minor 10 <-patch

## how to uninstall with npm module
### local type (goto project folder)

    npm uninstall <npm_module_name>

### global type 

    npm uninstall -g <npm_module_name>

## how to update with npm module
### local type (goto project folder)

    npm update <npm_module_name>

### global type 

    npm update -g <npm_module_name>

## create dependency (package.json) (create in root of project)
### manual type

    {
        "name" : "NODE",
        "version" : "1.0.0",
        "dependencies" : {
            "express" : "^4.13.10",
            "conenct" : "latest"
        }
    }

### auto-create type (initalize package.json)
    
    npm init

### update package.json when install moudle with npm

    npm install <npm_module_name> --save

   *warning version of moule it's have prefix '^' before version of module
   *'^' is mean patch and bug fix last version only, not change major version