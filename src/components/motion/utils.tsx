export const NavVariants: any = {
    hidden: {
        opacity: 0,
        y: -10,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 140,
        }
    }
    ,
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 60,
            // damping: 140,
            delay: 0.5
        }
    }
}

export const TextVariant: (delay: number) => any = (delay) => ({
    hidden: {
        y: 50,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring   ",
            duration: 1.25,
            delay

        }
    }
})

type slide = (direction: string, type: string, duration: number, delay: number) => any
export const SlideIn: slide = (direction, type, duration, delay) => {
    return {
        hidden: {
            x: direction === "left" ? "500%" : direction === "right" ? "500%" : 0,
            y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type: type,
                duration: duration,
                delay: delay,
                ease: "easeOut"
            }
        }

    }
}

type FadeIn = (direction: string, type: string, duration: number, delay: number) => any
export const FadeIn: slide = (direction, type, duration, delay) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? "-100%" : 0,
            y: direction === "up" ? 100 : direction === "down" ? "-100%" : 0,
            opacity: 0
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                duration: duration,
                delay: delay,
                ease: "easeOut"
            }
        }

    }
}

export const zoomIn =(delay:number,duration:number,scale:number=1)=>{
       
   return { 
    hidden:{
        scale:0,
        opacity:0
    },
    show:{
        scale,
        opacity:1,
        transition:{
            type:"tween",
            duration,
            delay,
            ease:"easeOut"
        }
    } }

}
export const SlideIn2: slide = (direction, type, duration, delay) => {
    return {
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
            opacity:0
        },
        show: {
            x: 0,
            y: 0,
            opacity:1,
            transition: {
                type: type,
                duration: duration,
                delay: delay,
                ease: "easeOut"
            }
        }

    }
}

export const SlideOut:slide=(direction, type, duration, delay) => {
    return {
        hidden:{
            x:0,
            y:0,
            opacity:1
        },
        show:{
            x:direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y:direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
            opacity:0,
            transition:{
                type:type,
                duration:duration,
                delay:delay,
                ease:"easeOut"
            }
        }
    }}