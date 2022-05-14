package br.com.Squad21.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "Usuario")
public class User implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private Integer UserId;
	
	private String Nome;
	
	private String Email;
	
	private String Senha;
	
	private String Role;
	
	public User () {
		
	}
	
	

	public User(Integer userId, String nome, String email, String senha, String role) {
		super();
		UserId = userId;
		Nome = nome;
		Email = email;
		Senha = senha;
		Role = role;
	}



	public Integer getUserId() {
		return UserId;
	}

	public void setUserId(Integer userId) {
		UserId = userId;
	}

	public String getNome() {
		return Nome;
	}

	public void setNome(String nome) {
		Nome = nome;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getSenha() {
		return Senha;
	}

	public void setSenha(String senha) {
		Senha = senha;
	}

	public String getRole() {
		return Role;
	}

	public void setRole(String role) {
		Role = role;
	}



	@Override
	public int hashCode() {
		return Objects.hash(UserId);
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (getClass() != obj.getClass()) {
			return false;
		}
		User other = (User) obj;
		return Objects.equals(UserId, other.UserId);
	}
	
	

}
