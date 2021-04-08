import React from 'react';
import Image from 'next/image';

const Teach = () => {
    return(
      <div className="text-center">
        <p className="text-2xl my-8">iSara<span className="text-base">[イサラ]</span>で学べること</p>
        <p className="mb-6">iSaraの学習では、エンジニアとして「稼ぐ」ために必要な能力を身につけます。</p>
        <div className="flex justify-center">
          <div className="mx-2">
            <Image
                src="/salesskill.jpg"
                alt="salesskill-img"
                width={219}
                height={219}
            />
          </div>
          <div className="mx-2">
            <Image
                src="/knowledge.jpg"
                alt="knowledge-img"
                width={219}
                height={219}
            />
          </div>
          <div className="mx-2">
            <Image
                src="/skillup.jpg"
                alt="skillup-img"
                width={219}
                height={219}
            />
          </div>
          <div className="mx-2">
            <Image
                src="/freelanceconnection.jpg"
                alt="freelanceconnection-img"
                width={219}
                height={219}
            />
          </div>
        </div>
        <p className="my-6 font-semibold">これらを教えるのがiSaraです。</p>
      </div>
    )
}

export default Teach;