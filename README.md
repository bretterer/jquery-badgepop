jQuery Badge Pop Plugin
========

### Simple Usage ###
`.badgePop(options)`

###### Options
yPop: The spot of scroll height in px you want the pop to happen.

<code>
    $('selector').badgePop({yPop:100});
</code>

### Advanced Options ###
`.badgePop(options)`

###### Options
yPop: The spot of scroll height in px you want the pop to happen. (Default: 0)    
scale: Scale size of final element. (Default: 1)    
ease: What easing you want to use. (Default: Elastic.easeOut)    
mainDuration: number of seconds you want the main element to take (Default: 1)    
childDuration: Number of seconds you want the children to take. (Default: .75)    
childOpacity: Final Opacity of the children elements. (Default: 1)    
childDelay: How long of a delay until the child elements begin to show (Default: .25)    


<code>
    $('selector').badgePop(
        {
            'yPop':10,    
            'scale':4,
            'ease':'Elastic.easeIn',    
            'mainDuration':3,    
            'childDuration':'1.5',    
            'childOpacity':'.5',    
            'childDelay':6    
        }
    );
</code>


### License ###
Created and maintained by Brian Retterer. Copyright © 2013. Licensed under the [MIT license](LICENSE.md).

