exports.prime=function(number)
{
    a=[]
    fact=2
    if(number==1)
        return null
    
    while(number>1)
    {
        if(number%fact==0)
        {
            a.push(fact)
            number/=fact
        }
       else
       fact++
    }
    return a
    
   
}