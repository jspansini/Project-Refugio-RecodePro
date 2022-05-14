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
public class SolicitarDadiva implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String Ong;
    private String Endereco;
    private String Telefone; 
    private String Email;
    private String Dadiva;
    
    @JsonIgnore
    @OneToMany(mappedBy = "solicitardadiva")
    public List<AtenderDadiva> atenderdadiva;
    
    public SolicitarDadiva() {
    	
    }


	public SolicitarDadiva(Long id, String ong, String endereco, String telefone, String email, String dadiva) {
		this.id = id;
		Ong = ong;
		Endereco = endereco;
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


	public String getDadiva() {
		return Dadiva;
	}


	public void setDadiva(String dadiva) {
		Dadiva = dadiva;
	}


	public List<AtenderDadiva> getAtenderdadiva() {
		return atenderdadiva;
	}


	public void setAtenderdadiva(List<AtenderDadiva> atenderdadiva) {
		this.atenderdadiva = atenderdadiva;
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
		SolicitarDadiva other = (SolicitarDadiva) obj;
		return Objects.equals(id, other.id);
	}
    
	
	
    
    
	
	

}
