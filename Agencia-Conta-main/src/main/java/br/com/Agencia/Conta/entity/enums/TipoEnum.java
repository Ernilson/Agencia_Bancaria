package br.com.Agencia.Conta.entity.enums;

public enum TipoEnum {
    Credito,
    Debito;

    @Override
    public String toString() {
        return this.name();
    }
}
