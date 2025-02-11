


export const tasksReducer=(tasks, action)=>{
  if(action.type==='added'){
   return [
    ...tasks,
    {
     id:tasks.length+5,
     text:action.text,
     done:false
    }
   ]
  }
  else if(action.type==='change'){
   return tasks.map((t)=>t.id===action.task.id ? action.task : t)
  }
  else if(action.type ==='deleted'){
   return tasks.filter((t)=>t.id!==action.id)
  }else {
   throw Error('Unknown action: ' + action.type);
 }
}