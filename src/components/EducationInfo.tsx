import {FC} from 'react'

const EducationInfo: FC = () => {
  return (
    <>
      <div className="flex gap-5 w-full h-[550px]">
        <div className="w-1/2 h-full">
          <iframe
            // width="560"
            // height="315"
            className="w-full h-full"
            src="https://www.youtube.com/embed/9HvTRg7LCio?si=44dS-z8YncYm-NJf"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-between">
          <h1 className="text-5xl font-bold">
            ABOUT OUR ENGLISH LANGUAGE CENTER
          </h1>
          <p className="text-xl font-normal text-slate-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            mollitia porro qui molestias corporis minima magnam. Est blanditiis
            minus error quas nihil labore debitis reiciendis iusto corporis
            expedita totam ea, ipsa voluptatibus? Cupiditate labore magnam
            facilis vitae eius fugit, ipsam odio facere dolorem quae iure
            repellat recusandae tenetur quidem vel repudiandae nam earum
            aspernatur fuga hic possimus quos alias! Amet ex dicta odio impedit,
            soluta quod ducimus reiciendis aut tempora sit itaque laboriosam
            deleniti dignissimos voluptatibus porro nostrum unde inventore
            pariatur? Consectetur beatae illum doloribus harum, amet distinctio
            aliquid quo, totam facere impedit enim recusandae error ipsam at
            molestiae.
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-normal text-slate-800">There are</p>
              <p className="text-8xl font-bold">10</p>
              <p className="text-xl font-normal text-slate-800">branches</p>
            </div>
            <div>
              <p className="text-xl font-normal text-slate-800">There are</p>
              <p className="text-8xl font-bold">15,000</p>
              <p className="text-xl font-normal text-slate-800">students</p>
            </div>
            <div>
              <p className="text-xl font-normal text-slate-800">There are</p>
              <p className="text-8xl font-bold">400</p>
              <p className="text-xl font-normal text-slate-800">
                staff members
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EducationInfo