async function api(action,data={}){
 const r=await fetch(API_URL,{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({action,...data})
 });
 return r.json();
}
