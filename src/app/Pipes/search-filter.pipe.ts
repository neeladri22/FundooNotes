import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any,args: any) {
    console.log(args)
    if(args=="default message"){
      return value
    }else{
      args=args.toLowerCase();
    }
    return value.filter((note:any)=>{
      return note.title.toLowerCase().includes(args) | note.description.toLowerCase().includes(args);
    })
  }

 

}
