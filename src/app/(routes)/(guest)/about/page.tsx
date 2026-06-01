

export default function About() {
    return (
        <div>
            {/* HEADER */}
            <div className="flex w-full px-20 pt-20 pb-32">
                <div className="flex flex-col justify-center items-center w-full px-72 gap-3.5">
                    <span className="text-s-semibold text-primary-600 uppercase">Sobre Nós</span>

                    <div className="flex flex-col items-center w-full gap-6">
                        {/* Short phrases */}
                        <span className="flex flex-col items-center">
                            <span className="display-m-bold text-neutral-200">Encontre respostas.</span>
                            <span className="display-m-bold text-neutral-200">Partilhe soluções.</span>
                        </span>

                        {/* Some Little description */}
                        <span className="text-xl-regular text-neutral-800 text-center">Pesquise, busque as informações que precisa. Partilhe respostas que outros têm dificuldade em encontrar.</span>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col w-full px-28 bg-primary-950">
                {/* Image */}
                <div className="flex w-full h-96 -mt-20 bg-cover bg-center rounded-md"
                    style={{ backgroundImage: "url('/images/rectangle-light-image.jpeg')" }}
                ></div>

                {/* Text */}
                <div className="flex flex-col w-full px-48 py-12 gap-12">
                    <span className="text-l-regular text-primary-200 text-justify">O website BrainShare tem como objetivo fornecer uma plataforma aberta para troca de informações. Seja através de questões ou por se juntar a uma comunidade.</span>
                    
                    {/* <span className="headline-xs-medium text-neutral-200">Introduction</span>

                    <span class="flex flex-col w-full gap-6">
                        <span class="text-l-regular text-primary-200 text-justify">Harvest dear door 30,000ft six vendor future-proof. Another fruit marginalised new cob. Mint dive hits synergy hammer. Should important customer alpha dog meeting optimal buy-in. Unlock web offline dangerous close most crank. </span>
                        <span class="text-l-regular text-primary-200 text-justify">Walk helicopter define finish day barn container. Eow goto create look regroup journey eco-system optimal panel pushback. Talk future-proof loop space take marginalised future-proof. Place manage stakeholder see feed going roll supervisor proceduralize revision. One job good bells walk strategic. Down drive needed viral timepoint ensure skulls shoot live. Just language vendor re-inventing canatics fit cc discussions at support. Keep hit rehydrate winning also red-flag market replied. While expectations could illustration business forward hear team make value-added. Quick about downloaded job cc already.</span>
                    </span>*/}
                </div>
            </div>
        </div>
    )
}