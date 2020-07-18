const cifra = `[Intro] D  C  G

(Guitarra 1)

(Guitarra 2)

   D
  P.M. . . . . . .
D
   P.M . . . . . .
[Primeira Parte]

(Guitarra 1)

D
She's got a smile 

That it seems to me
   C
Reminds me of childhood memories
    G
Where everything was as fresh
                     D
As the bright blue sky

D
Now and then 

When I see her face
     C
She takes me away to that special place
           G
And if I stare too long
                              D
I'd probably break down and cry

[Primeiro Refrão]

(Guitarra 1)

A5    B5  C5                  D5
Oh Oh     Oh, Sweet child o' mine
A5       B5  C5                 D5
Oh Oh Oh     Oh, Sweet love of mine

(Riff 1) D  C  G  D

[Segunda Parte]

D
She's got eyes 

Of the bluest skies
   C
As if they thought of rain
   G
I hate to look into those eyes
     D
And see an ounce of pain

D
Her hair reminds me of a warm safe place
      C
Where as a child I'd hide
      G
And pray for the thunder 

And the rain
     D
To quietly pass me by

[Segundo Refrão]

A5    B5  C5                  D5
Oh Oh     Oh, Sweet child o' mine
A5       B5  C5                 D5
Oh Oh Oh     Oh, Sweet love of mine

(Riff 2) D  C  G  D
         D  C  G  D

[Terceiro Refrão]

A5       B5  C5                  D5
Oh Oh Oh     Oh, Sweet child o' mine
A5       B5  C5                 D5
Oh Oh Oh     Oh, Sweet love of mine
A5       B5  C5                  D5
Oh Oh Oh     Oh, Sweet child o' mine
A5       B5  C5                 D5  D#5
Uh Uh Uh     Uh, Sweet love of mine

[Solo] E5  C5  B5  A5  ( G  F# )
       E5  C5  B5  A5
       E5  G5  A5  C5  D5 

[Parte 6 de 6]

[Interlúdio]

   E5
(Where do we go?)
   G5
(Where do we go now?)
  A5              C5  D5
(Where do we go?)

  E5
Where do we go?
   G5
(Where do we go now?)
  A5                C5  D5
Where do we go now?

  E5            G5
Where do we go?    (Sweet child)
  A5                C5  D5
Where do we go now?

[Final]

   E5
(Where do we go?)
   G5
(Where do we go?)
  A5                C5  D5
Where do we go now?

  E5            G5
Where do we go?
  A5                C5  D5
Where do we go now?

  E5            G5
Where do we go?
  A5                C5  D5
Where do we go now?

  E5            G5
Where do we go?
  A5                 D5   C5
Where do we go now, now, now

 B5   A5   G5   F#5  E5
Now, now, now, now, now
        G5
Sweet child
        A5  C5  D5     E5
Sweet child        o' mine`

const regexC = /c5/gi
const regexD = /d5/gi


console.log(cifra.match(regexC))
console.log(cifra.match(regexD))