export default function(context) {
  console.log("[Middleware] check referrer")
  if(context.store.getters.getStatus==null){
    context.redirect("/error");
  }
}
