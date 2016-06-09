
module.exports = {
    // https://github.com/AlexeySokolov/atom-smart-template

    name: "Three.js template",

    directory: false,

    params: ["Name"],
    // params: function(){
    //     var projectName = "Name";
    //     return projectName;
    // },

    rules: function(config) {

      return({
        items: [
          //index files
          { destinationFile: "index.html", sourceTemplateFile: "index.template"},
          { destinationFile: "_scripts/main.js", sourceTemplateFile: "_scripts/mainjs.template"},

          //css
          { destinationFile: "_style/main.css", sourceTemplateFile: "_style/maincss.template"},

          //threejs files
          { destinationFile: "_scripts/THREE/mainThree.js", sourceTemplateFile: "_scripts/THREE/mainThreejs.template"},
          { destinationFile: "_scripts/THREE/OrbitControls.js", sourceTemplateFile: "_scripts/THREE/OrbitControlsjs.template"},
          { destinationFile: "_scripts/THREE/_utilities/materialHelper.js", sourceTemplateFile: "_scripts/THREE/_utilities/materialHelperjs.template"},
          { destinationFile: "_scripts/THREE/_utilities/helperFuntions.js", sourceTemplateFile: "_scripts/THREE/_utilities/helperFunctionsjs.template"},

          //misc files
          { destinationFile: ".gitignore", sourceTemplateFile: "gitignore.template"},
          { destinationFile: "_images/improviz-header.jpg", sourceContentFile: "_images/improviz-header.jpg"} //CONTENT

        ]
      });

    }

}
