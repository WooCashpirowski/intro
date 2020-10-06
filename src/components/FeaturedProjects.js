import React from "react";
import styled from "styled-components";
import { BiLinkExternal } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";
import { client } from "../client";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
  margin-top: 2rem;
  padding: 2rem 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .project {
    position: relative;
    width: 315px;
    height: 200px;
    margin: 0 1rem 1rem;

    text-align: left;
    .info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.75);
      color: var(--color-dark);

      padding: 0.5rem 1rem;
      opacity: 0;
      transition: all 0.3s ease-in-out;
      &.dark {
        color: var(--color-light);
        background: rgba(0, 0, 0, 0.85);

        border: 1px solid var(--color-light);
      }

      h3 {
        margin: 0.7rem 0;
      }
      p {
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 1rem;
      }
      .badge {
        display: inline-block;
        font-size: 14px;
        padding: 0.2rem 0.3rem;
        border-radius: 3px;
        background: var(--color-secondary);
        color: var(--color-light);
        margin-right: 0.3rem;
        margin-bottom: 0.3rem;
        text-transform: uppercase;
      }
      .icons {
        position: absolute;
        bottom: 5px;
        right: 5px;
        a {
          svg {
            font-size: 1.8rem;
            margin: 0.2rem;
            transition: var(--main-transition);
            &:hover {
              transform: scale(1.05);
              color: var(--color-secondary);
            }
          }
        }
      }
    }
    &:hover .info {
      opacity: 1;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Projects = ({ darkMode }) => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchProjects = () => {
      client
        .getEntries({
          content_type: "project",
        })
        .then((res) => {
          setProjectsData(res.items);
        })
        .catch(console.error);
    };
    fetchProjects();
  }, []);

  const projects = projectsData
    .map((project) => {
      const {
        fields: {
          id,
          desc,
          title,
          featured,
          stack,
          website,
          github,
          image: {
            fields: {
              file: { url },
            },
          },
        },
      } = project;
      const badges = Object.keys(stack).map((item) => {
        return stack[item];
      });
      return {
        id,
        title,
        desc,
        website,
        github,
        badges,
        url,
        featured,
      };
    })
    .sort((a, b) => a.id - b.id);

  return (
    <Wrapper>
      {projects.map(
        (project) =>
          project.featured && (
            <div className="project" key={project.id}>
              <div className={darkMode ? "info dark" : "info"}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                {project.badges.map((item, i) => (
                  <div className="badge" key={i}>
                    {item}
                  </div>
                ))}
                <div className="icons">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <VscGithub />
                    </a>
                  )}
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLinkExternal />
                  </a>
                </div>
              </div>
              <img src={project.url} alt={project.title} />
            </div>
          )
      )}
    </Wrapper>
  );
};

export default Projects;
