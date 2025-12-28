"use strict";

(function initQuizData(global) {
  const quizData = [
    {
      id: "ch1",
      title: "Chapter 1 – Handling a Motorcycle",
      sections: [
        {
          id: "ch1_p1",
          title: "P1 – Special context",
          questions: [
            {
              id: "ch1_p1_q1",
              text:
                "The weight-to-power ratio of a motorcycle is the relationship between the motorcycle’s weight and the power of its engine.",
              answer: true
            },
            {
              id: "ch1_p1_q2",
              text: "All types of motorcycles are operated in the same way.",
              answer: false
            },
            {
              id: "ch1_p1_q3",
              text:
                "It is recommended that you wear a complete and appropriate protective outfit right from the beginning of your closed-track training.",
              answer: true
            },
            {
              id: "ch1_p1_q4",
              text: "On a motorcycle, speed has no impact on balance.",
              answer: false
            },
            {
              id: "ch1_p1_q5",
              text:
                "The type of motorcycle and environmental conditions can affect the stability of a motorcycle and, as a result, your balance.",
              answer: true
            }
          ]
        },
        {
          id: "ch1_p2",
          title: "P2 – Laws of physics",
          questions: [
            {
              id: "ch1_p2_q1",
              text: "Extra loads on a motorcycle can affect its centre of gravity.",
              answer: true
            },
            {
              id: "ch1_p2_q2",
              text:
                "Centrifugal force pulls a vehicle toward the inside of a turn or curve.",
              answer: false
            },
            {
              id: "ch1_p2_q3",
              text:
                "Centrifugal force diminishes in proportion to the speed of the motorcycle, its weight and the radius of the turn or curve.",
              answer: false
            },
            {
              id: "ch1_p2_q4",
              text:
                "You feel the effects of centrifugal force more strongly at very low speeds.",
              answer: false
            },
            {
              id: "ch1_p2_q5",
              text:
                "Centrifugal force does not affect how you go about negotiating a curve.",
              answer: false
            },
            {
              id: "ch1_p2_q6",
              text: "Inertia is the resistance of a body to motion.",
              answer: true
            },
            {
              id: "ch1_p2_q7",
              text: "Inertia is the tendency of a vehicle to move in a straight line.",
              answer: true
            },
            {
              id: "ch1_p2_q8",
              text:
                "The faster the wheels of a motorcycle turn, the stronger the gyroscopic effect.",
              answer: true
            },
            {
              id: "ch1_p2_q9",
              text:
                "The stronger the gyroscopic effect, the easier it is to maintain your balance on a motorcycle.",
              answer: true
            },
            {
              id: "ch1_p2_q10",
              text: "Force of impact is related to kinetic energy.",
              answer: true
            },
            {
              id: "ch1_p2_q11",
              text: "Weight and speed influence the accumulation of kinetic energy.",
              answer: true
            },
            {
              id: "ch1_p2_q12",
              text:
                "In a collision, two of the ways kinetic energy is dissipated is by the friction of the tires against the asphalt and by the deformation of metal.",
              answer: true
            },
            {
              id: "ch1_p2_q13",
              text:
                "It is possible to absorb the impact of a collision by tightly gripping the handlebars of the motorcycle.",
              answer: false
            },
            {
              id: "ch1_p2_q14",
              text:
                "In a collision, the driver’s body absorbs the accumulated kinetic energy.",
              answer: false
            },
            {
              id: "ch1_p2_q15",
              text: "A motorcycle’s braking distance is longer if its tires are worn.",
              answer: true
            }
          ]
        },
        {
          id: "ch1_p3",
          title: "P3 – How a motorcycle works",
          questions: [
            {
              id: "ch1_p3_q1",
              text: "The front brake lever is located on the left handlebar.",
              answer: false
            },
            {
              id: "ch1_p3_q2",
              text: "The emergency cut-off switch is located on the right handlebar.",
              answer: true
            },
            {
              id: "ch1_p3_q3",
              text: "The rear brake pedal is located on the left side.",
              answer: false
            },
            {
              id: "ch1_p3_q4",
              text: "The starter is located on the right handlebar.",
              answer: true
            },
            {
              id: "ch1_p3_q5",
              text: "The turn signal control is located on the right handlebar.",
              answer: false
            },
            {
              id: "ch1_p3_q6",
              text: "The horn is located on the right handlebar.",
              answer: false
            },
            {
              id: "ch1_p3_q7",
              text: "The clutch lever is located on the left handlebar.",
              answer: true
            },
            {
              id: "ch1_p3_q8",
              text:
                "To handle a motorcycle safely, you must first be able to operate the controls without looking at them.",
              answer: true
            },
            {
              id: "ch1_p3_q9",
              text: "The rear brake is more powerful than the front brake.",
              answer: false
            },
            {
              id: "ch1_p3_q10",
              text: "You have to switch the ignition to ON before pressing the starter.",
              answer: true
            },
            {
              id: "ch1_p3_q11",
              text:
                "The emergency cut-off switch is used to turn off the engine instantly.",
              answer: true
            },
            {
              id: "ch1_p3_q12",
              text:
                "All motorcycles are equipped with a choke that regulates the air-gas mixture.",
              answer: false
            },
            {
              id: "ch1_p3_q13",
              text: "It is safe to adjust the choke while your motorcycle is moving.",
              answer: false
            },
            {
              id: "ch1_p3_q14",
              text:
                "The braking system on a motorcycle can have an impact on how you brake.",
              answer: true
            },
            {
              id: "ch1_p3_q15",
              text: "All models of motorcycles have a fuel tap.",
              answer: false
            }
          ]
        },
        {
          id: "ch1_p4",
          title: "P4 – Basic operations",
          questions: [
            {
              id: "ch1_p4_q1",
              text:
                "When moving your motorcycle without starting the engine, squeezing the front brake lever can help you keep it balanced.",
              answer: true
            },
            {
              id: "ch1_p4_q2",
              text:
                "It is important to make sure that you can place both feet firmly on the ground when your motorcycle is stationary, because if you can’t, it’s probably not the right type of motorcycle for your body size.",
              answer: true
            },
            {
              id: "ch1_p4_q3",
              text: "There is no specific method for standing a motorcycle upright.",
              answer: false
            },
            {
              id: "ch1_p4_q4",
              text:
                "You must be sure to close the fuel tap of a motorcycle before you stand it upright.",
              answer: true
            },
            {
              id: "ch1_p4_q5",
              text:
                "To safely stand a motorcycle upright, you must first be sure to turn off the engine.",
              answer: true
            },
            {
              id: "ch1_p4_q6",
              text:
                "The way to start a motorcycle differs depending on whether or not it is equipped with a choke.",
              answer: true
            },
            {
              id: "ch1_p4_q7",
              text: "The choke must be used when starting a cold engine.",
              answer: true
            },
            {
              id: "ch1_p4_q8",
              text: "Before heading out on the road, you must let the engine warm up.",
              answer: true
            }
          ]
        },
        {
          id: "ch1_p5a",
          title: "P5a – Riding position and scanning",
          questions: [
            {
              id: "ch1_p5a_q1",
              text: "Your riding position has no impact on how you handle your motorcycle.",
              answer: false
            },
            {
              id: "ch1_p5a_q2",
              text:
                "Your riding position differs depending on the type of motorcycle you are riding.",
              answer: true
            },
            {
              id: "ch1_p5a_q3",
              text: "If you are tired, it can affect your riding position.",
              answer: true
            },
            {
              id: "ch1_p5a_q4",
              text:
                "Correctly positioning your hands enables you to operate the controls with greater ease and reduces the risk of making a false manoeuvre.",
              answer: true
            },
            {
              id: "ch1_p5a_q5",
              text:
                "Improperly positioning your hands can cause you to accelerate unintentionally.",
              answer: true
            },
            {
              id: "ch1_p5a_q6",
              text:
                "The position of your hands and knees does not affect how you counterbalance or countersteer.",
              answer: false
            },
            {
              id: "ch1_p5a_q7",
              text:
                "Hugging the gas tank with your knees increases the risk of an accident in a curve.",
              answer: false
            },
            {
              id: "ch1_p5a_q8",
              text:
                "Drivers have a tendency to steer their vehicle toward the point where they are looking.",
              answer: true
            },
            {
              id: "ch1_p5a_q9",
              text:
                "The direction you are looking in is especially important when you are making a turn, negotiating a curve or avoiding an obstacle.",
              answer: true
            }
          ]
        },
        {
          id: "ch1_p5b",
          title: "P5b – Operating the controls",
          questions: [
            {
              id: "ch1_p5b_q1",
              text: "Controlling the clutch enables you to find the friction point.",
              answer: true
            },
            {
              id: "ch1_p5b_q2",
              text:
                "Controlling the clutch helps you maintain your balance when executing manoeuvres at low speeds.",
              answer: true
            },
            {
              id: "ch1_p5b_q3",
              text: "The friction point is reached when the rear wheel begins to turn.",
              answer: true
            },
            {
              id: "ch1_p5b_q4",
              text: "Controlling the throttle enables you to maintain a constant speed.",
              answer: true
            },
            {
              id: "ch1_p5b_q5",
              text:
                "Braking on a motorcycle must be done gradually and involves using both brakes.",
              answer: true
            },
            {
              id: "ch1_p5b_q6",
              text:
                "Proper coordination of the two brakes requires that you exert greater force on the front brake lever.",
              answer: false
            }
          ]
        },
        {
          id: "ch1_p5c",
          title: "P5c – Counterbalancing and countersteering",
          questions: [
            {
              id: "ch1_p5c_q1",
              text:
                "Counterbalancing means shifting your body to compensate for the unbalancing of the motorcycle’s weight.",
              answer: true
            },
            {
              id: "ch1_p5c_q2",
              text:
                "Counterbalancing is the technique used to make a turn, negotiate a curve or avoid an obstacle at speeds above 25 km/h.",
              answer: false
            },
            {
              id: "ch1_p5c_q3",
              text:
                "At low speeds, it is necessary to counterbalance since the gyroscopic effect is very weak.",
              answer: true
            },
            {
              id: "ch1_p5c_q4",
              text:
                "Countersteering is used only when travelling at speeds below 25 km/h.",
              answer: false
            },
            {
              id: "ch1_p5c_q5",
              text:
                "Countersteering is used only when negotiating a curve at speeds above 25 km/h.",
              answer: false
            },
            {
              id: "ch1_p5c_q6",
              text:
                "Countersteering is a technique that enables you make a turn, negotiate a curve or avoid an obstacle at speeds above 25 km/h.",
              answer: true
            },
            {
              id: "ch1_p5c_q7",
              text:
                "One of the things that countersteering does is to compensate for the gyroscopic effect and inertia.",
              answer: true
            },
            {
              id: "ch1_p5c_q8",
              text: "Countersteering compensates for centrifugal force.",
              answer: true
            },
            {
              id: "ch1_p5c_q9",
              text:
                "You countersteer by pushing forward on the right handlebar when you want to steer your motorcycle toward the left.",
              answer: false
            },
            {
              id: "ch1_p5c_q10",
              text:
                "There is no difference between countersteering at 50 km/h and countersteering at 75 km/h.",
              answer: false
            }
          ]
        },
        {
          id: "ch1_p6",
          title: "P6 – Manoeuvres",
          questions: [
            {
              id: "ch1_p6_q1",
              text:
                "To set a motorcycle in motion, you must use the following techniques: using the brakes, controlling the clutch, using the gearshift lever, controlling the throttle.",
              answer: true
            },
            {
              id: "ch1_p6_q2",
              text:
                "For both accelerating and decelerating, the way you shift gears is absolutely identical.",
              answer: false
            },
            {
              id: "ch1_p6_q3",
              text:
                "Skipping a gear when accelerating does not increase the time required to pass a vehicle.",
              answer: false
            },
            {
              id: "ch1_p6_q4",
              text: "Skipping a gear when downshifting causes heavy engine compression.",
              answer: true
            },
            {
              id: "ch1_p6_q5",
              text: "Before applying the brakes, it is better to slow down and downshift.",
              answer: true
            },
            {
              id: "ch1_p6_q6",
              text:
                "Coordinating the use of the two brakes helps to prevent the wheels from locking up.",
              answer: true
            },
            {
              id: "ch1_p6_q7",
              text:
                "Braking in a curve requires the same distance as braking in a straight line.",
              answer: false
            },
            {
              id: "ch1_p6_q8",
              text:
                "During emergency braking, if the brakes are applied with too much force, weight will shift toward the front suspension.",
              answer: true
            },
            {
              id: "ch1_p6_q9",
              text:
                "During emergency braking in a curve, you must take into account the inclination of your motorcycle.",
              answer: true
            },
            {
              id: "ch1_p6_q10",
              text:
                "The safe course of travel for negotiating a curve runs from the outside toward the inside of the curve.",
              answer: true
            },
            {
              id: "ch1_p6_q11",
              text:
                "The way you avoid an obstacle is different depending on the speed you are travelling.",
              answer: true
            }
          ]
        },
        {
          id: "ch1_p7",
          title: "P7 – Reacting in special situations",
          questions: [
            {
              id: "ch1_p7_q1",
              text:
                "Shimmying or wobbling of your motorcycle may be related to uneven load distribution.",
              answer: true
            },
            {
              id: "ch1_p7_q2",
              text: "Braking can amplify the effect of shimmying or wobbling.",
              answer: true
            },
            {
              id: "ch1_p7_q3",
              text: "A broken clutch cable makes downshifting almost impossible.",
              answer: true
            },
            {
              id: "ch1_p7_q4",
              text: "If the throttle is jammed, it is impossible to unjam it.",
              answer: false
            },
            {
              id: "ch1_p7_q5",
              text: "Hydroplaning causes a loss of tire traction.",
              answer: true
            },
            {
              id: "ch1_p7_q6",
              text: "It is essential for you to avoid braking when hydroplaning.",
              answer: true
            }
          ]
        }
      ]
    },
    {
      id: "ch2",
      title: "Chapter 2 – Handling a Motorcycle on the Road",
      sections: [
        {
          id: "ch2_p1a",
          title:
            "P1a – Driving techniques: road signs, signals, regulations & visual checks",
          questions: [
            {
              id: "ch2_p1a_q1",
              text: "Your eyes supply you with about 60% of the information you need for driving.",
              answer: false
            },
            {
              id: "ch2_p1a_q2",
              text:
                "Your field of vision comprises your central vision and your peripheral vision.",
              answer: true
            },
            {
              id: "ch2_p1a_q3",
              text: "Your field of vision is reduced by one half at a speed of 100 km/h.",
              answer: true
            },
            {
              id: "ch2_p1a_q4",
              text: "Travelling at high speed does not affect the size of your field of vision.",
              answer: false
            },
            {
              id: "ch2_p1a_q5",
              text: "Travelling at high speed concentrates your vision toward a single point.",
              answer: true
            },
            {
              id: "ch2_p1a_q6",
              text: "Wearing a helmet can reduce your peripheral vision.",
              answer: true
            },
            {
              id: "ch2_p1a_q7",
              text:
                "Motorcyclists must reduce their speed when visibility becomes inadequate or when the roadway is slippery.",
              answer: true
            }
          ]
        },
        {
          id: "ch2_p1b",
          title: "P1b – Driving techniques: speed and safety margins",
          questions: [
            {
              id: "ch2_p1b_q1",
              text:
                "Adapting your speed to driving conditions requires you to pay attention to traffic conditions and environmental conditions.",
              answer: true
            },
            {
              id: "ch2_p1b_q2",
              text: "Reaction time affects stopping distance.",
              answer: true
            },
            {
              id: "ch2_p1b_q3",
              text: "Having an ABS (antilock braking system) on your motorcycle reduces your braking distance.",
              answer: false
            }
          ]
        },
        {
          id: "ch2_p1c",
          title:
            "P1c – Driving techniques: communication and choosing lane thirds",
          questions: [
            {
              id: "ch2_p1c_q1",
              text: "Failure to signal your intentions does not increase the risk of an accident.",
              answer: false
            },
            {
              id: "ch2_p1c_q2",
              text:
                "When riding your motorcycle, you should imagine the lane you are travelling in as being divided into three strips (“thirds”).",
              answer: true
            },
            {
              id: "ch2_p1c_q3",
              text: "The right third of your lane is the one you use the most.",
              answer: false
            },
            {
              id: "ch2_p1c_q4",
              text: "The left third of your lane is the best position for passing or turning left.",
              answer: true
            },
            {
              id: "ch2_p1c_q5",
              text: "The middle third of your lane is the most strategic position in strong winds.",
              answer: true
            },
            {
              id: "ch2_p1c_q6",
              text:
                "The left third of your lane is the most strategic position when meeting an oncoming heavy vehicle.",
              answer: false
            },
            {
              id: "ch2_p1c_q7",
              text:
                "The left third of your lane is the safest position to be in when arriving at the top of a hill.",
              answer: false
            },
            {
              id: "ch2_p1c_q8",
              text: "It is safer to limit the number of motorcyclists in a group to eight.",
              answer: false
            },
            {
              id: "ch2_p1c_q9",
              text: "The zigzag formation is a safe way to travel.",
              answer: true
            },
            {
              id: "ch2_p1c_q10",
              text:
                "When travelling in a group, you should maintain at least a two-second safety margin between vehicles.",
              answer: true
            }
          ]
        },
        {
          id: "ch2_p2",
          title: "P2 – Manoeuvres on the road",
          questions: [
            {
              id: "ch2_p2_q1",
              text: "Visibility is often a contributing factor when accidents occur at intersections.",
              answer: true
            },
            {
              id: "ch2_p2_q2",
              text:
                "When approaching an intersection, you should position yourself in the third of your lane where you will best be able to execute the manoeuvre safely.",
              answer: true
            },
            {
              id: "ch2_p2_q3",
              text:
                "In making a turn at an intersection, you should follow a course of travel that will enable you to maintain your safety margins.",
              answer: true
            },
            {
              id: "ch2_p2_q4",
              text:
                "Accidents in a curve are often caused by failing to adapt your speed to the radius of the curve.",
              answer: true
            },
            {
              id: "ch2_p2_q5",
              text:
                "On a road with successive of curves, you should accelerate on exiting each of the curves.",
              answer: false
            },
            {
              id: "ch2_p2_q6",
              text: "When negotiating a curve, you should maintain a constant speed.",
              answer: true
            },
            {
              id: "ch2_p2_q7",
              text: "You must adapt your speed to that of the other vehicles when entering a highway.",
              answer: true
            },
            {
              id: "ch2_p2_q8",
              text: "To exit a highway, you must accelerate.",
              answer: false
            },
            {
              id: "ch2_p2_q9",
              text: "To pass a vehicle safely, you must make the appropriate visual checks.",
              answer: true
            },
            {
              id: "ch2_p2_q10",
              text: "When parking, you should position your motorcycle parallel to the curb.",
              answer: false
            }
          ]
        },
        {
          id: "ch2_p3",
          title: "P3 – Other road users",
          questions: [
            {
              id: "ch2_p3_q1",
              text: "You should avoid positioning yourself in the blind spots of a heavy vehicle.",
              answer: true
            },
            {
              id: "ch2_p3_q2",
              text: "Heavy vehicles do not create air turbulence when they travel at high speed.",
              answer: false
            },
            {
              id: "ch2_p3_q3",
              text:
                "To act safely, you must increase your safety margins when travelling near a heavy vehicle.",
              answer: true
            },
            {
              id: "ch2_p3_q4",
              text: "It is safer never to follow closely behind an emergency vehicle.",
              answer: true
            },
            {
              id: "ch2_p3_q5",
              text: "Buffer lanes are a protection measure for certain road workers.",
              answer: true
            },
            {
              id: "ch2_p3_q6",
              text:
                "To respect the buffer lane, you must slow down and, if possible, change lanes when approaching an emergency vehicle that is stopped.",
              answer: true
            },
            {
              id: "ch2_p3_q7",
              text: "Blocking a pedestrian crosswalk with your vehicle is not a way to act cooperatively.",
              answer: true
            },
            {
              id: "ch2_p3_q8",
              text: "Pedestrians never have any problem gauging the speed of an approaching vehicle.",
              answer: false
            },
            {
              id: "ch2_p3_q9",
              text: "You should anticipate that cyclists sometimes weave in and out of traffic.",
              answer: true
            },
            {
              id: "ch2_p3_q10",
              text: "Establishing eye contact with a cyclist is a good way to act cooperatively.",
              answer: true
            }
          ]
        },
        {
          id: "ch2_p4",
          title: "P4 – Pitfalls of the road",
          questions: [
            {
              id: "ch2_p4_q1",
              text:
                "Many accidents occur at intersections. If your view is obscured by trees or parked vehicles, you should be extra careful.",
              answer: true
            },
            {
              id: "ch2_p4_q2",
              text:
                "It is safe to position yourself in the right third of your lane when a heavy vehicle is turning right.",
              answer: false
            },
            {
              id: "ch2_p4_q3",
              text:
                "Instead of relying on signals from other road users, you should always do all necessary visual checks yourself.",
              answer: true
            },
            {
              id: "ch2_p4_q4",
              text: "When a driver signals to you that the lane is clear, you can perform your manoeuvre.",
              answer: false
            },
            {
              id: "ch2_p4_q5",
              text: "It is a good habit to avoid riding your motorcycle near heavy vehicles.",
              answer: true
            },
            {
              id: "ch2_p4_q6",
              text: "Riding your motorcycle in a street where vehicles are parked can be risky.",
              answer: true
            },
            {
              id: "ch2_p4_q7",
              text:
                "Positioning yourself in the right third of your lane is a good way to prevent risks when riding your motorcycle in a street where vehicles are parked.",
              answer: false
            },
            {
              id: "ch2_p4_q8",
              text:
                "If your road crosses a railway track at an angle, you should cross the rails travelling in a straight line.",
              answer: false
            }
          ]
        }
      ]
    },
    {
      id: "ch3",
      title: "Chapter 3 – Acting safely, cooperatively and responsibly",
      sections: [
        {
          id: "ch3_p1",
          title: "P1 – Risks related to the driver",
          questions: [
            {
              id: "ch3_p1_q1",
              text:
                "A motorcyclist’s age cannot possibly diminish his or her capacity to handle a motorcycle safely, cooperatively and responsibly.",
              answer: false
            },
            {
              id: "ch3_p1_q2",
              text:
                "With age, cognitive functions change, which can make coordinating movements more difficult.",
              answer: true
            },
            {
              id: "ch3_p1_q3",
              text:
                "The reasons why a person wants to learn to ride a motorcycle never have any impact on road safety.",
              answer: false
            },
            {
              id: "ch3_p1_q4",
              text:
                "A motorcyclist’s personality cannot possibly influence the way he or she drives or behaves on the road.",
              answer: false
            },
            {
              id: "ch3_p1_q5",
              text: "Your emotions can affect your concentration and judgment.",
              answer: true
            },
            {
              id: "ch3_p1_q6",
              text:
                "Keeping a cool head in conflict situations is a good way to prevent the situation from escalating.",
              answer: true
            },
            {
              id: "ch3_p1_q7",
              text:
                "Driving while stressed can make it more difficult to communicate with other road users.",
              answer: true
            },
            {
              id: "ch3_p1_q8",
              text:
                "A motorcyclist cannot possibly be influenced by the reckless behaviour of another motorcyclist.",
              answer: false
            },
            {
              id: "ch3_p1_q9",
              text:
                "Thinking that you are a better driver than you actually are can jeopardize your safety and that of others.",
              answer: true
            },
            {
              id: "ch3_p1_q10",
              text: "A sleep deficit inevitably leads to physical and mental fatigue.",
              answer: true
            },
            {
              id: "ch3_p1_q11",
              text: "A sleep deficit of five hours has the same effect as a few glasses of wine.",
              answer: true
            },
            {
              id: "ch3_p1_q12",
              text: "Fatigue is one of the leading causes of death on our roads.",
              answer: true
            },
            {
              id: "ch3_p1_q13",
              text: "Operating a motorcycle requires less physical effort than driving a car.",
              answer: false
            },
            {
              id: "ch3_p1_q14",
              text: "Consuming alcohol can reduce peripheral vision.",
              answer: true
            },
            {
              id: "ch3_p1_q15",
              text: "Consuming medications has no impact on how you operate your motorcycle.",
              answer: false
            },
            {
              id: "ch3_p1_q16",
              text: "Consuming alcohol does not slow down reaction time.",
              answer: false
            }
          ]
        },
        {
          id: "ch3_p2",
          title: "P2 – Risks related to driving conditions",
          questions: [
            {
              id: "ch3_p2_q1",
              text:
                "To maintain your braking capacity when riding your motorcycle in the rain, you must brake at regular intervals to dry out your brakes.",
              answer: true
            },
            {
              id: "ch3_p2_q2",
              text:
                "Water can infiltrate between the rotors and the brake pads and increase braking distance.",
              answer: true
            },
            {
              id: "ch3_p2_q3",
              text:
                "When it is foggy, it may be safer to pull over onto the shoulder than to continue riding your motorcycle.",
              answer: true
            },
            {
              id: "ch3_p2_q4",
              text:
                "Crosswinds can cause your motorcycle to swerve out of the third of the lane you are travelling in.",
              answer: true
            },
            {
              id: "ch3_p2_q5",
              text: "When it is windy, you should travel in the left third of your lane.",
              answer: false
            },
            {
              id: "ch3_p2_q6",
              text:
                "To compensate for the force of wind on your bike, you may have to countersteer.",
              answer: true
            },
            {
              id: "ch3_p2_q7",
              text:
                "A good way to reduce risks at night may be to limit how much you pass other vehicles.",
              answer: true
            },
            {
              id: "ch3_p2_q8",
              text:
                "To drive safely in hazardous environmental conditions, you must reduce your speed and increase your safety margins.",
              answer: true
            },
            {
              id: "ch3_p2_q9",
              text: "Dirt or gravel roads give you the same degree of traction as asphalt pavement.",
              answer: false
            },
            {
              id: "ch3_p2_q10",
              text: "Travelling on a dirt or gravel road can cause shimmying or wobbling.",
              answer: true
            },
            {
              id: "ch3_p2_q11",
              text:
                "Whatever type of road surface your motorcycle is travelling on, the risk of skidding is always the same.",
              answer: false
            },
            {
              id: "ch3_p2_q12",
              text:
                "When riding a motorcycle, braking distance is the same on asphalt pavement as on a gravel road.",
              answer: false
            },
            {
              id: "ch3_p2_q13",
              text: "The lines painted on the pavement are never slippery.",
              answer: false
            },
            {
              id: "ch3_p2_q14",
              text:
                "Acting safely means wearing light or brightly coloured clothing in hazardous environmental conditions.",
              answer: true
            }
          ]
        },
        {
          id: "ch3_p3",
          title: "P3 – Risks related to the vehicle used",
          questions: [
            {
              id: "ch3_p3_q1",
              text: "It is never necessary to check the oil level of your motorcycle.",
              answer: false
            },
            {
              id: "ch3_p3_q2",
              text: "The owner’s manual contains information about tire pressure.",
              answer: true
            },
            {
              id: "ch3_p3_q3",
              text: "It is never necessary to consult the owner’s manual.",
              answer: false
            },
            {
              id: "ch3_p3_q4",
              text:
                "Carrying extra loads affects the way you negotiate curves and operate your motorcycle at low speeds.",
              answer: true
            },
            {
              id: "ch3_p3_q5",
              text: "Uneven load distribution can cause shimmying or wobbling.",
              answer: true
            },
            {
              id: "ch3_p3_q6",
              text:
                "It may be necessary to adjust the height of the headlight to compensate for dipping due to compression when you are carrying extra loads on your motorcycle.",
              answer: true
            },
            {
              id: "ch3_p3_q7",
              text:
                "When carrying baggage, you should load it on your motorcycle as low and as close to the middle as possible.",
              answer: true
            },
            {
              id: "ch3_p3_q8",
              text:
                "To act safely when carrying a passenger, the two of you should agree on how to communicate during the trip before heading out.",
              answer: true
            }
          ]
        },
        {
          id: "ch3_p4",
          title: "P4 – Planning your trips in advance",
          questions: [
            {
              id: "ch3_p4_q1",
              text: "It is never possible to reduce your risk of having a traffic accident.",
              answer: false
            },
            {
              id: "ch3_p4_q2",
              text: "When you are tired, your reaction time can be up to twice as long as usual.",
              answer: true
            },
            {
              id: "ch3_p4_q3",
              text:
                "Heading out on the road on your motorcycle when you are tired increases your risk of an accident.",
              answer: true
            },
            {
              id: "ch3_p4_q4",
              text:
                "Drinking an energy drink after you have consumed a few glasses of wine reduces your risk of an accident.",
              answer: false
            },
            {
              id: "ch3_p4_q5",
              text:
                "When it is pouring rain, it is safer to use another means of transportation than your motorcycle.",
              answer: true
            },
            {
              id: "ch3_p4_q6",
              text:
                "Heading out on the road with a motorcycle whose mechanical condition has not been checked in a long time increases your risk of an accident.",
              answer: true
            },
            {
              id: "ch3_p4_q7",
              text:
                "When a new motorcycling season begins, it is safer to reaccustom yourself gradually to riding before heading out for a long trip.",
              answer: true
            },
            {
              id: "ch3_p4_q8",
              text:
                "Being a responsible motorcyclist means making it a habit to wear a complete protective outfit, even when the weather is very hot.",
              answer: true
            },
            {
              id: "ch3_p4_q9",
              text:
                "Receiving bad news and immediately taking your bike out for a ride never increases risks.",
              answer: false
            },
            {
              id: "ch3_p4_q10",
              text:
                "Heading out on the road with another motorcyclist who drives recklessly cannot influence how you drive.",
              answer: false
            },
            {
              id: "ch3_p4_q11",
              text: "The most significant risk factor on the road is the driver.",
              answer: true
            },
            {
              id: "ch3_p4_q12",
              text:
                "Acting safely, cooperatively and responsibly means evaluating all three types of risks before heading out on the road.",
              answer: true
            }
          ]
        }
      ]
    }
  ];

  global.quizData = quizData;
})(typeof window !== "undefined" ? window : globalThis);