alert("Welcome")
var Base64=prompt("The Base64 Content")
var MIMEType=prompt("The MIME Type")
if(Base64!=null&&MIMEType!=null){
var url="data:"+MIMEType+";base64,"+Base64;
  document.write("<a href='"+url+"'>"+url+"</a>")
  location.href=url
}else{alert("Error!")}
