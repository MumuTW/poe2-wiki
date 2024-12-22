import React from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { AscendancyPath, AscendancyNode } from '../data/classesData';

interface AscendancyTreeProps {
  ascendancy: AscendancyPath;
}

const AscendancyTree: React.FC<AscendancyTreeProps> = ({ ascendancy }) => {
  // 自定義節點樣式
  const nodeStyle = {
    padding: 10,
    borderRadius: 5,
    fontSize: '12px',
    width: 180,
    textAlign: 'left' as const,
    color: '#fff',
  };

  // 生成節點數據
  const generateNodes = (nodes: AscendancyNode[]): Node[] => {
    return nodes.map((node, index) => ({
      id: `${index}`,
      type: 'default',
      position: { x: 100, y: 100 + index * 150 },
      data: {
        label: (
          <div>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
              {node.name}
            </div>
            <div style={{ fontSize: '11px', marginBottom: '5px' }}>
              {node.description}
            </div>
            <div style={{ fontSize: '10px' }}>
              {node.stats.map((stat, i) => (
                <div key={i}>{stat}</div>
              ))}
            </div>
          </div>
        ),
      },
      style: {
        ...nodeStyle,
        background: node.isKeystone
          ? 'linear-gradient(to bottom, #8b0000, #580000)'
          : node.isNotable
          ? 'linear-gradient(to bottom, #4b0082, #2b0048)'
          : 'linear-gradient(to bottom, #1e3a8a, #0f1f4d)',
        border: node.isKeystone
          ? '2px solid #ff0000'
          : node.isNotable
          ? '2px solid #9400d3'
          : '2px solid #4a90e2',
      },
    }));
  };

  // 生成連接線數據
  const generateEdges = (nodes: AscendancyNode[]): Edge[] => {
    return nodes.slice(1).map((_, index) => ({
      id: `e${index}`,
      source: `${index}`,
      target: `${index + 1}`,
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#4a90e2' },
    }));
  };

  const initialNodes = generateNodes(ascendancy.nodes);
  const initialEdges = generateEdges(ascendancy.nodes);
  const [nodes] = React.useState<Node[]>(initialNodes);
  const [edges] = React.useState<Edge[]>(initialEdges);

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        attributionPosition="bottom-left"
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default AscendancyTree;
