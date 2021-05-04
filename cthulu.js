var vm = new Vue({
    el: '#cthulu',
    data: {
    difficultySettings: {
        /** adjust for difficulty - the higher the number the more difficult */
        maxShoggothSummonsPerRegion: 2,
        /** number of cards per region */
        minionCardCountPerRegion: 30,
        numberOfLocationCardsPerLocation: 10
    },
        gameStarted: false,
        numberOfShoggothsInPlay: 0,
        maximumShoggothsInPlay: 3,
        minionCardRate: 2,
        minionsPerCard: 2,
        totalMinions: 20,
        players: [
                  {
            hand: [],
            activePlayer: true
        },
                  {
            hand: [],
        activePlayer: false
        },
                  {
            hand: [],
        activePlayer: false
        },
                  {
            hand: [],
        activePlayer: false
        }
                  ],
    summonCards: [
    {
        name: "Gog",
        show: false
    },
    {
        name: "Magog",
    show: false
    },
      {
          name: "Spn-dra",
    show: false
      },
      {
          name: "Slosh pop",
    show: false
      },
      {
          name: "Neg eth",
    show: false
      },
      {
          name: "Rth",
    show: false
      },
      {
          name: "Medrock",
    show: false
      },
      {
          name: "Shanga",
    show: false
      },
      {
          name: "Tizaph",
    show: false
      }
    ],
    cthuluCard: {
        name: "Cthulu",
    show: false
    },
        summonCardsSuffled: [],
        minionCards: [],
        minionCardsInPlay: [],
        regions: [
        {
            name: "Green",
            minionCards : [],
            numberOfShoggothSummons: 0,
              locations: [
                {
                  regionName: "Green",
                  name: "Asylum",
                  gate: false,
                  busStation: false,
                  hasSummonedShoggoth: false,
                  numberOfMinions: 0,
                  numberOfShoggoths: 0
                },
                {
                  regionName: "Green",
                  name: "Police Station",
                  gate: false,
                  busStation: false,
                  hasSummonedShoggoth: false,
                  numberOfMinions: 0,
                  numberOfShoggoths: 0
                },
                {
                  regionName: "Green",
                  name: "University",
                  gate: false,
                  busStation: false,
                  hasSummonedShoggoth: false,
                  numberOfMinions: 0,
                  numberOfShoggoths: 0
                },
                {
                  regionName: "Green",
                  name: "Park",
                  gate: true,
                  busStation: false,
                  hasSummonedShoggoth: false,
                  numberOfMinions: 0,
                  numberOfShoggoths: 0
                },
                {
                  regionName: "Green",
                  name: "Bus Station",
                  gate: false,
                  busStation: true,
                  hasSummonedShoggoth: false,
                  numberOfMinions: 0,
                  numberOfShoggoths: 0
                }
              ]
            },
        {
            name: "Blue",
            minionCards : [],
            numberOfShoggothSummons: 0,
              locations: [
                {
                  regionName: "Blue",
                  name: "Docks",
                  gate: false,
                  busStation: false,
                  hasSummonedShoggoth: false,
                  numberOfMinions: 0,
                  numberOfShoggoths: 0
                },
                {
                  regionName: "Blue",
                  name: "Junk Yard",
                  gate: false,
                  busStation: false,
                  hasSummonedShoggoth: false,
                  numberOfMinions: 0,
                  numberOfShoggoths: 0
                },
                {
                  regionName: "Blue",
                  name: "Factory",
                  gate: false,
                  busStation: false,
                  hasSummonedShoggoth: false,
                  numberOfMinions: 0,
                  numberOfShoggoths: 0
                },
                {
                  regionName: "Blue",
                  name: "Hospital",
                  gate: true,
                  busStation: false,
                  hasSummonedShoggoth: false,
                  numberOfMinions: 0,
                  numberOfShoggoths: 0
                },
                {
                  regionName: "Blue",
                  name: "Bus Station",
                  gate: false,
                  busStation: true,
                  hasSummonedShoggoth: false,
                  numberOfMinions: 0,
                  numberOfShoggoths: 0
                }
              ]
            },
        {
            name: "Yellow",
            minionCards : [],
            numberOfShoggothSummons: 0,
              locations: [
                {
                  regionName: "Yellow",
                  name: "Cafe",
                  gate: false,
                  busStation: false,
                  hasSummonedShoggoth: false,
                  numberOfMinions: 0,
                  numberOfShoggoths: 0
                },
                {
                  regionName: "Yellow",
                  name: "Church",
                  gate: false,
                  busStation: false,
                  hasSummonedShoggoth: false,
                  numberOfMinions: 0,
                  numberOfShoggoths: 0
                },
                {
                  regionName: "Yellow",
                  name: "Farmstead",
                  gate: false,
                  busStation: false,
                  hasSummonedShoggoth: false,
                  numberOfMinions: 0,
                  numberOfShoggoths: 0
                },
            
                {
                  regionName: "Yellow",
                  name: "Bus Station",
                  gate: false,
                  busStation: true,
                  hasSummonedShoggoth: false,
                  numberOfMinions: 0,
                  numberOfShoggoths: 0
                },
                  {
                    regionName: "Yellow",
                    name: "school",
                    gate: true,
                    busStation: false,
                    hasSummonedShoggoth: false,
                    numberOfMinions: 0,
                    numberOfShoggoths: 0
                  },
              ]
            },
        {
            name: "Red",
            minionCards : [],
            numberOfShoggothSummons: 0,
              locations: [
                {
                  regionName: "Red",
                  name: "Market",
                  gate: false,
                  busStation: false,
                  hasSummonedShoggoth: false,
                  numberOfMinions: 0,
                  numberOfShoggoths: 0
                },
                {
                  regionName: "Red",
                  name: "Woodlands",
                  gate: false,
                  busStation: false,
                  hasSummonedShoggoth: false,
                  numberOfMinions: 0,
                  numberOfShoggoths: 0
                },
                {
                  regionName: "Red",
                  name: "Museum",
                  gate: false,
                  busStation: false,
                  hasSummonedShoggoth: false,
                  numberOfMinions: 0,
                  numberOfShoggoths: 0
                },
            
                {
                  regionName: "Red",
                  name: "Bus Station",
                  gate: false,
                  busStation: true,
                  hasSummonedShoggoth: false,
                  numberOfMinions: 0,
                  numberOfShoggoths: 0
                },
                  {
                    regionName: "Red",
                    name: "Graveyard",
                    gate: true,
                    busStation: false,
                    hasSummonedShoggoth: false,
                    numberOfMinions: 0,
                    numberOfShoggoths: 0
                  },
              ]
            }
        ],
        locationCards: []
    },
    mounted() {
        this.resetGame();
    },
    computed: {
        shouldShowStartButton() {
            return this.gameStarted === false;
        },
        shouldShowResetButton() {
            return this.gameStarted === true;
        },
    },
    methods: {
        resetGame() {
            this.gameStarted = false;
            this.resetVariables();
            this.resetMinionPlacements();
        },
        resetMinionPlacements() {
            this.regions.forEach((region) => {
                region.locations.forEach((location) => {
                    location.numberOfMinions = 0;
                    location.numberOfShoggoths = 0;
                });
            });
        },
        resetVariables() {
            this.locationCards = [];
            this.minionCards = [];
            this.summonCardsSuffled = [];
            this.minionCardsInPlay = [];
            this.minionCardsInPlay = [];
            
            this.numberOfShoggothsInPlay = 0;
            this.minionCardRate = 2;
            this.minionsPerCard = 2;
        },
        makeLocationCards() {
            this.regions.forEach((region, regionIndex) => {
                region.locations.forEach((location, locationIndex) => {
                    for (let i = 0; i < this.difficultySettings.numberOfLocationCardsPerLocation; i++) {
                        this.locationCards.push({
                            type: 'location',
                            locationName: location.name,
                            regionName: location.regionName,
                            locationIndex: locationIndex,
                            regionIndex: regionIndex
                        });
                    }
                });
            });
            
        },
        makeMinionCards() {
            let minionCard = {};
            let numberOfMinionCardsPerLocation = Math.ceil(this.difficultySettings.minionCardCountPerRegion/5); // (5 locations per region)
                                                      
            this.regions.forEach((region, regionIndex) => {
                region.locations.forEach((location, locationIndex) => {
                    for (let j = 0; j < numberOfMinionCardsPerLocation; j++) {
                        
                        minionCard = {
                            type: 'minion',
                            regionIndex: regionIndex,
                            locationIndex: locationIndex,
                            gate: location.gate,
                            busStation: location.busStation,
                            shouldSummonShoggoth: false
                        };
                        
                        if (
                            location.gate === false &&
                            location.busStation === false &&
                            location.hasSummonedShoggoth === false &&
                            region.numberOfShoggothSummons < this.difficultySettings.maxShoggothSummonsPerRegion
                        ) {
                            region.numberOfShoggothSummons++;
                            location.hasSummonedShoggoth = true;
                            minionCard.shouldSummonShoggoth = true;
                        }
                        
                        this.minionCards.push(minionCard);
                    }
                })
            });
        },
        addEvilAwakensCards() {
            const evilAwakens = {type:'evilAwakens'};
            this.locationCards.push(evilAwakens);
            this.locationCards.push(evilAwakens);
            this.locationCards.push(evilAwakens);
            this.locationCards.push(evilAwakens);
        },
       setUpSummonCards() {
        this.summonCardsSuffled = [...this.summonCards].sort(() => Math.random() - 0.5).splice(0,6).concat(this.cthuluCard);
       },
       shuffleLocationCards() {
          this.locationCards.sort(() => Math.random() - 0.5);
       },
       startGame() {
            this.resetVariables();
            this.makeMinionCards();
            this.makeLocationCards();
            this.addEvilAwakensCards();
            this.shuffleLocationCards();
            this.shuffleMinionCards();
            this.setUpSummonCards();
            this.minionsPerCard = 3;
            this.takeMinionCard();
            this.takeMinionCard();
            this.minionsPerCard = 2;
            this.takeMinionCard();
            this.takeMinionCard();
            this.minionsPerCard = 1;
            this.takeMinionCard();
            this.takeMinionCard();
            this.minionsPerCard = 2;
            this.gameStarted = true;
        },
        shuffleMinionCards() {
            this.minionCardsInPlay = this.minionCards.sort(() => Math.random() - 0.5);
        },
        showNextSummonCard() {
          const summonCardToShow = this.summonCardsSuffled.filter((card) => {
              return card.show === false;
            })
            .splice(0, 1)[0];
            
            if (summonCardToShow.name == "Cthulu") {
                this.gameOver();
            }
            
            summonCardToShow.show = true;
        },
        shouldShowSummonCard(summonCard) {
            return summonCard.show === true;
        },
        summonCardClass(index) {
            return 'summon-card-' + index;
        },
        makeShoggothClass(shoggothNumber) {
            return 'shoggoth shoggoth-' + shoggothNumber;
        },
        makeMinionClass(minionNumber) {
            return 'minion minion-' + minionNumber;
        },
        makeClass(regionName) {
            return 'region-' + regionName.toLowerCase();
        },
       makeCardStyle(locationCardIndex) {
            const top = Math.round(Math.random() * 10);
            const left = Math.round(Math.random() * 10);
                
            const topMultiplier = Math.random() > 0.5 ? -1 : 1;
            const leftMultiplier = Math.random() > 0.5 ? -1 : 1;
                
            return 'top:' + (top * topMultiplier) + 'px;left:' + (left * leftMultiplier) + 'px;';
        },
        locationClass(locationName) {
            return locationName.toLowerCase().replace(' ', '-');
        },
        onTakeLocationCards() {},
        onTakeMinionCards() {
            if (this.minionCardsInPlay.length == 0) {
                this.gameOver();
            }
            
            /**
             get the first amount of cards according to the summon rate
             */
            let numberOfCardsToTake = this.minionCardRate;
            if (this.minionCardsInPlay.length < numberOfCardsToTake) {
                numberOfCardsToTake = this.minionCardsInPlay.length;
            }
            
            for (let i = 1; i <= numberOfCardsToTake; i++) {
                this.takeMinionCard();
            }
            
        },
        takeMinionCard() {
            if (this.minionCardsInPlay.length == 0) {
                this.gameOver();
            }

            const card = this.minionCardsInPlay.splice(0, 1);
            this.activateMinionCard(card[0]);
        },
        activateMinionCard(card) {
            const numberOfMinionsAtLocation = this.regions[card.regionIndex].locations[card.locationIndex].numberOfMinions;
            
            if (this.numberOfMinionsRemaining == 0 || this.numberOfMinionsRemaining < numberOfMinionsAtLocation + this.minionsPerCard) {
                this.gameOver();
            }
            
            if (numberOfMinionsAtLocation + this.minionsPerCard > 3) {
                this.regions[card.regionIndex].locations[card.locationIndex].numberOfMinions = 3;
                this.numberOfMinionsRemaining -= (this.minionsPerCard - numberOfMinionsAtLocation);
                this.summonShoggoth(card);
            } else {
                this.regions[card.regionIndex].locations[card.locationIndex].numberOfMinions += this.minionsPerCard;
                this.numberOfMinionsRemaining -= this.minionsPerCard;
            }
            if (card.shouldSummonShoggoth === true) {
                this.summonShoggoth(card);
            }
        },
        summonShoggoth(card) {
            if (this.numberOfShoggothsInPlay == this.maximumShoggothsInPlay - 1) {
                this.gameOver();
            }
            this.regions[card.regionIndex].locations[card.locationIndex].numberOfShoggoths++;
        },
        gameOver() {
            alert('game over!');
        }
    }
});
