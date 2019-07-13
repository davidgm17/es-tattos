package org.stattos404.models.db.user;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name = "images")
public class Images {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "path")
    private String path;

    @Column(name = "tag_name")
    private String tag_name;

    @Column(name = "upload_date")
    private Date upload_date;

    @Column(name = "description")
    private String description;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getTag_name() {
        return tag_name;
    }

    public void setTag_name(String tag_name) {
        this.tag_name = tag_name;
    }

    public Date getUpload_date() {
        return upload_date;
    }

    public void setUpload_date(Date upload_date) {
        this.upload_date = upload_date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    
    @Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((path == null) ? 0 : path.hashCode());
		result = prime * result + ((tag_name == null) ? 0 : tag_name.hashCode());
		result = prime * result + ((upload_date == null) ? 0 : upload_date.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Images other = (Images) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (path == null) {
			if (other.path != null)
				return false;
		} else if (!path.equals(other.path))
			return false;
		if (tag_name == null) {
			if (other.tag_name != null)
				return false;
		} else if (!tag_name.equals(other.tag_name))
			return false;
		if (upload_date == null) {
			if (other.upload_date != null)
				return false;
		} else if (!upload_date.equals(other.upload_date))
			return false;
		return true;
	}

	@Override
    public String toString() {
        return "Images{" +
                "id=" + id +
                ", path='" + path + '\'' +
                ", tag_name='" + tag_name + '\'' +
                ", upload_date=" + upload_date +
                ", description='" + description + '\'' +
                '}';
    }
}
