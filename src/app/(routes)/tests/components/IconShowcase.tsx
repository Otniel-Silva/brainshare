
import { ArrowPathMini, ArrowPathOutline, ArrowPathSolid } from "components/icon/arrowPath"
import { ArrowRightRectangleMini, ArrowRightRectangleOutline, ArrowRightRectangleSolid } from "components/icon/arrowRightRectangle"
import { BarsFourMini, BarsFourOutline, BarsFourSolid } from "components/icon/barsFour"
import { CogMini, CogOutline, CogSolid } from "components/icon/Cog"

export default function IconShowcase() {
    return (
        <div className="flex flex-col gap-3">
            <div>
                <span className="headline-xs-semibold text-neutral-800">Icons</span>
            </div>

            <div className="flex flex-wrap gap-10">
                {/* A  */}
                <div className="flex flex-col gap-2.5 p-2 border border-dashed border-gray-300 rounded-md">
                    <span className="text-xl-medium text-neutral-200">A</span>

                    {/* ARROW-PATH  */}
                    <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <ArrowPathMini color="fill-primary-600"/>

                        <ArrowPathOutline color="stroke-primary-600"/>

                        <ArrowPathSolid color="fill-primary-600"/>
                    </div>

                    {/* ARROW-RIGHT-RECTANGLE  */}
                    <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <ArrowRightRectangleMini color="fill-primary-600"/>

                        <ArrowRightRectangleOutline color="stroke-primary-600"/>

                        <ArrowRightRectangleSolid color="fill-primary-600"/>
                    </div>
                </div>

                {/* B  */}
                <div className="flex flex-col gap-2.5 p-2 border border-dashed border-gray-300 rounded-md">
                    <span className="text-xl-medium text-neutral-200">B</span>

                    {/* BARS-FOUR  */}
                    <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <BarsFourMini color="fill-primary-600"/>

                        <BarsFourOutline color="stroke-primary-600"/>

                        <BarsFourSolid color="fill-primary-600"/>
                    </div>

                    {/* BARS-THREE-BOTTOM-LEFT  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <bars-three-bl-mini color="fill-primary-600"/>

                        <bars-three-bl-outline color="stroke-primary-600"/>

                        <bars-three-bl-solid color="fill-primary-600"/>
                    </div> */}

                    {/* BARS-THREE  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <bars-three-mini color="fill-primary-600"/>

                        <bars-three-outline color="stroke-primary-600"/>

                        <bars-three-solid color="fill-primary-600"/>
                    </div> */}

                    {/* BEAKER  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <beaker-mini color="fill-primary-600"/>

                        <beaker-outline color="stroke-primary-600"/>

                        <beaker-solid color="fill-primary-600"/>
                    </div> */}

                    {/* BELL  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <bell-mini color="fill-primary-600"/>

                        <bell-outline color="stroke-primary-600"/>

                        <bell-solid color="fill-primary-600"/>
                    </div> */}

                    {/* BELL ALERT  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <bell-alert-mini color="fill-primary-600"/>

                        <bell-alert-outline color="stroke-primary-600"/>

                        <bell-alert-solid color="fill-primary-600"/>
                    </div> */}

                    {/* BELL SLASH  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <bell-slash-mini color="fill-primary-600"/>

                        <bell-slash-outline color="stroke-primary-600"/>

                        <bell-slash-solid color="fill-primary-600"/>
                    </div> */}

                    {/* BRIEFCASE  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <briefcase-mini color="fill-primary-600"/>

                        <briefcase-outline color="stroke-primary-600"/>

                        <briefcase-solid color="fill-primary-600"/>
                    </div> */}
                </div>

                {/* C  */}
                <div className="flex flex-col gap-2.5 p-2 border border-dashed border-gray-300 rounded-md">
                    <span className="text-xl-medium text-neutral-200">C</span>

                    {/* CHECK-CIRCLE  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <check-circle-mini color="fill-primary-600"/>

                        <check-circle-outline color="stroke-primary-600"/>

                        <check-circle-solid color="fill-primary-600"/>
                    </div> */}

                    {/* CHEVRON  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <chevron-mini color="fill-primary-600"/>

                        <chevron-outline color="stroke-primary-600"/>

                        <chevron-solid color="fill-primary-600"/>
                    </div> */}

                    {/* CLIPBOARD-DOCUMENT  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <clipboard-document-mini color="fill-primary-600"/>

                        <clipboard-document-outline color="stroke-primary-600"/>

                        <clipboard-document-solid color="fill-primary-600"/>
                    </div> */}

                    {/* CLIPBOARD-DOCUMENT-CHECK  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <clipboard-document-check-mini color="fill-primary-600"/>

                        <clipboard-document-check-outline color="stroke-primary-600"/>

                        <clipboard-document-check-solid color="fill-primary-600"/>
                    </div> */}

                    {/* CLIPBOARD-DOCUMENT-LIST  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <clipboard-document-list-mini color="fill-primary-600"/>

                        <clipboard-document-list-outline color="stroke-primary-600"/>

                        <clipboard-document-list-solid color="fill-primary-600"/>
                    </div> */}

                    {/* COG  */}
                    <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <CogMini color="fill-primary-600"/>

                        <CogOutline color="stroke-primary-600"/>

                        <CogSolid color="fill-primary-600"/>
                    </div>

                    {/* CUBE  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <cube-mini color="fill-primary-600"/>

                        <cube-outline color="stroke-primary-600"/>

                        <cube-solid color="fill-primary-600"/>
                    </div> */}
                </div>

                {/* E  */}
                <div className="flex flex-col gap-2.5 p-2 border border-dashed border-gray-300 rounded-md">
                    <span className="text-xl-medium text-neutral-200">E</span>

                    {/* ELLIPSIS-VERTICAL  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <ellipsis-vertical-mini color="fill-primary-600"/>

                        <ellipsis-vertical-outline color="stroke-primary-600"/>

                        <ellipsis-vertical-solid color="fill-primary-600"/>
                    </div> */}

                    {/* EXCLAMATION-CIRCLE  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <exclamation-circle-mini color="fill-primary-600"/>

                        <exclamation-circle-outline color="stroke-primary-600"/>

                        <exclamation-circle-solid color="fill-primary-600"/>
                    </div> */}

                    {/* EXCLAMATION-TRIANGLE  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <exclamation-triangle-mini color="fill-primary-600"/>

                        <exclamation-triangle-outline color="stroke-primary-600"/>

                        <exclamation-triangle-solid color="fill-primary-600"/>
                    </div> */}
                </div>

                {/* F  */}
                <div className="flex flex-col gap-2.5 p-2 border border-dashed border-gray-300 rounded-md">
                    <span className="text-xl-medium text-neutral-200">F</span>

                    {/* FLAG  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <flag-mini color="fill-primary-600"/>

                        <flag-outline color="stroke-primary-600"/>

                        <flag-solid color="fill-primary-600"/>
                    </div> */}

                    {/* FOLDER  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <folder-mini color="fill-primary-600"/>

                        <folder-outline color="stroke-primary-600"/>

                        <folder-solid color="fill-primary-600"/>
                    </div> */}
                </div>

                {/* H  */}
                <div className="flex flex-col gap-2.5 p-2 border border-dashed border-gray-300 rounded-md">
                    <span className="text-xl-medium text-neutral-200">H</span>

                    {/* HAND-DOWN  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <hand-down-mini color="fill-primary-600"/>

                        <hand-down-outline color="stroke-primary-600"/>

                        <hand-down-solid color="fill-primary-600"/>
                    </div> */}

                    {/* HAND-UP  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <hand-up-mini color="fill-primary-600"/>

                        <hand-up-outline color="stroke-primary-600"/>

                        <hand-up-solid color="fill-primary-600"/>
                    </div> */}

                    {/* HOME  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <home-mini color="fill-primary-600"/>

                        <home-outline color="stroke-primary-600"/>

                        <home-solid color="fill-primary-600"/>
                    </div> */}
                </div>

                {/* I  */}
                <div className="flex flex-col gap-2.5 p-2 border border-dashed border-gray-300 rounded-md">
                    <span className="text-xl-medium text-neutral-200">I</span>

                    {/* INFO CIRCLE  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <info-circle-mini color="fill-primary-600"/>

                        <info-circle-outline color="stroke-primary-600"/>

                        <info-circle-solid color="fill-primary-600"/>
                    </div> */}
                </div>

                {/* M  */}
                <div className="flex flex-col gap-2.5 p-2 border border-dashed border-gray-300 rounded-md">
                    <span className="text-xl-medium text-neutral-200">M</span>

                    {/* MAGNIFYING GLASS  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <magn-glass-mini color="fill-primary-600"/>

                        <magn-glass-outline color="stroke-primary-600"/>

                        <magn-glass-solid color="fill-primary-600"/>
                    </div> */}

                    {/* MINUS-CIRCLE  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <minus-circle-mini color="fill-primary-600"/>

                        <minus-circle-outline color="stroke-primary-600"/>

                        <minus-circle-solid color="fill-primary-600"/>
                    </div> */}
                </div>

                {/* N  */}
                <div className="flex flex-col gap-2.5 p-2 border border-dashed border-gray-300 rounded-md">
                    <span className="text-xl-medium text-neutral-200">N</span>

                    {/* NO-SYMBOL  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <no-symbol-mini color="fill-primary-600"/>

                        <no-symbol-outline color="stroke-primary-600"/>

                        <no-symbol-solid color="fill-primary-600"/>
                    </div> */}
                </div>

                {/* P  */}
                <div className="flex flex-col gap-2.5 p-2 border border-dashed border-gray-300 rounded-md">
                    <span className="text-xl-medium text-neutral-200">P</span>

                    {/* PENCIL  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <pencil-mini color="fill-primary-600"/>

                        <pencil-outline color="stroke-primary-600"/>

                        <pencil-solid color="fill-primary-600"/>
                    </div> */}

                    {/* PHONE  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <phone-mini color="fill-primary-600"/>

                        <phone-outline color="stroke-primary-600"/>

                        <phone-solid color="fill-primary-600"/>
                    </div> */}

                    {/* PLUS-CIRCLE  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <plus-circle-mini color="fill-primary-600"/>

                        <plus-circle-outline color="stroke-primary-600"/>

                        <plus-circle-solid color="fill-primary-600"/>
                    </div> */}

                    {/* PLUS SMALL  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <plus-small-mini color="fill-primary-600"/>

                        <plus-small-outline color="stroke-primary-600"/>

                        <plus-small-solid color="fill-primary-600"/>
                    </div> */}
                </div>

                {/* R  */}
                <div className="flex flex-col gap-2.5 p-2 border border-dashed border-gray-300 rounded-md">
                    <span className="text-xl-medium text-neutral-200">R</span>

                    {/* RECTANGLE-STACK  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <rectangle-stack-mini color="fill-primary-600"/>

                        <rectangle-stack-outline color="stroke-primary-600"/>

                        <rectangle-stack-solid color="fill-primary-600"/>
                    </div> */}
                </div>

                {/* T  */}
                <div className="flex flex-col gap-2.5 p-2 border border-dashed border-gray-300 rounded-md">
                    <span className="text-xl-medium text-neutral-200">T</span>

                    {/* TAG  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <tag-mini color="fill-primary-600"/>

                        <tag-outline color="stroke-primary-600"/>

                        <tag-solid color="fill-primary-600"/>
                    </div> */}

                    {/* TRASH  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <trash-mini color="fill-primary-600"/>

                        <trash-outline color="stroke-primary-600"/>

                        <trash-solid color="fill-primary-600"/>
                    </div> */}
                </div>

                {/* U  */}
                <div className="flex flex-col gap-2.5 p-2 border border-dashed border-gray-300 rounded-md">
                    <span className="text-xl-medium text-neutral-200">U</span>

                    {/* USER  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <user-mini color="fill-primary-600"/>

                        <user-outline color="stroke-primary-600"/>

                        <user-solid color="fill-primary-600"/>
                    </div> */}

                    {/* USER-GROUP  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <user-group-mini color="fill-primary-600"/>

                        <user-group-outline color="stroke-primary-600"/>

                        <user-group-solid color="fill-primary-600"/>
                    </div> */}

                    {/* USER-MINUS  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <user-minus-mini color="fill-primary-600"/>

                        <user-minus-outline color="stroke-primary-600"/>

                        <user-minus-solid color="fill-primary-600"/>
                    </div> */}

                    {/* USER-PLUS  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <user-plus-mini color="fill-primary-600"/>

                        <user-plus-outline color="stroke-primary-600"/>

                        <user-plus-solid color="fill-primary-600"/>
                    </div> */}
                </div>

                {/* X  */}
                <div className="flex flex-col gap-2.5 p-2 border border-dashed border-gray-300 rounded-md">
                    <span className="text-xl-medium text-neutral-200">X</span>

                    {/* X-MARK  */}
                    {/* <div className="flex items-center w-fit p-1 border border-dashed border-primary-600 gap-5 rounded-md">
                        <x-mark-mini color="fill-primary-600"/>

                        <x-mark-outline color="stroke-primary-600"/>

                        <x-mark-solid color="fill-primary-600"/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}