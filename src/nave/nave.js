class Nave{

    posicaoHorizontal = 0
    posicaoVertical = 0
    frente = 'sul'

    mudarPosicao(posicaoHorizontal,posicaoVertical){
        this.posicaoHorizontal = posicaoHorizontal
        this.posicaoVertical = posicaoVertical
    }

    giraNave(frente){
        this.frente = frente
    }

}