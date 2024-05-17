import {
  FC,
  useState,
  ChangeEvent,
  KeyboardEvent,
  ClipboardEvent,
  FormEvent,
} from 'react'

export const SignupForm: FC = () => {
  const [code, setCode] = useState('+998 ');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length > 14) return;
    if (inputValue.length === 0) return setCode('+998 ');
    if (!inputValue.startsWith('+998 ')) {
      setCode('+998 ');
    } else {
      setCode(inputValue);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value
    // Prevent deletion of the prefix
    if (inputValue === '+998 ' && (e.key === 'Backspace' || e.key === 'Delete')) {
      e.preventDefault()
    }
  }

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    const paste = (e.clipboardData || window.Clipboard).getData('text')
    if (!paste.startsWith('+998 ')) {
      e.preventDefault()
      setCode('+998 ')
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="bg-slate-400 clip-custom mt-20 py-20">
      <div className="container w-[1440px] max-w-4/5 mx-auto">
        <div className="w-full flex justify-between">
          <div className="w-2/3">
            <h1 className="text-5xl font-bold">
              SIGN UP FOR <span className="text-slate-200"> FIRST</span> LESSON{' '}
            </h1>
          </div>
          <div className="w-1/3">
            <p className="text-xl font-bold">
              We offer the first lesson for English courses for a comfortable
              acquaintance with the teacher and the choice of a suitable
              training program. Leave a request and we will contact you as soon
              as possible!
            </p>
          </div>
        </div>
        <form
          action=""
          className="grid grid-cols-3 gap-5 mt-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent border border-solid border-slate-900 py-6 pl-3 text-2xl placeholder:text-slate-700"
          />
          <input
            type="tel"
            placeholder="+998901234567"
            className="bg-transparent border border-solid border-slate-900 py-6 pl-3 text-2xl placeholder:text-slate-700"
            value={code}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
          />
          <div className="bg-slate-900 py-6 pl-3 text-2xl text-center">
            <button className="uppercase text-slate-200 font-semibold">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
