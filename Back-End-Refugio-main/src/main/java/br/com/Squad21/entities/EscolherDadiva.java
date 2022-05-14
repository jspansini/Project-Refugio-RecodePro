package br.com.Squad21.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class EscolherDadiva implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String Ong;
    private String Endereco;
    private String Telefone; 
    private String Email;
    
    @ManyToOne
    @JoinColumn
    public CriarDadiva criardadiva;
    
    public EscolherDadiva() {
    	
    }


	public EscolherDadiva(Long id, String ong, String endereco, String telefone, String email) {
		this.id = id;
		Ong = ong;
		Endereco = endereco;
		Telefone = telefone;
		Email = email;
	}


	public EscolherDadiva(CriarDadiva criardadiva) {
		super();
		this.criardadiva.setEmail(criardadiva.getEmail());
		this.criardadiva.setNome(criardadiva.getNome());
		this.criardadiva.setTelefone(criardadiva.getTelefone());
		this.criardadiva.setEscolherdadiva(criardadiva.getEscolherdadiva());
		this.criardadiva.setId(criardadiva.getId());
		this.criardadiva.setDadiva(criardadiva.getDadiva());
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getOng() {
		return Ong;
	}


	public void setOng(String ong) {
		Ong = ong;
	}


	public String getEndereco() {
		return Endereco;
	}


	public void setEndereco(String endereco) {
		Endereco = endereco;
	}


	public String getTelefone() {
		return Telefone;
	}


	public void setTelefone(String telefone) {
		Telefone = telefone;
	}


	public String getEmail() {
		return Email;
	}


	public void setEmail(String email) {
		Email = email;
	}


	public CriarDadiva getCriardadiva() {
		return criardadiva;
	}


	public void setCriardadiva(CriarDadiva criardadiva) {
		this.criardadiva = criardadiva;
	}


	@Override
	public int hashCode() {
		return Objects.hash(id);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		EscolherDadiva other = (EscolherDadiva) obj;
		return Objects.equals(id, other.id);
	}
	
	
	
    
    
    
	

}
