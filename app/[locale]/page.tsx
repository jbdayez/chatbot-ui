import { HOMONYMES } from "@/data/homonymes"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "100 homonymes français",
  description:
    "Explorez une sélection de cent homonymes français, chacun accompagné de deux sens distincts et d’exemples illustratifs."
}

export default function HomePage() {
  const totalHomonymes = HOMONYMES.length

  return (
    <div className="w-full flex-1 overflow-y-auto">
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 sm:py-16 lg:py-20">
        <section className="space-y-6 text-center">
          <div className="border-primary/40 bg-primary/10 text-primary mx-auto flex max-w-sm items-center justify-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            Homonymes français
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              100 homonymes à explorer et à retenir
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-base sm:text-lg">
              Les homonymes sont des mots qui partagent la même orthographe ou
              la même prononciation tout en véhiculant des sens différents. Ce
              parcours met en lumière cent exemples issus du français courant
              avec des explications claires et des phrases contextualisées.
            </p>
            <p className="text-muted-foreground mx-auto max-w-2xl text-sm">
              Naviguez dans la liste pour enrichir votre vocabulaire, préparer
              une leçon ou simplement savourer la richesse de la langue. Chaque
              carte synthétise deux usages courants d’un même mot.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="border-muted-foreground/30 bg-muted/40 text-muted-foreground flex flex-col gap-4 rounded-2xl border border-dashed p-6 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl text-sm sm:text-base">
              Le lexique est classé par ordre alphabétique. Les définitions
              restent concises pour favoriser une lecture fluide et une
              mémorisation rapide.
            </p>
            <div className="flex items-center gap-2">
              <span className="bg-background text-foreground rounded-full px-4 py-1 text-sm font-semibold shadow-sm">
                {totalHomonymes} entrées
              </span>
            </div>
          </div>

          <div className="grid gap-6">
            {HOMONYMES.map((homonyme, index) => (
              <article
                key={homonyme.mot}
                className="border-muted bg-card text-card-foreground hover:border-primary/60 rounded-2xl border shadow-sm transition"
              >
                <div className="flex flex-col gap-6 p-6 sm:p-8">
                  <header className="flex flex-wrap items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      <span className="text-primary/80 text-sm font-semibold">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        {homonyme.mot}
                      </h2>
                    </div>
                    {homonyme.nature ? (
                      <span className="border-primary/30 bg-primary/10 text-primary rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                        {homonyme.nature}
                      </span>
                    ) : null}
                  </header>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {homonyme.definitions.map((definition, definitionIndex) => (
                      <div
                        key={`${homonyme.mot}-${definitionIndex}`}
                        className="bg-muted/60 rounded-xl p-4 text-left"
                      >
                        <p className="text-primary/80 text-xs font-semibold uppercase tracking-wider">
                          {definition.titre}
                        </p>
                        <p className="text-muted-foreground mt-2 text-sm">
                          {definition.description}
                        </p>
                        <p className="text-muted-foreground/90 mt-3 text-sm italic">
                          Exemple : {definition.exemple}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
