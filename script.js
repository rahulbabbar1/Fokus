var a=window.location.toString();
chrome.storage.sync.get('myArray', function(data) {
      for (var i=0;i<data.myArray.length;i++)
      {
      if(a==(data.myArray[i])[0])
      {
         var d=new Date();
        var dateOne = new Date(d.getFullYear(), d.getMonth(),d.getDate(),d.getHours(),d.getMinutes(),0);
        var dateTwo= new Date((data.myArray[i])[3],(data.myArray[i])[4],(data.myArray[i])[5],(data.myArray[i])[6],(data.myArray[i])[7],0);
        alert(dateTwo);
        alert(dateOne);
        var dateThree= new Date(2020,1,1,1,1,0);
        if(dateOne<dateTwo)
        {
        	alert((data.myArray[i])[3]+" "+(data.myArray[i])[4]+" "+(data.myArray[i])[5]+" "+(data.myArray[i])[6]+" "+(data.myArray[i])[7],0);
        	if(dateTwo!=dateThree)
            chrome.runtime.sendMessage({redirect: "https://mdg.sdslabs.co/"});
        break;
        }
      }
     }
     });