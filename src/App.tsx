import { ArrowRight, Calendar, MapPin, Settings2, UserRoundPlus } from "lucide-react"
import { useState } from "react"

function App() {

  const [showInviteEmail, setShowInviteEmail] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  return (

    <div className="h-screen flex items-center justify-center bg-quadrados bg-no-repeat bg-center">

      <div className="max-w-3xl w-full px-6 text-center space-y-10">


        {/* LOGO E TITULO */}
        <div className="flex flex-col items-center gap-3">
          <img src="/logo-travel.svg" alt="travel logo" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        {/* INPUT */}
        <div>

          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input type="text" placeholder="Para onde voce vai?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>

            <div className="flex items-center gap-2">

              <Calendar className="size-5 text-zinc-400" />
              <input type="text" placeholder="Quando?"

                className="bg-transparent text-lg placeholder-zinc-400  w-40 outline-none flex-1"
              />
            </div>

            {showInviteEmail ?
              <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2  font-medium flex items-center gap-2 hover:bg-lime-400" onClick={() => setShowInviteEmail(!showInviteEmail)}>
                Alterar local/data
                <Settings2 className="size-5" />
              </button> : <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2  font-medium flex items-center gap-2 hover:bg-lime-400" onClick={() => setShowInviteEmail(!showInviteEmail)}>
                Continuar
                <ArrowRight className="size-5" />
              </button>
            }

          </div>
        </div>

        {/* INPUT - 2*/}
        {
          showInviteEmail &&
          <div>

            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

              <div className="flex items-center gap-2 flex-1">
                <UserRoundPlus className="size-5 text-zinc-400" />
                <input type="text" placeholder="Quem estará na viagem?"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2  font-medium flex items-center gap-2 hover:bg-lime-400" onClick={() => setShowDialog(true)}>
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>
        }



        {/* TEXTO PEQUENO APOS INPUT */}
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className="text-zinc-300 underline"> termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a>.
        </p>
      </div>


      {
        showDialog &&
        <div className="fixed inset-0 bg-black/60  flex items-center justify-center" onClick={
          () => setShowDialog(false)
        }>
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            Selecionar convidados
          </div>
        </div>
      }
    </div>
  )
}

export default App
