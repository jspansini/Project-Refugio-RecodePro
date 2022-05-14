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
public class AtenderDadiva implements Serializable {
	
	
		private static final long serialVersionUID = 1L;
	
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id;
		private String Nome;
	    private String Telefone;
	    private String Email;
	    
	    @ManyToOne
	    @JoinColumn
	    public SolicitarDadiva solicitardadiva;
	    
	    public AtenderDadiva() {
	    	
	    }

		public AtenderDadiva(Long id, String nome, String telefone, String email) {
			this.id = id;
			Nome = nome;
			Telefone = telefone;
			Email = email;
		}

		public AtenderDadiva(SolicitarDadiva solicitardadiva) {
			super();
			this.solicitardadiva.setEmail(solicitardadiva.getEmail());
			this.solicitardadiva.setEndereco(solicitardadiva.getEndereco());
			this.solicitardadiva.setId(solicitardadiva.getId());
			this.solicitardadiva.setOng(solicitardadiva.getOng());
			this.solicitardadiva.setTelefone(solicitardadiva.getTelefone());
			this.solicitardadiva.setAtenderdadiva(solicitardadiva.getAtenderdadiva());
			this.solicitardadiva.setDadiva(solicitardadiva.getDadiva());
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

		public SolicitarDadiva getSolicitardadiva() {
			return solicitardadiva;
		}

		public void setSolicitardadiva(SolicitarDadiva solicitardadiva) {
			this.solicitardadiva = solicitardadiva;
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
			AtenderDadiva other = (AtenderDadiva) obj;
			return Objects.equals(id, other.id);
		}
		
		
		
	    
	    
	    
	    
	    
	    
	    
}
