# Monster-Hunt is a basic react app
live https://ezeh20.github.io/Monster-Hunt/

## This app enabled me understand basic react concepts. These concepts, made react standout in the year 2013 <br/>
&nbsp; &nbsp; Before react there was jquery library, anglar framework by google. These guys tried to make DOM manipulation <br/> easy and 
uniform across all browers. Although they took the imperative approach where the developer still had to <br/>directly mess 
with the DOM, they still made mapulation, event handling faster.<br/>
##
&nbsp; &nbsp; Angular by google came up with a framework that allowed developers build complex web apps, it provided <br/>
the necessary blocks which made development faster but there was a problem, diffrent parts of the app will <br/> affect other 
parts of the app in an unpredictable manner because of the multidirectional flow of data.

# React concepts that changed the game.
- Declarative
- Component based system
- Unidirectional flow of data
- Just the User Interface the rest is up to you
# Declarative
&nbsp; &nbsp;The developers at facebook came up with the idea of a virtual DOM. The virtual DOM is painted by the react library all the developer
needs to do is to define the states of the web app then the react library wiil paint a blueprint using the current state of the 
app and the required component.The react bot is our worker tool who then manipulates the real DOM using the blueprint generated 
by the react library there by rendering what is intended. This way the developer does not need to touch the DOM as the react bot will handle 
this hence making life easier.
# Component based system
&nbsp; &nbsp;This system encourages the break down  of the app into smaller reusable units (components) , where these components can be used anywhere in the app as many times 
as needed. Components can also contain smaller components thereby further breaking the app into smaller units.<br/>
&nbsp; &nbsp;Components are js functions that receives props then returns the needed content thereby making each component responsible for it's own state which.
# Advantages of a Component based system
- It provides increase in performance since our app is broken into simplier smaller units
- It makes testing less complex
- The app is flexible due to the fact that components can be used anywhere in the app
- Seperation of concern : each component is handles one function and one function allow <br/> which makes it easier to debug
# Unidirectional flow of data
&nbsp; &nbsp;In react, data flows from top to down, our worker (react bot) lurks under the hood monitoring events that occurs in the app.If an event that changes 
a state is triggered, the bot intercepts that event, moves to the state of the app then changes the state.This then causes the app to rerender based on the current 
state.
&nbsp; &nbsp;This one way data flow sloved the problem Angular js had, now diffrent parts of the app will behave in a predictable manner
# Just the User Interface the rest is up to you
&nbsp; &nbsp;React is only concerned with the view of the app leaving you with the power to include other modules you may need to develop complex app the way you desire
