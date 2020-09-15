console.log("Hello World");

// Node package in browser
axios({
    method:"get",
    url: "data/sampleData.json"
}).then(response=>{
    console.log(response);
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log("All done!")
})