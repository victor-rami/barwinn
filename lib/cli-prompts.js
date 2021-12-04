export const prompts = [
  {
    name: "COMMIT_AMOUNT",
    message: "How much $BNB do you want to commit for each position?",
    default: "0.01",
  },
  {
    name: "LEAD_SECONDS",
    message: `How many lead seconds prior to the round start do you want to commit funds?
(Network congestion can impact transaction success rates. 13 is a good number..)`,
    default: "13",
  },
  {
    type: "checkbox",
    name: "CHAIN",
    message: "Select the BSC DEX do you want to predict on?",
    choices: [
      {
        name: "PancakeSwap",
      },
      {
        name: "CandleGenie",
      },
    ],
  },
  {
    name: "PRIVATE_KEY",
    message:
      "I know this one is weird by you have to enter your private key for the bot to authorize transactions..",
    mask: "*",
  },
];


export const barwin = `          XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
         XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        XXXXXXXXXXXXXXXXXX         XXXXXXXX
       XXXXXXXXXXXXXXXX              XXXXXXX
       XXXXXXXXXXXXX                   XXXXX
        XXX     _________ _________     XXX
         XX    I  _xxxxx I xxxxx_  I    XX
        ( X----I         I         I----X )
       ( +I    I      00 I 00      I    I+ )
        ( I    I    __0  I  0__    I    I )
         (I    I______ /   \\_______I    I)
          I           ( ___ )            I
          I    _  :::::::::::::::  _     i         Herro frenz..
           \\    \\___ ::::::::: ___/    /            What if I told you..
            \\       \\_________/      _/                 "I already told you and you didnt listen?"
              \\        \\___,        /
                \\                 /
                 |\\             /|
                 |  \\_________/  |
`;

export const disclaimer = `
    __________________________________________________________________________
 / \                                                                         \.
 |   |                             DISCLAIMER                                 |.
 \_ |                                                                        .
   |   THIS IS NOT FINANCIAL ADVICE. ANY FINANCIAL EVENTS THIS BOT TAKES IS|.
   |   BASED ON YOUR INSTRUCTION AND YOU ARE CAPABLE OF SHUTTING IT DOWN   |.
   |   AT ANY TIME. USE THIS AT YOUR OWN RISK.                             |.
   |                                                                       |.
   |   DYOR before making any financial decisions. Only commit what you    |.
   |   can afford to loose.                                                |.
   |                                                                       |.
   |                             DATA & PRIVACY                            |.
   |                                                                       |.
   |   This CLI does not store or steal any of your data. You own full     |.
   |   responsibility to protect any information entered into the CLI.     |.
   |   The crypo space is a wonderful place. But is has a darkside.        |.
   |   Please make sure you take care of your sensitive keys.              |.
   |                                                                       |.
   |                      HAVE FUN AND I HOPE YOU MOON.                    |.
   |                               WEN LAMBO?                              |.
   |                                                                       |.
   |                                Sincerely                              |.
   |                               ERIK BARWINN                            |.
   |   ____________________________________________________________________|.
   |  /                                                                    /.
   \_/____________________________________________________________________/.
`;