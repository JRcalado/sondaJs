class Planalto{

    eixoHorizontal = 5
    eixoVertical = 5
    
    bordaDoPlanalto(eixoHorizontal,  eixoVertical){

        if( eixoHorizontal > this.eixoHorizontal || eixoVertical > this.eixoVertical){
                return false
        }
        return true
    }

}