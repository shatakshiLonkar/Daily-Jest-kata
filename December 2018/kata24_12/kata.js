exports.prime=function(number)
{
    let a=[];
    let fact=2;
    if(number==1)
    {
        return null;
    }
    while(number>fact)
    {
        if(number%fact==0)
        {
            a.push(fact);
            number/=fact;
        }
        else
        {
            fact++;
        }
    }

       

        if(number>1)
        {
            a.push(number);
        }
        return a;
}