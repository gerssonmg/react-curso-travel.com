import { ArrowRight, AtSign, Calendar, MapPin, Plus, Settings2, UserRoundPlus, X } from "lucide-react"
import { FormEvent, useState } from "react"

function App() {

  const [showInviteEmail, setShowInviteEmail] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  const [emailsListInvite, setEmailsListInvite] = useState<string[]>([
    "gerson@gmail.com"
  ])

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString();

    if (!email) {
      return
    }

    if (emailsListInvite.includes(email)) {
      alert(`E-mail:${email} já foi adicionado!`)
      return
    }

    setEmailsListInvite(
      [
        ...emailsListInvite,
        email
      ]
    )

    event.currentTarget.reset()
  }

  function removeEmailFromInvite(emailToRemove: string) {
    const newEmailsList = emailsListInvite.filter(email => email !== emailToRemove)
    setEmailsListInvite(newEmailsList)
  }


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
        <div className="fixed inset-0 bg-black/60  flex items-center justify-center" >
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">

            {/* SELECIONAR E "X" */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="font-lg font-semibold">
                  Selecionar convidados
                </h2>
                <button>
                  <X className="size-5 text-zinc-400" onClick={
                    () => setShowDialog(false)
                  } />
                </button>
              </div>

              <p className="text-sm text-zinc-400">
                Os convidados irão receber e-mails para confirmar a participação na viagem
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {
                emailsListInvite.map(email =>
                  <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                    <span className="text-zinc-300">{email}</span>
                    <button type="button">
                      <X className="size-5 text-zinc-400" onClick={() => {
                        removeEmailFromInvite(email)
                      }} />
                    </button>
                  </div>
                )
              }
            </div>

            <div className="w-full h-px bg-zinc-500" />

            <form onSubmit={addNewEmailToInvite} className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <div className="px-2 flex items-center flex-1 gap-2">
                <AtSign className="text-zinc-400 size-5" />
                <input type="email" name="email" placeholder="Digite o email do convidade"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <button type="submit" className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2  font-medium flex items-center gap-2 hover:bg-lime-400">
                Convidar
                <Plus />
              </button>
            </form>


          </div>
        </div>
      }
    </div>
  )
}

export default App
