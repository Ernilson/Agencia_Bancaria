package br.com.Agencia.Conta.entity;

import br.com.Agencia.Conta.entity.enums.TipoEnum;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "tb_transacao")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Transacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataOperacao;
    @Enumerated(EnumType.STRING)
    private TipoEnum tipo; // "Credito" ou "Debito"
    private Double valor;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    @PrePersist
    public void prePersist() {
        setDataOperacao(LocalDate.now());
    }
}
