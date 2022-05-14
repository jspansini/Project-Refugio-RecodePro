package br.com.Squad21.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class CriarDadiva implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String Nome;
    private String Telefone;
    private String Email;
    private String Dadiva;
    
    @JsonIgnore
	@OneToMany(mappedBy = "criardadiva")
    public List<EscolherDadiva> escolherdadiva;
    
    public CriarDadiva( ) {
    	
    }


	public CriarDadiva(Long id, String nome, String telefone, String email, String dadiva) {
		this.id = id;
		Nome = nome;
		Telefone = telefone;
		Email = email;
		Dadiva = dadiva;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNome() {
		return Nome;
	}


	public void setNome(String nome) {
		Nome = nome;
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

	public String getDadiva() {
		return Dadiva;
	}


	public void setDadiva(String dadiva) {
		Dadiva = dadiva;
	}


	public List<EscolherDadiva> getEscolherdadiva() {
		return escolherdadiva;
	}


	public void setEscolherdadiva(List<EscolherDadiva> escolherdadiva) {
		this.escolherdadiva = escolherdadiva;
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
		CriarDadiva other = (CriarDadiva) obj;
		return Objects.equals(id, other.id);
	}
	
	
	
    
    
    
    
    
    
}



