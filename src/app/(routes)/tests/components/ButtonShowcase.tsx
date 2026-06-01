'use client'

import { useState } from "react"
import { Button, Link, Toggle } from "components/ui"
import {CogMini} from "components/icon/Cog"

export default function ButtonShowcase() {
    const [isToggled, setIsToggled] = useState(false);

    return(
        <div className="flex flex-col pt-2.5 border-t border-gray-300 gap-3">
            <div>
                <span className="headline-xs-semibold text-neutral-800">Buttons</span>
            </div>

           {/* Elementary */}
            <div className="flex items-center gap-6">
                {/* COLOR */}
                <Button
                    id="" 
                    name="" 
                    type="submit" 
                    variant="primary" 
                    value="" 
                >
                    <CogMini color="fill-white"/>

                    <span className="text-b-l text-white font-semibold">Button</span>
                    
                    <CogMini color="fill-white"/>
                </Button>

                {/* TEXT */}
                <Button
                    id="" 
                    name="" 
                    type="submit" 
                    className="w-fit group" 
                    variant="text"
                    value="" 
                >
                    <CogMini color="fill-white group-hover:fill-neutral-800"/>

                    <span className="text-b-l text-white font-semibold group-hover:text-neutral-800">Button</span>

                    <CogMini color="fill-white group-hover:fill-neutral-800"/>
                </Button>
            </div>

           {/* Link */}
            <div className="flex items-center gap-6">
                <Link href="#" className="justify-center w-fit px-4.5 py-3 bg-primary-600 rounded-md hover:bg-primary-500 focus:bg-primary-800">
                    <CogMini color="fill-white"/>

                    <span className="text-b-l text-white font-semibold">Link</span>

                    <CogMini color="fill-white"/>
                </Link>
                
                <Link href="#" className="justify-center w-fit group">
                    <CogMini color="fill-white group-hover:fill-neutral-800"/>

                    <span className="text-b-l text-white font-semibold group-hover:text-neutral-800">Link</span>

                    <CogMini color="fill-white group-hover:fill-neutral-800"/>
                </Link>
            </div>

           {/* Toggle */}
            <div className="flex items-center gap-6">
                <Toggle id="toggle" name="toggle" >
                    <span className="text-l-semibold text-neutral-200">Texto de teste</span>
                </Toggle>
                
                <Toggle id="bunc" name="bunc">
                </Toggle>
            </div>
        </div>
    )
}