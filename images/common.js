   
   function IsValidEmail(address)
	{
		var xValidEmail = true;
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		
		if(reg.test(address) == false)
		{
			xValidEmail = false;	
		}
		else
		{
			xValidEmail = true;	
		}
		return xValidEmail;
	}
	function trim(str) 
	{    
		if (str != null) 
		{        
			var i;        
			for (i=0; i<str.length; i++) 
			{           
				if (str.charAt(i)!=" ") 
				{               
					str=str.substring(i,str.length);                 
					break;            
				}        
			}            
			for (i=str.length-1; i>=0; i--)
			{            
				if (str.charAt(i)!=" ") 
				{                
					str=str.substring(0,i+1);                
					break;            
				}         
			}                 
			if (str.charAt(0)==" ") 
			{            
				return "";         
			} 
			else 
			{            
				return str;         
			}    
		}
	}
	
	function redirectpage(pageurl)
	{
		location=pageurl;	
	}
	
	function validPictureFile(strfile)
	{
			
			var str = strfile;
			var pathLenth = strfile.length;
			var start = (str.lastIndexOf("."));
			var fileType = str.slice(start,pathLenth);
			fileType = fileType.toLowerCase();
			if (strfile.length > 0)
			{
				if((fileType == ".gif") || (fileType == ".jpg") || (fileType == ".jpeg") || (fileType == ".png") || (fileType == ".bmp") || (fileType == ".GIF") || (fileType == ".JPG") || (fileType == ".JPEG") || (fileType == ".PNG") || (fileType == ".BMP")) 
				{
					return true;
				}
				else 
				{
					return false;
				} 
			}
	}
	function validImageFile(strfile)
	{
			
			var str = strfile;
			var pathLenth = strfile.length;
			var start = (str.lastIndexOf("."));
			var fileType = str.slice(start,pathLenth);
			fileType = fileType.toLowerCase();
			if (strfile.length > 0)
			{
				if((fileType == ".gif") || (fileType == ".jpg") || (fileType == ".jpeg") || (fileType == ".png") || (fileType == ".bmp") || (fileType == ".GIF") || (fileType == ".JPG") || (fileType == ".JPEG") || (fileType == ".PNG") || (fileType == ".BMP") || (fileType == ".txt") || (fileType == ".TXT") || (fileType == ".pdf") || (fileType == ".PDF") || (fileType == ".doc") || (fileType == ".DOC") || (fileType == ".docx") || (fileType == ".DOCX") || (fileType == ".ppt") || (fileType == ".PPT") || (fileType == ".pptx") || (fileType == ".PPTX")) 
				{
					return true;
				}
				else 
				{
					return false;
				} 
			}
	}
	function fbs_click(url) 
	{
		u=location.href;t=document.title;window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;
	}
	

var xmlHttp;
function ajaxFunction()
{
try
  {
  // Firefox, Opera 8.0+, Safari
  xmlHttp=new XMLHttpRequest();
  }
catch (e)
  {
  // Internet Explorer
  try
    {
    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
    }
  catch (e)
    {
    try
      {
      xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    catch (e)
      {
      alert("Your browser does not support AJAX!");
      return false;
      }
    }
  }
}


