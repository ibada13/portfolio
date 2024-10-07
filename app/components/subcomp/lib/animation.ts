
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export const ColorAnimation = (elm: string, from: string ,to:string, trigger: string, start: string, end: string, endtrigger?: string) => {
    gsap.set(elm, {scale:.5, color: from });
    gsap.to(elm, {
        scrollTrigger: {
            trigger:trigger,
            start: start, 
            endTrigger:endtrigger,
            end: end,
            scrub: true,
        },
        color: to, 
        scale:1,
        
    })
 }

export const moveYAnimation = (elm: string, from: number,trigger:string ,start:string , end :string, endtrigger?:string ) => {
    gsap.set(elm, { y: from, scale: 0, opacity: 0 ,})
    gsap.to(elm, {
        scrollTrigger: {
            
            trigger: trigger,
            start: start, 
            endTrigger:endtrigger,
            end: end,
            toggleActions:"restart reverse restart reverse "
            
        },
        y: 0,
        scale: 1,
        opacity:1,
    })

}
export const moveXAnimation = (elm: string, from: number,trigger:string ,start:string , end:string, endtrigger?:string ) => { 
    
    gsap.set(elm, {x: 300,scale:0,color:"#00000"})
    gsap.to(elm, {
        scrollTrigger: {
            
            trigger: trigger,
            endTrigger:endtrigger ,
            start: start, 
            end: end, 
            toggleActions:"restart reverse restart reverse "
        },
        x: 0,
        scale: 1,
        color:"#00ff00"
        
    });

}
export const scaleAnimation = (elm: string, from: number,trigger:string ,start:string , end:string, endtrigger?:string ) => { 
    gsap.set(elm, {scale:from})
    gsap.to(elm, {
        scrollTrigger: {
            trigger: trigger,
            
          
            start: start,
            endTrigger: endtrigger, 
            
            end:end,
            scrub: true,
        },
        opacity: 1,
        duration: 2,
        scale: 1,
    })
}


export const StickAnimtion = (elm:string ,trigger:string) => { 
    // gsap.set(elm, { position: "fixed" , top:0 ,left:0 });
    ScrollTrigger.create({
        trigger: trigger,
        start:"top bottom",
        end:"bottom top",
        pin: elm,
        pinSpacing:false,
    })

}